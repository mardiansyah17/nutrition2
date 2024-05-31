import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class ImageScanner extends AnimatedWidget {
  const ImageScanner({
    super.key,
    required AnimationController controller,
  }) : super(listenable: controller);
  @override
  Widget build(BuildContext context) {
    final Animation<double> animation = listenable as Animation<double>;
    final scorePosition = (animation.value * 440) + 16;

    Color color1 = Color(0x5532CD32);
    Color color2 = Color(0x0032CD32);

    if (animation.status == AnimationStatus.reverse) {
      color1 = Color(0x0032CD32);
      color2 = Color(0x5532CD32);
    }

    return Positioned(
      bottom: scorePosition,
      left: 0,
      right: 0,
      child: Opacity(
        opacity: 1.0,
        child: Container(
          height: 60.0,
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              stops: [0.1, 0.9],
              colors: [color1, color2],
            ),
          ),
        ),
      ),
    );
  }
}
