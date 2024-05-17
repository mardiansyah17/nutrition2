import 'package:flutter/material.dart';
import 'package:get/route_manager.dart';
import 'package:nutrition/constans/colors.dart';
import 'package:nutrition/models/nutrition.dart';
import 'package:nutrition/services/nutrition_service.dart';
import 'package:nutrition/widgets/chart_nutrition.dart';
import 'package:nutrition/widgets/layout.dart';

class DetailNutrition extends StatefulWidget {
  DetailNutrition({super.key});

  @override
  State<DetailNutrition> createState() => _DetailNutritionState();
}

class _DetailNutritionState extends State<DetailNutrition> {
  // var id = Get.arguments["id"];
  bool loading = false;
  DataNutrition? nutrition;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    NutritionService.findOne(1).then((value) => {
          setState(() {
            nutrition = value;
          })
        });
  }

  @override
  Widget build(BuildContext context) {
    return Layout(
      title: Text("Kandungan nutrisi"),
      body: SingleChildScrollView(
        child: Container(
          padding: EdgeInsets.all(15),
          child: Container(
            child: Column(
              children: [
                Container(
                  alignment: Alignment.center,
                  child: Column(
                    children: [
                      Text(
                        "Nasi putih",
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
                Row(
                  children: [
                    ChartNutrition(
                      titile: "Energi",
                      value: "180kcal",
                      percent: 8.37,
                    ),
                    ChartNutrition(
                      titile: "Protein",
                      value: "3 g",
                      percent: 5,
                    ),
                    ChartNutrition(
                      titile: "Karbo",
                      value: "39.80 g",
                      percent: 12.25,
                    ),
                  ],
                ),
                Container(
                  padding: EdgeInsets.all(10),
                  decoration: BoxDecoration(
                      color: Colors.white,
                      boxShadow: [
                        BoxShadow(
                          color: Color(0xFF000000).withOpacity(0.4),
                          offset: Offset(4, 6),
                          blurRadius: 18,
                          spreadRadius: -5,
                        ),
                      ],
                      border: Border.all(color: Colors.grey.shade300)),
                  child: Column(
                    children: [
                      Container(
                        margin: EdgeInsets.only(bottom: 10),
                        alignment: Alignment.centerLeft,
                        child: Text(
                          "Informasi nilai gizi",
                          style: TextStyle(
                              fontSize: 16, fontWeight: FontWeight.w600),
                        ),
                      ),
                      DataTable(
                          horizontalMargin: 0,
                          headingTextStyle: TextStyle(
                              color: primary,
                              fontWeight: FontWeight.w600,
                              fontSize: 15),
                          dataTextStyle: TextStyle(color: primary),
                          columnSpacing: 40,
                          columns: [
                            DataColumn(label: Text('Nutrisi')),
                            DataColumn(label: Text('Jumlah')),
                            DataColumn(label: Text('% AKG*')),
                          ],
                          rows: [
                            DataRow(cells: [
                              DataCell(Text('Energi')),
                              DataCell(Text('32 kkal')),
                              DataCell(Text('1.49%')),
                            ]),
                            DataRow(cells: [
                              DataCell(Text('Lemak total')),
                              DataCell(Text('0.30 g')),
                              DataCell(Text('0.45%')),
                            ]),
                            DataRow(cells: [
                              DataCell(Text('Vitamin A')),
                              DataCell(Text('0 mcg')),
                              DataCell(Text('0%')),
                            ]),
                            DataRow(cells: [
                              DataCell(Text('Vitamin B1')),
                              DataCell(Text('0.05 mg')),
                              DataCell(Text('5%')),
                            ]),
                            DataRow(cells: [
                              DataCell(Text('Vitamin B2')),
                              DataCell(Text('0.05 mg')),
                              DataCell(Text('5%')),
                            ]),
                            DataRow(cells: [
                              DataCell(Text('Vitamin B3')),
                              DataCell(Text('0.80 mg')),
                              DataCell(Text('5.33%')),
                            ]),
                            DataRow(cells: [
                              DataCell(Text('Vitamin C')),
                              DataCell(Text('10 mg')),
                              DataCell(Text('11.11%')),
                            ]),
                            DataRow(cells: [
                              DataCell(Text('Karbohidrat total')),
                              DataCell(Text('7.10 g')),
                              DataCell(Text('2.18%')),
                            ]),
                            DataRow(cells: [
                              DataCell(Text('Protein')),
                              DataCell(Text('1.20 g')),
                              DataCell(Text('2%')),
                            ]),
                            DataRow(cells: [
                              DataCell(Text('Serat pangan')),
                              DataCell(Text('3.20 g')),
                              DataCell(Text('10.67%')),
                            ]),
                            DataRow(cells: [
                              DataCell(Text('Kalsium')),
                              DataCell(Text('30 mg')),
                              DataCell(Text('2.73%')),
                            ]),
                            DataRow(cells: [
                              DataCell(Text('Fosfor')),
                              DataCell(Text('50 mg')),
                              DataCell(Text('7.14%')),
                            ]),
                            DataRow(cells: [
                              DataCell(Text('Natrium')),
                              DataCell(Text('3 mg')),
                              DataCell(Text('0.20%')),
                            ]),
                            DataRow(cells: [
                              DataCell(Text('Kalium')),
                              DataCell(Text('524 mg')),
                              DataCell(Text('11.15%')),
                            ]),
                            DataRow(cells: [
                              DataCell(Text('Tembaga')),
                              DataCell(Text('90 mcg')),
                              DataCell(Text('11.25%')),
                            ]),
                            DataRow(cells: [
                              DataCell(Text('Besi')),
                              DataCell(Text('0.10 mg')),
                              DataCell(Text('0.45%')),
                            ]),
                            DataRow(cells: [
                              DataCell(Text('Seng')),
                              DataCell(Text('0.30 mg')),
                              DataCell(Text('2.31%'))
                            ])
                          ])
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
}

class NilaiGizi extends StatelessWidget {
  const NilaiGizi({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(bottom: 5),
      child: Row(
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
      padding: EdgeInsets.only(left: 10),
      margin: EdgeInsets.only(bottom: 5),
      child: Row(
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
