import 'package:flutter/material.dart';
import 'package:syncfusion_flutter_gauges/gauges.dart';

class ChartNutrition extends StatelessWidget {
  const ChartNutrition(
      {super.key,
      required this.titile,
      required this.value,
      required this.percent});

  final String titile;
  final String value;
  final double percent;
  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Container(
        height: 180,
        child: SfRadialGauge(
          enableLoadingAnimation: true,
          axes: [
            RadialAxis(
              showLabels: false,
              startAngle: 0,
              endAngle: 360,
              annotations: [
                GaugeAnnotation(
                    widget: Container(
                  margin: EdgeInsets.only(top: 5),
                  child: Text(
                    value,
                    style: TextStyle(fontSize: 15, fontWeight: FontWeight.w600),
                  ),
                )),
                GaugeAnnotation(
                    angle: 260,
                    positionFactor: 0.3,
                    widget: Container(
                      child: Text(
                        titile,
                        style: TextStyle(
                            fontSize: 12, fontWeight: FontWeight.w400),
                      ),
                    ))
              ],
              showTicks: false,
              axisLineStyle:
                  AxisLineStyle(thickness: 10, color: Color(0xffE5EBFC)),
              pointers: [
                RangePointer(
                  value: percent,
                  width: 10,
                  enableAnimation: true,
                  gradient: SweepGradient(
                      colors: <Color>[Color(0xff0042E0), Color(0xff2EB5FA)],
                      stops: <double>[0.1, 0.7]),
                )
              ],
            )
          ],
        ),
      ),
    );
  }
}
