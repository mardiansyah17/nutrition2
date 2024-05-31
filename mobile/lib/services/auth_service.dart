import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:nutrition/constans/base_url.dart';

class AuthService {
  static const baseUrl = "$baseUrlApp/auth";

  static Future register(email, name, password, confirmPassword) async {
    Map<String, dynamic> body = {
      "email": email,
      "name": name,
      "password": password,
      "confirmPassword": confirmPassword,
    };
    final response = await http.post(
      Uri.parse('$baseUrl/register'),
      body: json.encode(body),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
    );

    final result = jsonDecode(response.body);
    return {"statusCode": response.statusCode, "result": result};
  }

  static Future login(email, password) async {
    Map<String, dynamic> body = {
      "email": email,
      "password": password,
    };
    final response = await http.post(
      Uri.parse('$baseUrl/login'),
      body: json.encode(body),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
    );

    final result = jsonDecode(response.body);
    return {"statusCode": response.statusCode, "result": result};
  }
}
