import 'package:get/route_manager.dart';

class AuthMiddleware extends GetMiddleware {
  @override
  Future<GetNavConfig?> redirectDelegate(GetNavConfig route) async {
    if (1 == 1) {
      // If the user is not logged in, redirect to the login page
      return GetNavConfig.fromRoute('/register');
    }
    return await super.redirectDelegate(route);
  }
}
