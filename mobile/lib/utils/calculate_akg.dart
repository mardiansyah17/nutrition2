double calculateAkg({required double val, double akgHarian = 0}) {
  double akg = (val / akgHarian) * 100;
  return double.parse(akg.toStringAsFixed(2));
}
