function mySort(arr, compareFn = (a, b) => a > b) {
    const resArr = [...arr];
    let length = resArr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (compareFn(resArr[i], resArr[j])) {
                [resArr[i], resArr[j]] = [resArr[j], resArr[i]];
            }
        }
    }
    return resArr;
}

const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(mySort(arr, (a, b) => b > a));