import 'package:flutter/material.dart';
import 'package:get/route_manager.dart';
import 'package:intl/intl.dart';
import 'package:nutrition/constans/colors.dart';
import 'package:nutrition/models/daily_plan.dart';
import 'package:nutrition/models/nutrition.dart';
import 'package:nutrition/services/daily_plan_service.dart';
import 'package:nutrition/widgets/layout.dart';
import 'package:nutrition/widgets/loading.dart';

class ListPlanPerDay extends StatefulWidget {
  const ListPlanPerDay({super.key});

  @override
  State<ListPlanPerDay> createState() => _ListPlanPerDayState();
}

class _ListPlanPerDayState extends State<ListPlanPerDay> {
  final DateTime _dateTime = Get.arguments?["datetime"];
  DailyPlan? dailyPlan;
  bool isLoading = true;
  @override
  void initState() {
    DailyPlanService.getDailyPlan(date: _dateTime).then((val) => {
          setState(() {
            dailyPlan = val;
            isLoading = false;
          })
        });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Layout(
      title: Text(DateFormat('dd MMMM yyyy', 'id_ID')
          .format(DateTime.parse(_dateTime.toString()))),
      body: isLoading
          ? const Loading()
          : Padding(
              padding: const EdgeInsets.all(8.0),
              child: ListView.builder(
                  itemCount: dailyPlan?.plans.length ?? 0,
                  itemBuilder: (ctx, i) {
                    final plan = dailyPlan!.plans[i];
                    return DailyPlanList(
                        title: plan.name,
                        category: plan.id,
                        nutritions: plan.nutritions);
                  }),
            ),
    );
  }
}

class DailyPlanList extends StatelessWidget {
  final String title;
  final int category;
  final List<DataNutrition> nutritions;
  const DailyPlanList(
      {super.key,
      required this.title,
      required this.category,
      required this.nutritions});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              title,
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
            ),
            GestureDetector(
              onTap: () => Get.toNamed('/search-nutrition',
                  arguments: {"showAddBtn": true, "category": category}),
              child: Text(
                "Tambah",
                style: TextStyle(color: primary),
              ),
            )
          ],
        ),
        SizedBox(
          height: 5,
        ),
        ListView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          itemCount: nutritions.length,
          itemBuilder: (ctx, i) {
            final nutrition = nutritions[i];
            return Container(
              margin: EdgeInsets.only(bottom: 15),
              padding: EdgeInsets.all(12),
              height: 60,
              decoration: BoxDecoration(
                  boxShadow: [
                    BoxShadow(
                      color: Color(0xFF000000).withOpacity(0.1),
                      offset: Offset(1, 0),
                      blurRadius: 15,
                      spreadRadius: 1,
                    ),
                  ],
                  gradient: LinearGradient(
                      stops: [0.02, 0.02], colors: [primary, Colors.white]),
                  borderRadius: BorderRadius.circular(4)),
              child: Container(
                padding: EdgeInsets.only(left: 10),
                alignment: Alignment.centerLeft,
                child: Text(nutrition.name),
              ),
            );
          },
        ),
      ],
    );
  }
}
