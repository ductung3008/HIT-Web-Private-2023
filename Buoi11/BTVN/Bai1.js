function myReduce(arr, callback, initValue) {
    if (arr.length === 0 && initValue === undefined) {
        return undefined;
    }
    let result = initValue === undefined ? arr[0] : initValue;
    for (let i = initValue === undefined ? 1 : 0; i < arr.length; i++) {
        result = callback(result, arr[i], i, arr);
    }
    return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(myReduce(arr, (res, cur) => res + cur));