// ex-6
function multiple(a, b) {
  for (let i = a; i <= b; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      return i;
    }
  }
}
console.log(multiple(10, 75));
