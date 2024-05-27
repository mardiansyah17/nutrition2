import 'package:get/route_manager.dart';
import 'package:nutrition/middleware/auth_middleware.dart';
import 'package:nutrition/middleware/guest_middleware.dart';
import 'package:nutrition/screens/detail_nutrition.dart';
import 'package:nutrition/screens/home.dart';
import 'package:nutrition/screens/list_plan_per_day.dart';
import 'package:nutrition/screens/login.dart';
import 'package:nutrition/screens/pedometer.dart';
import 'package:nutrition/screens/plan.dart';
import 'package:nutrition/screens/register.dart';
import 'package:nutrition/screens/search_nutritions.dart';

appRoutes() => [
      GetPage(
          name: '/login',
          page: () => Login(),
          transition: Transition.leftToRight,
          middlewares: [GuestMiddleware()]),
      GetPage(name: '/', page: () => Home(), middlewares: [AuthMiddleware()]),
      GetPage(
          name: '/search-nutrition',
          page: () => const SearchNutrition(),
          transition: Transition.leftToRight),
      GetPage(
          name: '/detail-nutrition',
          page: () => DetailNutrition(),
          transition: Transition.leftToRight),
      GetPage(
          name: '/pedometer',
          page: () => const Pedometer(),
          transition: Transition.leftToRight),
      GetPage(
          name: '/plan-calendar',
          page: () => const Plan(),
          transition: Transition.leftToRight),
      GetPage(
          name: '/daily-plan',
          page: () => const ListPlanPerDay(),
          transition: Transition.leftToRight),
      GetPage(
          name: '/register',
          page: () => Register(),
          transition: Transition.downToUp),
    ];
