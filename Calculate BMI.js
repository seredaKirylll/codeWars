function bmi(weight, height) {
  let bmin = weight / (height * height);

  if (bmin <= 18.5) {
    return "Underweight";
  } else if (bmin <= 25.0) {
    return "Normal";
  } else if (bmin <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
