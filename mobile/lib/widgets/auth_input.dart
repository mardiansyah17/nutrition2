import 'package:flutter/material.dart';

class AuthInput extends StatefulWidget {
  const AuthInput(
      {super.key,
      required this.controller,
      required this.hintText,
      this.errorText,
      this.isObscureText = false,
      this.inputType = TextInputType.text});
  final TextEditingController controller;
  final String? errorText;
  final bool isObscureText;
  final String hintText;
  final TextInputType? inputType;

  @override
  State<AuthInput> createState() => _AuthInputState();
}

class _AuthInputState extends State<AuthInput> {
  bool _visiblePassword = false;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    setState(() {
      _visiblePassword = widget.isObscureText;
    });
  }

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      keyboardType: widget.inputType,
      controller: widget.controller,
      obscureText: _visiblePassword,
      decoration: InputDecoration(
          hintText: widget.hintText,
          errorText: widget.errorText,
          suffixIcon: Visibility(
            visible: widget.isObscureText,
            child: IconButton(
              icon: Icon(
                  _visiblePassword ? Icons.visibility : Icons.visibility_off),
              onPressed: () => {
                setState(() {
                  _visiblePassword = _visiblePassword ? false : true;
                })
              },
            ),
          )),
    );
  }
}
