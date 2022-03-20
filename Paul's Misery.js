function paul(x) {
  const dic = { kata: 5, "Petes kata": 10, life: 0, eating: 1 };
  const result = x.reduce((acc, itm) => +acc + dic[itm], 0);
  return result < 40
    ? "Super happy!"
    : result < 70
    ? "Happy!"
    : result < 100
    ? "Sad!"
    : "Miserable!";
}
