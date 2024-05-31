import 'package:flutter/material.dart';
import 'package:flutter_gemini/flutter_gemini.dart';
import 'package:get/route_manager.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:localstorage/localstorage.dart';
import 'package:nutrition/appRoutes.dart';
import 'package:nutrition/app_theme.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await initLocalStorage();
  Gemini.init(apiKey: 'AIzaSyCskPOKeVJf1kpKtfQO4WWbpPppcUQf0A8');
  initializeDateFormatting().then((_) => runApp(MyApp()));
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'Sehat',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.light,
      getPages: appRoutes(),
      initialRoute: "/scan",
    );
  }
}
