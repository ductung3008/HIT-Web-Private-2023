function myReduce(arr, callback, initValue = 0) {
    let result = initValue;
    for (let i = 0; i < arr.length; i++) {
        result = callback(result, arr[i], i, arr);
    }
    return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(myReduce(arr, (res, cur) => res + cur));