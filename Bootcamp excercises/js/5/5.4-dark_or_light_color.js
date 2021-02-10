function tone(c) {
  switch (c) {
    case "yellow":
    case "pink":
    case "orange":
      return "light color";
      break;
    case "blue":
    case "puple":
    case "brown":
      return "dark color";
      break;
    default:
      return "Unknown Color";
      break;
  }
}
