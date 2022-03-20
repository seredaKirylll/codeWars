function findShort(s) {
  const arr = s.split(" ").map((i) => {
    return i.length;
  });
  return Math.min.apply(null, arr);
}
