/**
 * 1. Tìm số lớn nhất trong 3 số
 */

const a = parseFloat(prompt('Nhập a'));
const b = parseFloat(prompt('Nhập b'));
const c = parseFloat(prompt('Nhập c'));

const max = a > b ? (a > c ? a : c) : (b > c ? b : c);

alert(`Số lớn nhất là ${max}`);
console.log(`Số lớn nhất là ${max}`);