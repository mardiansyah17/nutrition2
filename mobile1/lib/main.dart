import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:get/route_manager.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:nutrition/appRoutes.dart';
import 'package:nutrition/constans/colors.dart';
import 'package:nutrition/screens/home.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
          appBarTheme: AppBarTheme(
            backgroundColor: Colors.white,
          ),
          useMaterial3: true,
          fontFamily: GoogleFonts.poppins().fontFamily),
      getPages: appRoutes(),
      initialRoute: "/",
    );
  }
}
