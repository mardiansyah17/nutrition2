import 'package:flutter/material.dart';
import 'package:get/route_manager.dart';
import 'package:loading_animation_widget/loading_animation_widget.dart';
import 'package:nutrition/constans/colors.dart';
import 'package:nutrition/models/nutrition.dart';
import 'package:nutrition/services/daily_plan_service.dart';
import 'package:nutrition/services/nutrition_service.dart';
import 'package:nutrition/widgets/chart_nutrition.dart';
import 'package:nutrition/widgets/layout.dart';
import 'package:nutrition/widgets/nutrition_table.dart';

class DetailNutrition extends StatefulWidget {
  DetailNutrition({super.key});
  bool showAddBtn = Get.arguments?['showAddBtn'] ?? false;

  @override
  State<DetailNutrition> createState() => _DetailNutritionState();
}

class _DetailNutritionState extends State<DetailNutrition> {
  var id = Get.arguments["id"];
  var ids = Get.arguments['ids'];
  var category = Get.arguments?["category"];
  DateTime? dateTime = Get.arguments?["dateTime"];
  bool loading = false;
  DataNutrition? nutrition;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  
    if (id != null) {
      NutritionService.findOne(id).then((value) => {
            setState(() {
              nutrition = value;
              loading = false;
            })
          });
    }
  
    if(ids!=null){
      NutritionService.getManyByIds(ids).then((value){
        print(value);
           setState(() {
              nutrition = value;
              loading = false;
            });
      });
        if (id == null) {
      return print('kosong');
    }
    }
  }

 

  @override
  Widget build(BuildContext context) {
    print(ids);
    return Layout(
      title: const Text("Kandungan nutrisi"),
      actions: [
        IconButton(
            onPressed: () async => {
                  await DailyPlanService.createDailyPlan(
                      category, id, dateTime),
                  Get.offNamed('/daily-plan', arguments: {
                    "datetime": dateTime,
                    "message": "Berhasil menambahkan rencana"
                  })
                },
            icon:
                Visibility(visible: category != null, child: Icon(Icons.check)))
      ],
      body: SingleChildScrollView(
        child: loading || nutrition == null
            ? Center(
                child: LoadingAnimationWidget.staggeredDotsWave(
                    color: primary, size: 50),
              )
            : Container(
                padding: const EdgeInsets.all(15),
                child: Container(
                  child: Column(
                    children: [
                      Container(
                        alignment: Alignment.center,
                        child: Column(
                          children: [
                            // Text(
                            //   "${nutrition?.name ?? ""}",
                            //   style: TextStyle(
                            //       fontSize: 18, fontWeight: FontWeight.w600),
                            // ),
                            Text(
                              "Takaran per 100 g",
                              style: TextStyle(
                                  fontSize: 13, fontWeight: FontWeight.w400),
                            ),
                          ],
                        ),
                      ),
                      // _allChartNutrition(),
                      SizedBox(
                        height: 20,
                      ),
                      Container(
                        padding: const EdgeInsets.all(10),
                        decoration: BoxDecoration(
                            color: Colors.white,
                            boxShadow: [
                              BoxShadow(
                                color: const Color(0xFF000000).withOpacity(0.4),
                                offset: const Offset(4, 6),
                                blurRadius: 18,
                                spreadRadius: -5,
                              ),
                            ],
                            border: Border.all(color: Colors.grey.shade300)),
                        child: Column(
                          children: [
                            Container(
                              margin: const EdgeInsets.only(bottom: 10),
                              alignment: Alignment.centerLeft,
                              child: const Text(
                                "Informasi nilai gizi",
                                style: TextStyle(
                                    fontSize: 16, fontWeight: FontWeight.w600),
                              ),
                            ),
                            NutritionTable(
                              nutrition: nutrition!,
                            )
                          ],
                        ),
                      )
                    ],
                  ),
                ),
              ),
      ),
    );
  }

  Widget _allChartNutrition() {
    return const Row(
      children: [
        ChartNutrition(
          titile: "Energi",
          value: 180,
          satuan: "kcal",
          akg: 2150,
        ),
        ChartNutrition(
          titile: "Protein",
          value: 3,
          satuan: "g",
          akg: 60,
        ),
        ChartNutrition(
          titile: "Karbo",
          value: 39.80,
          satuan: "g",
          akg: 325,
        ),
      ],
    );
  }
}
