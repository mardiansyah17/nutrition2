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

  @override
  void initState() {
    // gemini.textAndImage(
    //     // generationConfig: ,
    //     text:
    //         "Apakah ini termasuk makanan atau minuman jika iya apa namanya dan apa saja komposisinya buatkan secara detail dalam bentuk tabel pastikan sangat detail",

    //     /// text
    //     images: [File(imagePath).readAsBytesSync()]

    //     /// list of images
    //     ).then((val) {
    //   setState(() {
    //     answer = val?.content?.parts?.last.text;
    //   });
    //   animationController.stop();
    // });
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
                    height: 500,
                  ),
                ),
                ImageScanner(controller: animationController)
              ],
            )
          : Markdown(data: answer!),
    );
  }
}
