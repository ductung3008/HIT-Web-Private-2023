function myFind(arr, callback) {
    for (let i  = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(myFind(arr, (x) => x > 5));