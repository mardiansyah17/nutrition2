import 'package:flutter/material.dart';
import 'package:nutrition/widgets/best_article.dart';
import 'package:nutrition/widgets/features.dart';
import 'package:nutrition/widgets/layout.dart';

class Home extends StatelessWidget {
  Home({super.key});
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    return Layout(
      key: _scaffoldKey,
      isNotHome: false,
      title: Builder(builder: (context) {
        return GestureDetector(
          onTap: () {
            Scaffold.of(context).openDrawer();
          },
          child: CircleAvatar(
            child: ClipOval(
              child: Image.asset(
                'assets/images/avatar.jpg',
              ),
            ),
          ),
        );
      }),
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: SingleChildScrollView(
                child: Padding(
                  padding: EdgeInsets.all(20.0),
                  child: Column(
                    children: [
                      Features(),
                      SizedBox(height: 30),
                      BestArticle(),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
