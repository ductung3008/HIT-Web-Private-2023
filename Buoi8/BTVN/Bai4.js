/**
 * 4. Kiểm tra số đối xứng
 */

const n = prompt('Nhập n');

let words = n.split('');
const isPalindrome = words.reverse().join('') === n;

alert(isPalindrome);
console.log(isPalindrome);