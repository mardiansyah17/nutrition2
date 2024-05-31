import 'package:flutter/material.dart';
import 'package:get/route_manager.dart';
import 'package:loading_animation_widget/loading_animation_widget.dart';
import 'package:nutrition/constans/colors.dart';
import 'package:nutrition/models/meta.dart';
import 'package:nutrition/models/nutrition.dart';
import 'package:nutrition/services/nutrition_service.dart';
import 'package:nutrition/widgets/layout.dart';
import 'package:nutrition/widgets/loading.dart';

class SearchNutrition extends StatefulWidget {
  const SearchNutrition({super.key});

  @override
  State<SearchNutrition> createState() => _SearchNutritionState();
}

class _SearchNutritionState extends State<SearchNutrition> {
  final ScrollController _scrollController = ScrollController();

  final String query = "";

  List<DataNutrition> nutritions = [];
  Meta? meta;
  bool loading = true;
  bool loadingPagination = false;
  final TextEditingController _searchController = TextEditingController();
  bool showAddBtn = Get.arguments?['showAddBtn'] ?? false;
  int? category = Get.arguments?['category'];
  DateTime? dateTime = Get.arguments?['date'];

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _searchController.addListener(onChangeSearch);
    _scrollController.addListener(_loadMore);
    NutritionService.fetchAll().then((nutritionsData) => {
          setState(() {
            nutritions = nutritionsData.data;
            meta = nutritionsData.meta;
            loading = false;
          }),
        });
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
    _scrollController.dispose();
  }

  void onChangeSearch() {
    setState(() {
      loading = true;
    });
    NutritionService.fetchAll(page: 1, search: _searchController.text)
        .then((nutritionsData) => {
              setState(() {
                nutritions = nutritionsData.data;
                meta = nutritionsData.meta;
                loading = false;
              }),
            });
  }

  void _loadMore() {
    if (_scrollController.position.pixels ==
        _scrollController.position.maxScrollExtent) {
      setState(() {
        loadingPagination = true;
      });
      NutritionService.fetchAll(page: meta?.nextPage).then((nutritionsData) => {
            setState(() {
              nutritions.addAll(nutritionsData.data);
              meta = nutritionsData.meta;
              loadingPagination = false;
            }),
          });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Layout(
        title: SearchBox(
          inputController: _searchController,
        ),
        body: Container(
          // color: Colors.amber,
          padding: const EdgeInsets.all(15),
          child: Container(
            child: loading
                ? const Loading()
                : ListView.builder(
                    controller: _scrollController,
                    itemCount: nutritions.length + 1,
                    itemBuilder: (context, index) {
                      if (index < nutritions.length) {
                        var item = nutritions[index];

                        return GestureDetector(
                          onTap: () {
                            Get.toNamed('/detail-nutrition', arguments: {
                              "id": item.id,
                              "showAddBtn": showAddBtn,
                              "category": category,
                              "dateTime": dateTime
                            });
                          },
                          child: Container(
                            padding: const EdgeInsets.all(10),
                            margin: const EdgeInsets.only(bottom: 14),
                            decoration: BoxDecoration(
                                color: Colors.white,
                                boxShadow: [
                                  BoxShadow(
                                    color: const Color(0xFF000000)
                                        .withOpacity(0.15),
                                    offset: const Offset(1, 7),
                                    blurRadius: 15,
                                    spreadRadius: -5,
                                  ),
                                ],
                                border: Border.all(color: Colors.grey.shade200),
                                borderRadius: BorderRadius.circular(10)),
                            alignment: Alignment.centerLeft,
                            child: Column(
                              children: [
                                Container(
                                  alignment: Alignment.centerLeft,
                                  child: Container(
                                    alignment: Alignment.centerLeft,
                                    child: Column(
                                      crossAxisAlignment: CrossAxisAlignment
                                          .start, // Teks akan ditempatkan ke kiri
                                      children: [
                                        Text(
                                          item.name,
                                          style: const TextStyle(
                                              color: primary, fontSize: 16),
                                        ),
                                        // Text(
                                        //   "Takaran : 100g",
                                        //   style: TextStyle(
                                        //     color: Color.fromRGBO(130, 130, 130, 1),
                                        //     fontSize: 13,
                                        //   ),
                                        // ),
                                      ],
                                    ),
                                  ),
                                ),
                                const SizedBox(
                                  height: 10,
                                ),
                                Container(
                                  child: Row(
                                    mainAxisAlignment:
                                        MainAxisAlignment.spaceAround,
                                    children: [
                                      ItemSimpleNutrition(
                                        name: "Energi",
                                        value: item.energyKcal ?? 0,
                                      ),
                                      const SizedBox(
                                        width: 5,
                                      ),
                                      ItemSimpleNutrition(
                                        value: item.protein ?? 0,
                                        name: "Protein",
                                      ),
                                      const SizedBox(
                                        width: 5,
                                      ),
                                      ItemSimpleNutrition(
                                          value: item.fat ?? 0, name: "Lemak"),
                                    ],
                                  ),
                                )
                              ],
                            ),
                          ),
                        );
                      } else {
                        return loadingPagination
                            ? Container(
                                padding: const EdgeInsets.only(bottom: 15),
                                child: LoadingAnimationWidget.beat(
                                    color: primary, size: 30),
                              )
                            : Container();
                      }
                    },
                  ),
          ),
        ));
  }
}

class ItemSimpleNutrition extends StatelessWidget {
  const ItemSimpleNutrition({
    super.key,
    required this.name,
    required this.value,
  });

  final String name;
  final double value;

  @override
  Widget build(BuildContext context) {
    return Flexible(
      fit: FlexFit.loose,
      child: Container(
        height: 100,
        width: double.infinity,
        decoration: BoxDecoration(
            color: secondBg, borderRadius: BorderRadius.circular(5)),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              name,
              style: const TextStyle(color: primary, fontSize: 13),
            ),
            Text(
              value.toString(),
              style: const TextStyle(color: primary, fontSize: 13),
            )
          ],
        ),
      ),
    );
  }
}

class SearchBox extends StatelessWidget {
  SearchBox({super.key, required this.inputController});

  final TextEditingController inputController;
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 300,
      height: 50,
      decoration: BoxDecoration(
        border: Border.all(
          color: primary, // Warna border biru
          width: 2.0, // Ketebalan border
        ),
        borderRadius: BorderRadius.circular(8), // Mengatur sudut border
      ),
      child: Row(
        children: [
          const Padding(
            padding: EdgeInsets.all(8.0),
            child: Icon(Icons.search, color: primary), // Icon pencarian
          ),
          Expanded(
            child: TextField(
              controller: inputController,
              decoration: const InputDecoration(
                hintText: 'Search...', // Teks placeholder
                border:
                    InputBorder.none, // Menghilangkan border bawaan TextField
              ),
            ),
          ),
        ],
      ),
    );
  }
}
