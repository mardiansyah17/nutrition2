import 'dart:convert';

import 'package:nutrition/models/nutrition.dart';

DailyPlan dailyPlanFromJson(String str) => DailyPlan.fromJson(json.decode(str));

String dailyPlanToJson(DailyPlan data) => json.encode(data.toJson());

class DailyPlan {
  List<Plans> plans;

  DailyPlan({
    required this.plans,
  });

  factory DailyPlan.fromJson(Map<String, dynamic> json) => DailyPlan(
        plans: List<Plans>.from(json["data"].map((x) => Plans.fromJson(x))),
      );

  Map<String, dynamic> toJson() => {
        "plans": List<dynamic>.from(plans.map((x) => x.toJson())),
      };
}

class Plans {
  int id;
  String name;
  List<DataNutrition> nutritions;

  Plans({
    required this.id,
    required this.name,
    required this.nutritions,
  });

  factory Plans.fromJson(Map<String, dynamic> json) => Plans(
        id: json["id"],
        name: json["name"],
        nutritions: List<DataNutrition>.from(
            json["nutritions"].map((x) => DataNutrition.fromJson(x))),
      );

  Map<String, dynamic> toJson() => {
        "id": id,
        "name": name,
        "nutritions": List<dynamic>.from(nutritions.map((x) => x.toJson())),
      };
}
