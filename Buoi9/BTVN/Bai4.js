function pascalTriangle(n) {
    if (n < 1) return [];
    let result = [[1]];
    let index = 0;
    while (--n) {
        let tempArr = [1];
        for (let i = 1; i < result[index].length; i++) {
            tempArr[i] = result[index][i-1] + result[index][i]; 
        }
        tempArr.push(1);
        index++;
        result.push(tempArr);
    }
    return result;
}

console.log(pascalTriangle(5));
console.log(pascalTriangle(1));