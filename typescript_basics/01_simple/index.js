var a = 1;
var b = 2;
// "strict": true
var add = function (c, d) { return c + +d; };
console.info(add(a, b));
console.info(add(a, '4'));
