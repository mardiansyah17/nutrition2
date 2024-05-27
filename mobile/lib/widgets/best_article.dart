import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class BestArticle extends StatelessWidget {
  const BestArticle({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          alignment: Alignment.centerLeft,
          child: const Text(
            "Artikel populer",
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.w600),
          ),
        ),
        const SizedBox(
          height: 33,
        ),
        const ListBestAricle()
      ],
    );
  }
}

class ListBestAricle extends StatelessWidget {
  const ListBestAricle({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const Column(
      children: [
        ArticleItem(),
        ArticleItem(),
        ArticleItem(),
        ArticleItem(),
      ],
    );
  }
}

class ArticleItem extends StatelessWidget {
  const ArticleItem({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100,
      margin: const EdgeInsets.only(bottom: 10),
      child: Row(
        children: [
          ClipRRect(
              borderRadius: BorderRadius.circular(10),
              child: Image.asset(
                'assets/images/cover-1.jpeg',
                width: 75,
                height: 75,
                fit: BoxFit.cover,
              )),
          const SizedBox(
            width: 16,
          ),
          const Expanded(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "Soal Gizi hingga Target Program Makan Siang Gratis Sedang Dikaji",
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
                  overflow: TextOverflow.ellipsis,
                  maxLines: 2,
                ),
                SizedBox(
                  height: 10,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text("2 hari yang lalu"),
                    Row(
                      children: [
                        Text("Di baca 100 kali"),
                      ],
                    )
                  ],
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}

//  Flexible(
//                   child: Text(
//                     "Soal Gizi hingga Target Program Makan Siang Gratis Sedang Dikaji",
//                     style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
//                   ),
//                 ),