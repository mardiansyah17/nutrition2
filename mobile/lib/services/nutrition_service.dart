import 'dart:convert';

import 'package:localstorage/localstorage.dart';
import 'package:nutrition/models/nutrition.dart';
import 'package:http/http.dart' as http;

class NutritionService {
  static const baseUrl = "http://10.0.2.2:5001/api/v1/nutritions";
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
}
