const a = 1;
const b = 2;

// "strict": true
// unary + operator:
// https://stackoverflow.com/questions/14667713/how-to-convert-a-string-to-number-in-typescript
const add = (c: number, d: number | string): number => c + +d;

console.info(add(a, b));
console.info(add(a, '3'));
