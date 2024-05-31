// To parse this JSON data, do
//
//     final blog = blogFromJson(jsonString);

import 'dart:convert';

import 'package:nutrition/models/meta.dart';

Blog blogFromJson(String str) => Blog.fromJson(json.decode(str));

String blogToJson(Blog data) => json.encode(data.toJson());

class Blog {
  List<BlogData> blogs;
  Meta meta;

  Blog({
    required this.blogs,
    required this.meta,
  });

  factory Blog.fromJson(Map<String, dynamic> json) => Blog(
        blogs:
            List<BlogData>.from(json["blogs"].map((x) => BlogData.fromJson(x))),
        meta: Meta.fromJson(json["meta"]),
      );

  Map<String, dynamic> toJson() => {
        "blogs": List<dynamic>.from(blogs.map((x) => x.toJson())),
        "meta": meta.toJson(),
      };
}

class BlogData {
  int id;
  String title;
  String cover;
  String? content;
  DateTime cratedAt;
  int viewers;

  BlogData({
    required this.id,
    required this.title,
    required this.cover,
    required this.content,
    required this.cratedAt,
    required this.viewers,
  });

  factory BlogData.fromJson(Map<String, dynamic> json) => BlogData(
        id: json["id"],
        title: json["title"],
        cover: json["cover"],
        content: json["content"],
        cratedAt: DateTime.parse(json["cratedAt"]),
        viewers: json["viewers"],
      );

  Map<String, dynamic> toJson() => {
        "id": id,
        "title": title,
        "cover": cover,
        "cratedAt": cratedAt.toIso8601String(),
        "viewers": viewers,
      };
}
