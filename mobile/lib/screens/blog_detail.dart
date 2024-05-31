import 'package:flutter/material.dart';
import 'package:get/route_manager.dart';
import 'package:nutrition/models/blog.dart';
import 'package:nutrition/services/blog_service.dart';
import 'package:nutrition/widgets/loading.dart';
import 'package:flutter_html/flutter_html.dart';

class BlogDetail extends StatefulWidget {
  const BlogDetail({super.key});

  @override
  State<BlogDetail> createState() => _BlogDetailState();
}

class _BlogDetailState extends State<BlogDetail> {
  final ScrollController _scrollController = ScrollController();
  bool loading = true;
  final id = Get.arguments['id'];
  BlogData? blogData;
  double postionScroll = 0;
  @override
  void initState() {
    // TODO: implement initState
    _scrollController.addListener(_onScroll);
    super.initState();
    BlogService.findBlogById(id).then((val) => {
          setState(() {
            blogData = val;
            loading = false;
          })
        });
  }

  @override
  void dispose() {
    _scrollController.removeListener(_onScroll);
    _scrollController.dispose();
    super.dispose();
  }

  void _onScroll() {
    // Ambil posisi scroll saat ini
    double currentScrollPosition = _scrollController.position.pixels;
    setState(() {
      postionScroll = currentScrollPosition;
    });
    // Ambil batas bawah dari scroll
    double maxScrollExtent = _scrollController.position.maxScrollExtent;

    // Cek apakah posisi scroll mencapai titik tertentu (misalnya 200.0)
    // print('User telah mencapai titik scroll $currentScrollPosition');
  }

  @override
  Widget build(BuildContext context) {
    return loading || blogData == null
        ? Scaffold(
            body: Center(
              child: Loading(),
            ),
          )
        : Scaffold(
            // backgroundColor: Colors.white,
            extendBodyBehindAppBar: true,
            appBar: AppBar(
              leading: IconButton(
                color: postionScroll > 200 ? Colors.black : Colors.white,
                iconSize: 25,
                icon: Icon(Icons.arrow_back),
                onPressed: () => {},
              ),
              title: Visibility(
                visible: postionScroll > 200,
                child: Text(
                  blogData!.title,
                  style: TextStyle(
                      color: postionScroll > 200 ? Colors.black : Colors.white,
                      fontSize: 20),
                ),
              ),
              elevation: 0,
              backgroundColor:
                  postionScroll > 200 ? Colors.white : Colors.transparent,
            ),
            body: SingleChildScrollView(
              controller: _scrollController,
              child: Column(
                children: [
                  Container(
                    height: 250,
                    decoration: BoxDecoration(
                        image: DecorationImage(
                            image: AssetImage('assets/images/cover-1.jpeg'),
                            fit: BoxFit.cover)),
                  ),
                  Html(data: blogData!.content)
                ],
              ),
            ),
          );
  }
}
