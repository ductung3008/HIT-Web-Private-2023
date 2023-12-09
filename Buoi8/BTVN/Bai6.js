/**
 * 6. Tìm UCLN và BCNN của 2 số nguyên dương
 */

let a = parseInt(prompt('Nhập số nguyên dương thứ nhất'));
let b = parseInt(prompt('Nhập số nguyên dương thứ hai'));
let product = a * b;

while (b != 0) {
    const tmp = b;
    b = a % b;
    a = tmp;
}
const ucln = a;
const bcnn = ucln === 0 ? 0 : product/ucln;

alert(`${ucln}, ${bcnn}`);
console.log(`${ucln}, ${bcnn}`);