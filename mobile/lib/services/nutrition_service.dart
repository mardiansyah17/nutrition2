import 'dart:convert';

import 'package:localstorage/localstorage.dart';
import 'package:nutrition/constans/base_url.dart';
import 'package:nutrition/models/nutrition.dart';
import 'package:http/http.dart' as http;

class NutritionService {
  static const baseUrl = "$baseUrlApp/nutritions";
  static Future<Nutrition> fetchAll({String? search, int? page = 1}) async {
    final token = localStorage.getItem('token');
    final response = await http.get(
        Uri.parse(baseUrl).replace(
            queryParameters: {"search": search, "page": page.toString()}),
        headers: {
          "Authorization": token!,
        });

    final result = jsonDecode(response.body);

    Nutrition nutrition = Nutrition.fromJson(result);

    return nutrition;
  }

  static Future<DataNutrition> findOne(id) async {
    final token = localStorage.getItem('token');

    final response = await http.get(Uri.parse("$baseUrl/${id}"), headers: {
      "Authorization": token!,
    });
    final result = jsonDecode(response.body);

    DataNutrition nutrition = DataNutrition.fromJson(result['nutrition']);

    return nutrition;
  }

  static Future<dynamic> getManyByIds(ids) async {
    final token = localStorage.getItem('token');
    Map<String, List> body = {"ids": ids};
    final response = await http.post(Uri.parse("$baseUrl/get-many"),
        body: json.encode(body),
        headers: {
          "Authorization": token!,
          'Content-Type': 'application/json; charset=UTF-8',
        });
    if (response.statusCode == 404) {
      return print("not found");
    }

    final result = jsonDecode(response.body);

    DataNutrition nutrition = DataNutrition.fromJson(result['nutrition']);

    return nutrition;
  }
}
