import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:localstorage/localstorage.dart';
import 'package:nutrition/constans/base_url.dart';
import 'package:nutrition/constans/colors.dart';
import 'package:nutrition/models/blog.dart';
import 'package:http/http.dart' as http;

class BlogService {
  static const baseUrl = "$baseUrlApp/blogs";
  static Future<dynamic> getBlogs() async {
    final token = localStorage.getItem('token');

    final response = await http.get(Uri.parse('$baseUrl'), headers: {
      "Authorization": token!,
    });
    if (response.statusCode != 200) {
      return Fluttertoast.showToast(
          msg: "Terjadi kesalahan",
          toastLength: Toast.LENGTH_SHORT,
          gravity: ToastGravity.TOP,
          timeInSecForIosWeb: 1,
          backgroundColor: primary,
          textColor: Colors.white,
          fontSize: 16.0);
    }

    final result = jsonDecode(response.body);

    Blog blog = Blog.fromJson(result);

    return blog;
  }

  static Future<dynamic> findBlogById(id) async {
    final token = localStorage.getItem('token');

    final response = await http.get(Uri.parse('$baseUrl/$id'), headers: {
      "Authorization": token!,
    });

    if (response.statusCode != 200) {
      return Fluttertoast.showToast(
          msg: "Terjadi kesalahan",
          toastLength: Toast.LENGTH_SHORT,
          gravity: ToastGravity.TOP,
          timeInSecForIosWeb: 1,
          backgroundColor: primary,
          textColor: Colors.white,
          fontSize: 16.0);
    }

    final result = jsonDecode(response.body);

    BlogData blog = BlogData.fromJson(result["blog"]);

    return blog;
  }
}
