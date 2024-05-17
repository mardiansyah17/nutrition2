import 'package:flutter/material.dart';
import 'package:nutrition/widgets/best_article.dart';
import 'package:nutrition/widgets/features.dart';
import 'package:nutrition/widgets/layout.dart';

class Home extends StatelessWidget {
  const Home({Key? key});

  @override
  Widget build(BuildContext context) {
    return Layout(
      isNotHome: false,
      title: CircleAvatar(
        child: ClipOval(
          child: Image.asset(
            'assets/images/avatar.jpg',
          ),
        ),
      ),
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: SingleChildScrollView(
                child: Padding(
                  padding: const EdgeInsets.all(20.0),
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
