import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:get/route_manager.dart';
import 'package:material_dialogs/dialogs.dart';
import 'package:material_dialogs/shared/types.dart';
import 'package:material_dialogs/widgets/buttons/icon_button.dart';
import 'package:nutrition/constans/colors.dart';

class Features extends StatelessWidget {
  const Features({super.key});

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 20,
      runSpacing: 20,
      children: [
        SizedBox(
          height: 130,
          width: MediaQuery.of(context).size.width / 2 - 30,
          child: const FeatureItem(
            svgName: "ai",
            title: "Scan",
            routeName: "/scan",
          ),
        ),
        SizedBox(
          height: 130,
          width: MediaQuery.of(context).size.width / 2 -
              30, // Setengah dari lebar layar dikurangi margin
          child: const FeatureItem(
            svgName: "nutrition",
            title: "Gizi makanan",
            routeName: '/search-nutrition',
          ),
        ),
        SizedBox(
          height: 130,
          width: MediaQuery.of(context).size.width / 2 - 30,
          child: const FeatureItem(
            icon: Icons.calendar_month,
            title: "Rencana sehat",
            routeName: "/plan-calendar",
          ),
        ),
        SizedBox(
          height: 130,
          width: MediaQuery.of(context).size.width / 2 - 30,
          child: const FeatureItem(
            icon: Icons.chat,
            title: "Konsultasi",
          ),
        ),
      ],
    );
  }
}

class FeatureItem extends StatelessWidget {
  const FeatureItem(
      {super.key,
      this.svgName,
      required this.title,
      this.routeName,
      this.icon});
  final String? svgName;
  final IconData? icon;
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
                  textStyle: const TextStyle(color: Colors.white),
                  iconColor: Colors.white,
                ),
              ]);
          return;
        }
        Get.toNamed(routeName!);
      },
      child: Ink(
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          color: secondBg,
          borderRadius: BorderRadius.circular(5),
          boxShadow: [
            BoxShadow(
              color: Colors.grey.withOpacity(0.5),
              spreadRadius: 1,
              blurRadius: 5,
              offset: const Offset(0, 1),
            ),
          ],
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              margin: const EdgeInsets.only(bottom: 5),
              child: icon != null
                  ? Icon(
                      icon,
                      size: 35,
                      color: primary,
                    )
                  : SvgPicture.asset(
                      "assets/svg/$svgName.svg",
                      height: 35,
                      colorFilter:
                          const ColorFilter.mode(primary, BlendMode.srcIn),
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
