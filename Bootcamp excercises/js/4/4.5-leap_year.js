function leap(n) {
  if ((n % 4 == 0 && n % 100 != 0) || (n % 4 == 0 && n % 400 == 0)) {
    return "it's a leap year";
  } else {
    return "it's not a leap year";
  }
}
