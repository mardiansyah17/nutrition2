import 'package:flutter/material.dart';
import 'package:get/route_manager.dart';
import 'package:localstorage/localstorage.dart';
import 'package:nutrition/constans/colors.dart';
import 'package:nutrition/services/auth_service.dart';
import 'package:nutrition/widgets/auth_input.dart';
import 'package:nutrition/widgets/button.dart';
import 'package:nutrition/widgets/layout.dart';

class Login extends StatefulWidget {
  Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final emailController = TextEditingController();

  final passwordController = TextEditingController();

  final _formKey = GlobalKey<FormState>();

  dynamic errors;

  void _login() async {
    final response =
        await AuthService.login(emailController.text, passwordController.text);

    final statusCode = response['statusCode'];

    if (statusCode == 400) {
      setState(() {
        errors = response["result"];
      });
    }
    if (statusCode == 200) {
      final token = response['result']['token'];
      localStorage.setItem('token', token);
      Get.toNamed('/home');
    }
  }

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
                AuthInput(
                  controller: emailController,
                  hintText: "Email",
                  inputType: TextInputType.emailAddress,
                ),
                SizedBox(
                  height: 15,
                ),
                AuthInput(
                  controller: passwordController,
                  errorText: errors?["password"],
                  hintText: "Password",
                  isObscureText: true,
                  inputType: TextInputType.visiblePassword,
                ),
                SizedBox(
                  height: 15,
                ),
                Button(
                  onPressed: _login,
                  text: "Masuk",
                ),
                SizedBox(
                  height: 15,
                ),
                GestureDetector(
                  onTap: () => Get.toNamed('/register'),
                  child: RichText(
                      text: TextSpan(
                          text: 'Belum punya akun? ',
                          style: TextStyle(color: Colors.black, fontSize: 18),
                          children: [
                        TextSpan(
                            text: "Daftar disini",
                            style: TextStyle(color: primary))
                      ])),
                )
              ],
            ),
          )),
    );
  }
}
