import 'package:flutter/material.dart';
import 'package:get/route_manager.dart';
import 'package:jwt_decoder/jwt_decoder.dart';
import 'package:localstorage/localstorage.dart';
import 'package:nutrition/constans/colors.dart';

class Layout extends StatelessWidget {
  Layout({
    super.key,
    this.title,
    required this.body,
    this.isNotHome = true,
    this.actions,
  });

  final Widget body;
  final List<Widget>? actions;
  final Widget? title;
  final bool isNotHome;

  String? token;
  Map<String, dynamic>? decodedToken;

  @override
  Widget build(BuildContext context) {
    // Initialize token and decodedToken here
    token = localStorage.getItem('token');
    if (token != null) {
      decodedToken = JwtDecoder.decode(token!);
    }

    return Scaffold(
      backgroundColor: const Color(0xffFBFBFB),
      extendBody: true,
      appBar: title != null
          ? AppBar(
              actions: actions != null ? actions : [],
              titleSpacing: isNotHome ? 0 : 15,
              title: Row(
                children: [
                  Visibility(
                    visible: isNotHome,
                    child: IconButton(
                      icon: const Icon(Icons.arrow_back, color: primary),
                      onPressed: () => Navigator.of(context).pop(),
                    ),
                  ),
                  const SizedBox(
                    width: 5,
                  ),
                  title!
                ],
              ),
              automaticallyImplyLeading: false,
            )
          : null,
      drawer: MyDrawer(
        fullname: decodedToken?['name'] ?? "",
      ),
      body: body,
    );
  }
}

class MyDrawer extends StatelessWidget {
  const MyDrawer({super.key, this.fullname});

  final String? fullname;

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: [
          UserAccountsDrawerHeader(
            accountEmail: null,
            currentAccountPicture: CircleAvatar(
              child: ClipOval(
                child: Image.asset(
                  'assets/images/avatar.jpg',
                ),
              ),
            ),
            accountName: Text(
              fullname!,
              style: TextStyle(fontSize: 16, color: Colors.black),
            ),
            decoration: BoxDecoration(),
          ),
          ListTile(
            leading: const Icon(Icons.house),
            title: const Text(
              'Home',
              style: TextStyle(fontSize: 16),
            ),
            onTap: () {},
          ),
          ListTile(
            leading: const Icon(Icons.settings),
            title: const Text(
              'Pengaturan akun',
              style: TextStyle(fontSize: 16),
            ),
            onTap: () {},
          ),
          ListTile(
            leading: const Icon(Icons.logout),
            title: const Text(
              'Logout',
              style: TextStyle(fontSize: 16),
            ),
            onTap: () {
              localStorage.removeItem('token');
              Get.toNamed('/login');
            },
          ),
        ],
      ),
    );
  }
}
