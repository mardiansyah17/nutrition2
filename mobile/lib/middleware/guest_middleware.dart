import 'package:flutter/src/widgets/navigator.dart';
import 'package:get/get.dart';
import 'package:jwt_decoder/jwt_decoder.dart';
import 'package:localstorage/localstorage.dart';

class GuestMiddleware extends GetMiddleware {
  @override
  RouteSettings? redirect(String? route) {
    // TODO: implement redirect
    final token = localStorage.getItem('token');
    if (token != null) {
      final user = JwtDecoder.decode(token);
      // userController.setUser(user);
      return RouteSettings(
          name: '/daily-plan',
          // name: '/',
          arguments: {"datetime": DateTime.parse("2024-05-26 00:00:00.000Z")});
    }

    return super.redirect(route);
  }
}
