import 'package:flutter/material.dart';
import 'package:nutrition/constans/colors.dart';

class Button extends StatelessWidget {
  final String text;
  final void Function() onPressed;
  const Button({
    super.key,
    required this.text,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(7),
          gradient: const LinearGradient(
              begin: Alignment.bottomLeft,
              end: Alignment.topRight,
              colors: [primary, Color.fromARGB(255, 10, 211, 174)])),
      child: ElevatedButton(
          onPressed: onPressed,
          style: ElevatedButton.styleFrom(
              backgroundColor: Colors.transparent,
              shadowColor: Colors.transparent,
              fixedSize: Size(395, 55)),
          child: Text(
            text,
            style: TextStyle(
                fontSize: 17, fontWeight: FontWeight.w600, color: Colors.white),
          )),
    );
  }
}
