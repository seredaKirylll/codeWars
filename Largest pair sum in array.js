function largestPairSum(numbers) {
  numbers.sort((a, b) => (a > b ? -1 : b > a ? 1 : 0));
  const result = numbers[0] + numbers[1];
  return result;
}
