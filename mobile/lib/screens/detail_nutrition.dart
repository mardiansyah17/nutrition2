import 'package:flutter/material.dart';
import 'package:get/route_manager.dart';
import 'package:loading_animation_widget/loading_animation_widget.dart';
import 'package:nutrition/constans/colors.dart';
import 'package:nutrition/models/nutrition.dart';
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
  bool loading = true;
  DataNutrition? nutrition;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    if (id == null) {
      return print('kosong');
    }
    NutritionService.findOne(id).then((value) => {
          setState(() {
            nutrition = value;
            loading = false;
          })
        });
  }

  @override
  Widget build(BuildContext context) {
    return Layout(
      title: const Text("Kandungan nutrisi"),
      actions: [IconButton(onPressed: () => {}, icon: Icon(Icons.check))],
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
                            Text(
                              "${nutrition?.name ?? ""}",
                              style: TextStyle(
                                  fontSize: 18, fontWeight: FontWeight.w600),
                            ),
                            Text(
                              "Takaran per 100 g",
                              style: TextStyle(
                                  fontSize: 13, fontWeight: FontWeight.w400),
                            ),
                          ],
                        ),
                      ),
                      _allChartNutrition(),
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

class NilaiGizi extends StatelessWidget {
  const NilaiGizi({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 5),
      child: const Row(
        children: [
          Text("Energi sdasd", style: TextStyle(color: primary)),
          SizedBox(
            width: 130,
          ),
          Text("180 kcal", style: TextStyle(color: primary)),
          SizedBox(
            width: 80,
          ),
          Text("8,37%", style: TextStyle(color: primary)),
        ],
      ),
    );
  }
}

class SubNilaiGizi extends StatelessWidget {
  const SubNilaiGizi({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.only(left: 10),
      margin: const EdgeInsets.only(bottom: 5),
      child: const Row(
        children: [
          Text("Energi"),
          SizedBox(
            width: 120,
          ),
          Text("180 kcal"),
          SizedBox(
            width: 80,
          ),
          Text("8,37%"),
        ],
      ),
    );
  }
}
