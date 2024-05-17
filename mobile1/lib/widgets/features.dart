import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:get/route_manager.dart';
import 'package:material_dialogs/dialogs.dart';
import 'package:material_dialogs/shared/types.dart';
import 'package:material_dialogs/widgets/buttons/icon_button.dart';
import 'package:nutrition/constans/colors.dart';

class Features extends StatelessWidget {
  const Features({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 20,
      runSpacing: 20,
      children: [
        SizedBox(
          height: 130,
          width: MediaQuery.of(context).size.width / 2 -
              30, // Setengah dari lebar layar dikurangi margin
          child: FeatureItem(
            svgName: "nutrition",
            title: "Gizi makanan",
            routeName: '/search-nutrition',
          ),
        ),
        SizedBox(
          height: 130,
          width: MediaQuery.of(context).size.width / 2 - 30,
          child: FeatureItem(
            svgName: "calculator",
            title: "Kalkulator Antropometri",
          ),
        ),
        SizedBox(
          height: 130,
          width: MediaQuery.of(context).size.width / 2 - 30,
          child: FeatureItem(
            svgName: "walking",
            title: "Pedometer",
          ),
        ),
        SizedBox(
          height: 130,
          width: MediaQuery.of(context).size.width / 2 - 30,
          child: FeatureItem(
            svgName: "recipe",
            title: "Resep",
          ),
        ),
      ],
    );
  }
}

class FeatureItem extends StatelessWidget {
  const FeatureItem(
      {Key? key, required this.svgName, required this.title, this.routeName})
      : super(key: key);
  final String svgName;
  final String title;
  final String? routeName;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        if (routeName == null) {
          Dialogs.materialDialog(
              color: Colors.white,
              title: 'Perhatian',
              msg: 'Fitur masih belum tersedia',

              // customView: MySuperWidget(),
              customViewPosition: CustomViewPosition.BEFORE_ACTION,
              context: context,
              actions: [
                IconsButton(
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                  text: 'Oke',
                  iconData: Icons.done,
                  color: Colors.blue,
                  textStyle: TextStyle(color: Colors.white),
                  iconColor: Colors.white,
                ),
              ]);
          return;
        }
        Get.toNamed(routeName!);
      },
      child: Container(
        padding: EdgeInsets.all(10),
        decoration: BoxDecoration(
          color: secondBg,
          borderRadius: BorderRadius.circular(5),
          boxShadow: [
            BoxShadow(
              color: Colors.grey.withOpacity(0.5),
              spreadRadius: 1,
              blurRadius: 5,
              offset: Offset(0, 1),
            ),
          ],
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              margin: EdgeInsets.only(bottom: 5),
              child: SvgPicture.asset(
                "assets/svg/$svgName.svg",
                height: 35,
                colorFilter: ColorFilter.mode(primary, BlendMode.srcIn),
              ),
            ),
            Text(
              title,
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    );
  }
}
