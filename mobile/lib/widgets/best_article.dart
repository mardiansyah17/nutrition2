import 'package:flutter/material.dart';
import 'package:get/route_manager.dart';
import 'package:nutrition/models/blog.dart';
import 'package:nutrition/services/blog_service.dart';
import 'package:nutrition/widgets/loading.dart';
import 'package:pull_to_refresh_flutter3/pull_to_refresh_flutter3.dart';

class BestArticle extends StatefulWidget {
  const BestArticle({super.key});

  @override
  State<BestArticle> createState() => _BestArticleState();
}

class _BestArticleState extends State<BestArticle> {
  Blog? blog;
  bool loading = false;
  @override
  void initState() {
    super.initState();

    BlogService.getBlogs().then((value) => {
          setState(() {
            blog = value;
            loading = false;
          })
        });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          alignment: Alignment.centerLeft,
          padding: EdgeInsets.symmetric(horizontal: 10),
          child: const Text(
            "Artikel populer",
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.w600),
          ),
        ),
        const SizedBox(
          height: 33,
        ),
        loading || blog == null
            ? const Loading()
            : ListBestAricle(
                blog: blog!,
              )
      ],
    );
  }
}

class ListBestAricle extends StatelessWidget {
  const ListBestAricle({super.key, required this.blog});

  final Blog blog;
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      shrinkWrap: true,
      itemCount: blog.blogs.length,
      itemBuilder: (context, index) {
        final blogData = blog.blogs[index];
        return InkWell(
          onTap: () => {
            Get.toNamed('/blog', arguments: {"id": blogData.id})
          },
          child: Container(
            padding: EdgeInsets.all(10),
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
                Expanded(
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        blogData.title,
                        style: TextStyle(
                            fontSize: 16, fontWeight: FontWeight.w600),
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
          ),
        );
      },
    );
  }
}


//  Flexible(
//                   child: Text(
//                     "Soal Gizi hingga Target Program Makan Siang Gratis Sedang Dikaji",
//                     style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
//                   ),
//                 ),