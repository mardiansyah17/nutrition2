import 'package:flutter/material.dart';
import 'package:nutrition/constans/colors.dart';

class Button extends StatelessWidget {
  final String text;
  final void Function() onPressed;
  final bool disable;
  const Button(
      {super.key,
      required this.text,
      required this.onPressed,
      this.disable = false});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(7),
          gradient: LinearGradient(
              begin: Alignment.bottomLeft,
              end: Alignment.topRight,
              colors: disable
                  ? [
                      Color.fromARGB(255, 118, 238, 216),
                      Color.fromARGB(255, 118, 238, 216)
                    ]
                  : [primary, Color.fromARGB(255, 10, 211, 174)])),
      child: ElevatedButton(
          onPressed: disable ? () {} : onPressed,
          style: ElevatedButton.styleFrom(
              backgroundColor: Colors.transparent,
              shadowColor: Colors.transparent,
              fixedSize: Size(395, 55)),
          child: disable
              ? CircularProgressIndicator(
                  color: primary,
                )
              : Text(
                  text,
                  style: TextStyle(
                      fontSize: 17,
                      fontWeight: FontWeight.w600,
                      color: Colors.white),
                )),
    );
  }
}
