import 'package:flutter/material.dart';
import 'package:get/route_manager.dart';
import 'package:nutrition/constans/colors.dart';
import 'package:nutrition/services/auth_service.dart';
import 'package:nutrition/widgets/button.dart';
import 'package:nutrition/widgets/layout.dart';

class Register extends StatefulWidget {
  const Register({super.key});

  @override
  State<Register> createState() => _RegisterState();
}

class _RegisterState extends State<Register> {
  final _formKey = GlobalKey<FormState>();
  final emailController = TextEditingController();
  final passwordController = TextEditingController();
  final nameController = TextEditingController();
  final confirmPasswordController = TextEditingController();
// error state
  dynamic errors;

  @override
  Widget build(BuildContext context) {
    return Layout(
      body: Container(
          padding: EdgeInsets.all(10),
          child: Form(
            key: _formKey,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                TextFormField(
                  decoration: InputDecoration(
                      hintText: "Email", errorText: errors?["email"]),
                  controller: emailController,
                ),
                SizedBox(
                  height: 15,
                ),
                TextFormField(
                  controller: nameController,
                  decoration: InputDecoration(
                      hintText: "Nama lengkap", errorText: errors?["name"]),
                ),
                SizedBox(
                  height: 15,
                ),
                TextFormField(
                  controller: passwordController,
                  decoration: InputDecoration(
                      hintText: "Password", errorText: errors?["password"]),
                ),
                SizedBox(
                  height: 15,
                ),
                TextFormField(
                  controller: confirmPasswordController,
                  decoration: InputDecoration(
                      hintText: "Konfirmasi password",
                      errorText: errors?["confirmPassword"]),
                ),
                SizedBox(
                  height: 15,
                ),
                Button(
                  onPressed: _registerHandler,
                  text: "Daftar",
                ),
                SizedBox(
                  height: 15,
                ),
                GestureDetector(
                  onTap: () => Get.toNamed('/login'),
                  child: RichText(
                      text: TextSpan(
                          text: 'Sudah punya akun? ',
                          style: TextStyle(color: Colors.black, fontSize: 18),
                          children: [
                        TextSpan(
                            text: "Masuk disini",
                            style: TextStyle(color: primary))
                      ])),
                )
              ],
            ),
          )),
    );
  }

  void _registerHandler() async {
    final response = await AuthService.register(
        emailController.text,
        nameController.text,
        passwordController.text,
        confirmPasswordController.text);
    final statusCode = response['statusCode'];
    if (statusCode == 400) {
      setState(() {
        errors = response['result'];
      });
    }

    if (statusCode == 200) {
      final token = response['result']["token"];
      print(token);

      Get.toNamed('/home');
    }
  }
}
