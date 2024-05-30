let price1 = [1200, 1500, 1100];
let pirce2 = [1000, 1300, 1600];
let combinedprice = [...price1, ...pirce2].sort((a, b) => a - b);
console.log(combinedprice);
export {};
