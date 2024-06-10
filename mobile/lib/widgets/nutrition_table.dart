import 'package:flutter/material.dart';
import 'package:nutrition/constans/colors.dart';
import 'package:nutrition/models/nutrition.dart';
import 'package:nutrition/utils/calculate_akg.dart';

class NutritionTable extends StatelessWidget {
  final DataNutrition nutrition;
  const NutritionTable({super.key, required this.nutrition});
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Table(
        columnWidths:const {
          0: FractionColumnWidth(0.4),
          1: FractionColumnWidth(0.3),
          2: FractionColumnWidth(0.3),
        },
        children: [
          _buildTableRow('', '', '% AKG', isHeader: true),
          _buildTableRow('Energi', "${nutrition.energyKcal} kcal",
              '${calculateAkg(val: nutrition.energyKcal ?? 0, akgHarian: 2150)} %',
              isHeader: true),
          _buildTableRow('Lemak total', '${nutrition.fat} g',
              '${calculateAkg(val: nutrition.fat ?? 0, akgHarian: 67)} %',
              isHeader: true),
          _buildTableRow('Vitamin A', '${nutrition.vitaminA ?? 0} mcg',
              '${calculateAkg(val: nutrition.vitaminA ?? 0, akgHarian: 900)} %'),
          _buildTableRow('Vitamin B1', '${nutrition.vitaminB1} mg',
              '${calculateAkg(val: nutrition.vitaminB1 ?? 0, akgHarian: 1)} %'),
          _buildTableRow('Vitamin B2', '${nutrition.vitaminB2} mg',
              '${calculateAkg(val: nutrition.vitaminB2 ?? 0, akgHarian: 1)} %'),
          _buildTableRow('Vitamin C', '${nutrition.vitaminC ?? 0} mg',
              '${calculateAkg(val: nutrition.vitaminC ?? 0, akgHarian: 90)} %'),
          _buildTableRow(
              'Karbohidrat total',
              '${nutrition.carbohydrate ?? 0} g',
              '${calculateAkg(val: nutrition.carbohydrate ?? 0, akgHarian: 325)} %',
              isHeader: true),
          _buildTableRow('Protein', '${nutrition.protein ?? 0} g',
              '${calculateAkg(val: nutrition.protein ?? 0, akgHarian: 60)} %',
              isHeader: true),
          _buildTableRow('Serat pangan', '${nutrition.dietaryFiber ?? 0} g',
              '${calculateAkg(val: nutrition.dietaryFiber ?? 0, akgHarian: 30)} %'),
          _buildTableRow('Kalsium', '${nutrition.calcium ?? 0} mg',
              '${calculateAkg(val: nutrition.calcium ?? 0, akgHarian: 1100)} %'),
          _buildTableRow('Fosfor', '${nutrition.phosphorus ?? 0} mg',
              '${calculateAkg(val: nutrition.phosphorus ?? 0, akgHarian: 700)} %'),
          _buildTableRow('Natrium', '${nutrition.sodium ?? 0} mg',
              '${calculateAkg(val: nutrition.sodium ?? 0, akgHarian: 1500)} %',
              isHeader: true),
          _buildTableRow('Kalium', '${nutrition.potassium} mg',
              '${calculateAkg(val: nutrition.potassium ?? 0, akgHarian: 4700)} %'),
          _buildTableRow('Tembaga', '${nutrition.copper ?? 0} g',
              '${calculateAkg(val: nutrition.copper ?? 0, akgHarian: 800)} %'),
          _buildTableRow('Besi', '${nutrition.iron ?? 0} mg',
              '${calculateAkg(val: nutrition.iron ?? 0, akgHarian: 22)} %'),
          _buildTableRow('Seng', '${nutrition.zinc ?? 0} mg',
              '${calculateAkg(val: nutrition.zinc ?? 0, akgHarian: 13)} %'),
        ],
      ),
    );
  }

  TableRow _buildTableRow(String title, String amount, String dailyValue,
      {bool isHeader = false}) {
    return TableRow(
      decoration: BoxDecoration(
        border: Border(
          bottom: BorderSide(
            color: Colors.grey.shade300,
            width: 1.0,
          ),
        ),
      ),
      children: [
        _buildTableCell(title, isHeader, isTitle: true),
        _buildTableCell(amount, isHeader),
        _buildTableCell(dailyValue, isHeader),
      ],
    );
  }

  Widget _buildTableCell(String text, bool isHeader, {bool isTitle = false}) {
    return Padding(
      padding: EdgeInsets.only(
        left: isTitle ? (isHeader ? 0.0 : 8.0) : 8.0,
        right: 8.0,
        top: 8.0,
        bottom: 8.0,
      ),
      child: Text(
        text,
        style: TextStyle(
          fontWeight: isHeader ? FontWeight.bold : FontWeight.normal,
          color: primary,
        ),
        textAlign: isTitle ? TextAlign.left : TextAlign.right,
      ),
    );
  }
}
