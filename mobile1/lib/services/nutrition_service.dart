import 'dart:convert';

import 'package:nutrition/models/nutrition.dart';
import 'package:http/http.dart' as http;

class NutritionService {
  static const baseUrl = "http://192.168.93.217:5001/api/v1/nutritions";
  static Future<Nutrition> fetchAll({String? search, int? page = 1}) async {
    final response = await http.get(Uri.parse(baseUrl)
        .replace(queryParameters: {"search": search, "page": page.toString()}));
    final result = jsonDecode(response.body);

    Nutrition nutrition = Nutrition.fromJson(result);

    return nutrition;
  }

  static Future<DataNutrition> findOne(id) async {
    final response = await http.get(Uri.parse("${baseUrl}/1"));
    final result = jsonDecode(response.body);

    DataNutrition nutrition = DataNutrition.fromJson(result['nutrition']);

    return nutrition;
  }
}
