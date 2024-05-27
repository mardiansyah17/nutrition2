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
}
