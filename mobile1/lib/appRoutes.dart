import 'package:get/route_manager.dart';
import 'package:nutrition/screens/detail_nutrition.dart';
import 'package:nutrition/screens/home.dart';
import 'package:nutrition/screens/search_nutritions.dart';

appRoutes() => [
      GetPage(name: '/', page: () => Home()),
      GetPage(
          name: '/search-nutrition',
          page: () => SearchNutrition(),
          transition: Transition.leftToRight),
      GetPage(
          name: '/detail-nutrition',
          page: () => DetailNutrition(),
          transition: Transition.leftToRight),
    ];
