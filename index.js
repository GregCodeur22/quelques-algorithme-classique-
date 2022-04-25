const prices = [1, 39, 25, 112, 111, 30, 211, 300, 5, 67];

let min = prices[0];
for (const n of prices) {
  if (n < min) {
    min = n;
  }
}
console.log(min);
