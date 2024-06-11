import 'package:flutter/material.dart';
import 'package:nutrition/constans/colors.dart';

class AppTheme {
  static final light = ThemeData.light().copyWith(
      scaffoldBackgroundColor: Colors.white,
      appBarTheme: AppBarTheme(backgroundColor: Colors.white),
      canvasColor: Colors.transparent,
      shadowColor: Colors.transparent,
      inputDecorationTheme: const InputDecorationTheme(
          errorBorder:
              OutlineInputBorder(borderSide: BorderSide(color: Colors.red)),
          focusedErrorBorder:
              OutlineInputBorder(borderSide: BorderSide(color: Colors.red)),
          enabledBorder:
              OutlineInputBorder(borderSide: BorderSide(color: primary)),
          focusedBorder: OutlineInputBorder(
              borderSide: BorderSide(width: 2.1, color: primary))));
}
