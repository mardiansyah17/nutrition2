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
        name: '/',
        // name: '/daily-plan',
        // arguments: {"id": 1}
        //
      );
    }

    return super.redirect(route);
  }
}
