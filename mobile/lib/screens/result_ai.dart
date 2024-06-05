import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_gemini/flutter_gemini.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:get/route_manager.dart';
import 'package:nutrition/widgets/image_scanner.dart';

class ResultAi extends StatefulWidget {
  const ResultAi({super.key});

  @override
  State<ResultAi> createState() => _ResultAiState();
}

class _ResultAiState extends State<ResultAi> with TickerProviderStateMixin {
  final gemini = Gemini.instance;

  // String imagePath =
  //     "/data/user/0/com.example.nutrition/cache/2ab658f7-dabd-47a4-9865-77a914658213/images.jpg";
  String imagePath = Get.arguments['imagePath'];
  late final AnimationController animationController =
      AnimationController(vsync: this, duration: Duration(seconds: 3))
        ..repeat(reverse: true);
  String? answer;
  String prompt = """
Saya membuat aplikasi analisa komposisi gizi dari foto menggunakan AI. 
Silakan analisa gambar berikut dan jawab pertanyaan-pertanyaan berikut:
 Apa nama makanan atau minuman tersebut?
 Berikan tabel komposisi gizinya per 100 gram dalam format berikut jika gambar tersebut bukan makanan atau minuman jawab maaf gambar tidak sesuai:

   | Nutrisi         | Jumlah     |
   |-----------------|------------|
   | Kalori          | x kcal     |
   | Protein         | x g        |
   | Lemak           | x g        |
   | Karbohidrat     | x g        |
   | Serat           | x g        |
   | Gula            | x g        |
   | Vitamin A       | x IU       |
   | Vitamin C       | x mg       |
   | Kalsium         | x mg       |
   | Zat Besi        | x mg       |

Berikut adalah link atau gambar makanan/minuman yang ingin dianalisa: [URL atau Gambar]

Terima kasih atas bantuannya!
""";
  @override
  void initState() {
    gemini.textAndImage(
        // generationConfig: ,
        text: prompt,

        /// text
        images: [File(imagePath).readAsBytesSync()]

        /// list of images
        ).then((val) {
      setState(() {
        answer = val?.content?.parts?.last.text;
      });
      animationController.stop();
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: Text("Hasil"),
          shape: Border(
            bottom: BorderSide(color: Colors.grey.shade300, width: 1),
          )),
      body: answer == null
          ? Stack(
              children: [
                Container(
                  // color: Colors.blue,
                  padding: EdgeInsets.all(1),
                  child: Image.file(
                    File(imagePath),
                    // height: 500,
                  ),
                ),
                ImageScanner(controller: animationController)
              ],
            )
          : Markdown(data: answer!),
    );
  }
}
