import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';

class ChartPedomater extends StatelessWidget {
  const ChartPedomater({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(
          children: [
            Text(
              "Pedometer minggu ini",
              style: TextStyle(fontSize: 20),
            )
          ],
        ),
        SizedBox(
          height: 10,
        ),
        Container(
          decoration: BoxDecoration(
              color: Color(0xffD7F1FF),
              borderRadius: BorderRadius.circular(10),
              boxShadow: <BoxShadow>[
                BoxShadow(
                  color: Color(0xFF000000).withOpacity(0.03),
                  offset: Offset(0, 4),
                  blurRadius: 4,
                  spreadRadius: 6,
                ),
              ]),
          padding: EdgeInsets.all(20),
          child: AspectRatio(
            aspectRatio: 1.2,
            child: BarChart(
              BarChartData(
                borderData: FlBorderData(
                  show: false,
                ),
                gridData: FlGridData(
                  show: true,
                  drawVerticalLine: false,
                ),
                maxY: 3000,
                titlesData: FlTitlesData(
                    bottomTitles: AxisTitles(
                        sideTitles: SideTitles(
                            showTitles: true,
                            getTitlesWidget: getTitlesBottom)),
                    leftTitles: AxisTitles(
                        sideTitles: SideTitles(
                      showTitles: true, reservedSize: 45,
                      interval: 500,
                      getTitlesWidget: (value, meta) {
                        return Text(value.toInt().toString());
                      },
                      // Interval antar label (kelipatan 500)
                    )),
                    topTitles:
                        AxisTitles(sideTitles: SideTitles(showTitles: false)),
                    rightTitles:
                        AxisTitles(sideTitles: SideTitles(showTitles: false))),
                barGroups: <BarChartGroupData>[
                  BarChartGroupData(x: 0, barRods: <BarChartRodData>[
                    _barChartRodData(3000),
                  ]),
                  BarChartGroupData(x: 1, barRods: <BarChartRodData>[
                    _barChartRodData(2000),
                  ]),
                  BarChartGroupData(x: 2, barRods: <BarChartRodData>[
                    _barChartRodData(500),
                  ]),
                  BarChartGroupData(x: 3, barRods: <BarChartRodData>[
                    _barChartRodData(1700),
                  ]),
                  BarChartGroupData(x: 4, barRods: <BarChartRodData>[
                    _barChartRodData(1000),
                  ]),
                  BarChartGroupData(x: 5, barRods: <BarChartRodData>[
                    _barChartRodData(1500),
                  ]),
                  BarChartGroupData(x: 6, barRods: <BarChartRodData>[
                    _barChartRodData(2700),
                  ]),
                ],
              ),
              swapAnimationDuration: Duration(milliseconds: 150), // Optional
              swapAnimationCurve: Curves.linear,
              // Optional
            ),
          ),
        ),
      ],
    );
  }

  BarChartRodData _barChartRodData(double data) {
    return BarChartRodData(
      toY: data,
      width: 20,
      gradient: LinearGradient(
        begin: Alignment.bottomCenter,
        end: Alignment.topCenter,
        colors: const [
          Color.fromARGB(255, 82, 149, 248),
          Color.fromARGB(255, 0, 172, 224)
        ],
      ),
    );
  }

  Widget getTitlesBottom(double value, TitleMeta meta) {
    final style = TextStyle(
      fontSize: 12,
    );
    String text;
    switch (value.toInt()) {
      case 0:
        text = 'Sen';
        break;
      case 1:
        text = 'Sel';
        break;
      case 2:
        text = 'Rab';
        break;
      case 3:
        text = 'Kam';
        break;
      case 4:
        text = "Jum";
        break;
      case 5:
        text = 'Sab';
        break;
      case 6:
        text = 'Ming';
        break;
      default:
        text = '';
        break;
    }
    return SideTitleWidget(
      axisSide: meta.axisSide,
      space: 4,
      child: Text(text, style: style),
    );
  }
}
