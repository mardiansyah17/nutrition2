import 'package:flutter/material.dart';
import 'package:nutrition/constans/colors.dart';

class Layout extends StatelessWidget {
  const Layout(
      {super.key,
      required this.body,
      required this.title,
      this.isNotHome = true});
  final Widget body;
  final Widget title;
  final bool isNotHome;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0xffFBFBFB),
      extendBody: true,
      appBar: AppBar(
        titleSpacing: isNotHome ? 0 : 15,
        title: Row(
          children: [
            Visibility(
              visible: isNotHome,
              child: IconButton(
                icon: Icon(Icons.arrow_back, color: primary),
                onPressed: () => Navigator.of(context).pop(),
              ),
            ),
            SizedBox(
              width: 5,
            ),
            title
          ],
        ),
        automaticallyImplyLeading: false,
      ),
      body: body,
    );
  }
}
