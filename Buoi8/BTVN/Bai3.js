/**
 * 3. Đếm số ký tự của từ cuối cùng
 */

const regex = /[^a-zA-Z0-9\s]/g;
const s = prompt('Nhập chuỗi').replace(regex, "").trim();

const words = s.split(' ');
const lastWord = words[words.length - 1];
const length = lastWord.length;

alert(length);
console.log(length);