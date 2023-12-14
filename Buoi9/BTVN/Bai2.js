function plusOne(digits) {
    digits++;
    const result = [];
    while (digits > 0) {
        result.unshift(digits % 10);
        digits = Math.floor(digits / 10);
    }
    return result;
}

console.log(plusOne(1234));
console.log(plusOne(9999));