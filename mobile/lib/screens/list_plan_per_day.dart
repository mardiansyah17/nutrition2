import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:get/route_manager.dart';
import 'package:intl/intl.dart';
import 'package:nutrition/constans/colors.dart';
import 'package:nutrition/models/daily_plan.dart';
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
  String? message = Get.arguments?["message"];
  DailyPlan? dailyPlan;
  bool isLoading = true;
  @override
  void initState() {
    fetchPlan();
    if (message != null) {
      Fluttertoast.showToast(
          msg: message!,
          toastLength: Toast.LENGTH_SHORT,
          gravity: ToastGravity.TOP,
          timeInSecForIosWeb: 1,
          backgroundColor: primary,
          textColor: Colors.white,
          fontSize: 16.0);
    }
    super.initState();
  }

  void fetchPlan() {
    DailyPlanService.getDailyPlan(date: _dateTime).then((val) => {
          setState(() {
            dailyPlan = val;
            isLoading = false;
          })
        });
  }

  void deletePlanHandler(int id) async {
    await DailyPlanService.deletePlanItem(id);
    Fluttertoast.showToast(
        msg: "Berhasil di hapus",
        toastLength: Toast.LENGTH_SHORT,
        gravity: ToastGravity.TOP,
        timeInSecForIosWeb: 1,
        backgroundColor: primary,
        textColor: Colors.white,
        fontSize: 16.0);
    fetchPlan();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(DateFormat('dd MMMM yyyy', 'id_ID')
            .format(DateTime.parse(_dateTime.toString()))),
      ),
      body: PopScope(
        canPop: false,
        onPopInvoked: (didPop) {
          Get.toNamed('/plan-calendar');
        },
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: ListView.builder(
              itemCount: dailyPlan?.categories.length ?? 0,
              itemBuilder: (ctx, i) {
                final category = dailyPlan!.categories[i];
                return DailyPlanList(
                  title: category.name,
                  category: category.id,
                  plans: category.plans,
                  dateTime: _dateTime,
                  onDeleteItemPlan: deletePlanHandler,
                );
              }),
        ),
      ),
    );
  }
}

class DailyPlanList extends StatelessWidget {
  final String title;
  final int category;
  final List<Plan> plans;
  final Function onDeleteItemPlan;
  final DateTime dateTime;
  const DailyPlanList(
      {super.key,
      required this.title,
      required this.category,
      required this.plans,
      required this.onDeleteItemPlan,
      required this.dateTime});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              title,
              style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold),
            ),
            GestureDetector(
              onTap: () => Get.toNamed('/search-nutrition', arguments: {
                "showAddBtn": true,
                "category": category,
                "date": dateTime
              }),
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
        plans.length == 0
            ? Container(
                height: 60,
                margin: EdgeInsets.only(top: 15),
                child: Text(
                  "Wah belum ada rencana $title",
                  style: TextStyle(fontSize: 15),
                ),
              )
            : ReorderableListView(
                itemExtent: 70,
                shrinkWrap: true,
                onReorder: (oldIndex, newIndex) {
                  print(oldIndex);
                  if (newIndex > oldIndex) {
                    newIndex -= 1;
                  }
                  final item = plans.removeAt(oldIndex);
                  plans.insert(newIndex, item);
                },
                children: <Widget>[
                  for (int index = 0; index < plans.length; index += 1)
                    ItemPlanNutrition(
                        key: ValueKey(plans[index].id),
                        plan: plans[index],
                        onDelete: onDeleteItemPlan)
                ],
              )
      ],
    );
  }
}

class ItemPlanNutrition extends StatelessWidget {
  const ItemPlanNutrition({
    super.key,
    required this.plan,
    required this.onDelete,
  });

  final Plan plan;
  final Function onDelete;
  @override
  Widget build(BuildContext context) {
    return Slidable(
        endActionPane: ActionPane(
          motion: const ScrollMotion(),
          children: [
            // A SlidableAction can have an icon and/or a label.
            SlidableAction(
              onPressed: (ctx) {
                onDelete(plan.id);
              },
              backgroundColor: Color(0xFFFE4A49),
              foregroundColor: Colors.white,
              icon: Icons.delete,
              label: 'Delete',
            ),
          ],
        ),
        child: Container(
          // margin: EdgeInsets.only(bottom: 15),

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
            child: Text(plan.nutrition.name),
          ),
        ));
  }
}
