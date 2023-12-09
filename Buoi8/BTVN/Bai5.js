/**
 * 5. Chèn 1 chuỗi tại 1 vị trí vào 1 chuỗi
 */

const s1 = prompt('Nhập chuỗi cần chèn');
const s2 = prompt('Nhập chuỗi ban đầu');
const p = parseInt(prompt('Nhập vị trí chèn')) - 1;

const result = s2.substring(0, p).concat(s1).concat(s2.substring(p, s2.length));
alert(result);
console.log(result);