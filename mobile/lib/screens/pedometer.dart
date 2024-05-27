import 'package:flutter/material.dart';
import 'package:nutrition/widgets/layout.dart';

class Pedometer extends StatelessWidget {
  const Pedometer({super.key});

  @override
  Widget build(BuildContext context) {
    return Layout(title: Text("Penghitung langkah kaki"), body: Placeholder());
  }
}
