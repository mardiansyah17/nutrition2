class Meta {
  bool isFirstPage;
  bool isLastPage;
  int currentPage;
  dynamic previousPage;
  int? nextPage;

  Meta({
    required this.isFirstPage,
    required this.isLastPage,
    required this.currentPage,
    required this.previousPage,
    required this.nextPage,
  });

  factory Meta.fromJson(Map<String, dynamic> json) => Meta(
        isFirstPage: json["isFirstPage"],
        isLastPage: json["isLastPage"],
        currentPage: json["currentPage"],
        previousPage: json["previousPage"],
        nextPage: json["nextPage"],
      );

  Map<String, dynamic> toJson() => {
        "isFirstPage": isFirstPage,
        "isLastPage": isLastPage,
        "currentPage": currentPage,
        "previousPage": previousPage,
        "nextPage": nextPage,
      };
}
