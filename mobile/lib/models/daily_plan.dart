// To parse this JSON data, do
//
//     final dailyPlan = dailyPlanFromJson(jsonString);

import 'dart:convert';

DailyPlan dailyPlanFromJson(String str) => DailyPlan.fromJson(json.decode(str));

String dailyPlanToJson(DailyPlan data) => json.encode(data.toJson());

class DailyPlan {
  String date;
  List<Category> categories;

  DailyPlan({
    required this.date,
    required this.categories,
  });

  factory DailyPlan.fromJson(Map<String, dynamic> json) => DailyPlan(
        date: json["date"],
        categories: List<Category>.from(
            json["categories"].map((x) => Category.fromJson(x))),
      );

  Map<String, dynamic> toJson() => {
        "date": date,
        "categories": List<dynamic>.from(categories.map((x) => x.toJson())),
      };
}

class Category {
  int id;
  String name;
  List<Plan> plans;

  Category({
    required this.id,
    required this.name,
    required this.plans,
  });

  factory Category.fromJson(Map<String, dynamic> json) => Category(
        id: json["id"],
        name: json["name"],
        plans: List<Plan>.from(json["plans"].map((x) => Plan.fromJson(x))),
      );

  Map<String, dynamic> toJson() => {
        "id": id,
        "name": name,
        "plans": List<dynamic>.from(plans.map((x) => x.toJson())),
      };
}

class Plan {
  int id;
  Nutrition nutrition;

  Plan({
    required this.id,
    required this.nutrition,
  });

  factory Plan.fromJson(Map<String, dynamic> json) => Plan(
        id: json["id"],
        nutrition: Nutrition.fromJson(json["nutrition"]),
      );

  Map<String, dynamic> toJson() => {
        "id": id,
        "nutrition": nutrition.toJson(),
      };
}

class Nutrition {
  int id;
  String name;

  Nutrition({
    required this.id,
    required this.name,
  });

  factory Nutrition.fromJson(Map<String, dynamic> json) => Nutrition(
        id: json["id"],
        name: json["name"],
      );

  Map<String, dynamic> toJson() => {
        "id": id,
        "name": name,
      };
}
