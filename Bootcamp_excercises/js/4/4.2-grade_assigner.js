const score = (a) => {
  if (a >= 0 && a < 65) {
    return "F";
  } else if (a > 64 && a < 70) {
    return "D";
  } else if (a > 69 && a < 80) {
    return "C";
  } else if (a > 79 && a < 90) {
    return "B";
  } else if (a > 89 && a < 101) {
    return "A";
  }
};
