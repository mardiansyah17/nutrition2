import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:intl/intl.dart';
import 'package:localstorage/localstorage.dart';
import 'package:nutrition/models/daily_plan.dart';

class DailyPlanService {
  static const baseUrl = "http://10.0.2.2:5001/api/v1/daily-plan";
  static Future<DailyPlan> getDailyPlan({DateTime? date}) async {
    final token = localStorage.getItem('token');
    final dateStr = DateFormat('yyyy-MM-dd', 'id_ID')
        .format(DateTime.parse(date.toString()));
    final response = await http.get(Uri.parse('$baseUrl/${dateStr}'), headers: {
      "Authorization": token!,
    });

    final result = jsonDecode(response.body);

    DailyPlan dailyPlan = DailyPlan.fromJson(result);
    return dailyPlan;
  }

  static dynamic deletePlanItem(id) async {
    final token = localStorage.getItem('token');
    final response =
        await http.delete(Uri.parse('$baseUrl/${id.toString()}'), headers: {
      "Authorization": token!,
    });
    if (response.statusCode == 500) return {"meesage": "Error server"};
  }

  static dynamic createDailyPlan(category_id, nutrition_id, date) async {
    final token = localStorage.getItem('token');
    final dateStr = DateFormat('yyyy-MM-dd', 'id_ID')
        .format(DateTime.parse(date.toString()));
    Map<String, dynamic> body = {
      "category_id": category_id,
      "nutrition_id": nutrition_id,
      "date": dateStr,
    };
    final response = await http.post(
      Uri.parse('$baseUrl/'),
      body: json.encode(body),
      headers: {
        "Authorization": token!,
        'Content-Type': 'application/json; charset=UTF-8',
      },
    );
    if (response.statusCode == 500) return {"meesage": "Error server"};
  }
}
