const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  } else if (3 < month && month <= 6) {
    return 2;
  } else if (6 < month && month <= 9) {
    return 3;
  } else {
    return 4;
  }
};
