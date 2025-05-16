// console.log(Number.MAX_VALUE); 
// console.log(Number.MIN_VALUE);
// console.log(1 / 0); // Infinity
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number("hello")); // NaN

// console.log(Number.isNaN(Number("hello"))); // false
// console.log(Number.isFinite(1/0)); // true

// let num = 255;
// console.log(typeof num.toString());

// let num = 5.6789;
// console.log(num.toFixed(2));

let num = 1230000;
console.log(num.toExponential()); // "1.23e+6"

console.log(parseInt("3.14kg")); // 3

console.log(parseFloat("3.14kg")); // 3.14