/**
 * 2. Kiểm tra 3 số có phải cạnh của 1 tam giác
 */

const a = parseFloat(prompt('Nhập độ dài cạnh thứ nhất'));
const b = parseFloat(prompt('Nhập độ dài cạnh thứ hai'));
const c = parseFloat(prompt('Nhập độ dài cạnh thứ ba'));

const isValid = (a >= 0) && (b >= 0) && (c >= 0) && (a + b > c) && (a + c > b) && (b + c > a);

alert(isValid);
console.log(isValid);