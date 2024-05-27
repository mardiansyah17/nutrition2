import 'package:flutter/material.dart';
import 'package:get/route_manager.dart';
import 'package:nutrition/constans/colors.dart';
import 'package:nutrition/widgets/layout.dart';
import 'package:table_calendar/table_calendar.dart';

class Plan extends StatelessWidget {
  const Plan({super.key});

  @override
  Widget build(BuildContext context) {
    return Layout(
        title: Text("Rencana sehat"),
        body: Container(
          color: Colors.white,
          child: TableCalendar(
            locale: "id_ID",
            shouldFillViewport: true,
            firstDay: DateTime.utc(2010, 10, 16),
            lastDay: DateTime.utc(2030, 3, 14),
            focusedDay: DateTime.now(),
            onDaySelected: (selectedDay, focusedDay) {
              print(selectedDay);
              // return;
              Get.toNamed('/plan-per-day',
                  arguments: {"datetime": selectedDay});
            },
            calendarStyle: CalendarStyle(
                todayDecoration: BoxDecoration(),
                todayTextStyle: TextStyle(color: Colors.black)),
            headerStyle: const HeaderStyle(
                formatButtonVisible: false, titleCentered: true),
            // calendarFormat: CalendarFormat.week,

            calendarBuilders: CalendarBuilders(
              defaultBuilder: (context, day, focusedDay) {
                if (day.day == 23) {
                  return Container(
                    alignment: Alignment.center,
                    child: Text(
                      day.day.toString(),
                      style: TextStyle(color: primary, fontSize: 17),
                    ),
                  );
                }
                return Container(
                  alignment: Alignment.center,
                  child: Text(
                    day.day.toString(),
                    style: TextStyle(fontSize: 17),
                  ),
                );
              },
            ),
          ),
        ));
  }
}
