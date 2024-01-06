const map = new Map([
    ["c", "1"],
    ["b", "2"],
]);
console.log(map);

const set = new Set([1, 2, 3, 3, 2, 1]);
console.log([...set]);

const arr = [1, 2, 3, 4, 5, 6];

function myMap(arr, callback) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}
console.log(myMap(arr, (x) => x * 2));

function myEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}
console.log(myEvery(arr, (x) => x > 0));

function mySome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }
    return false;
}

function myReduce(arr, callback) {
    
}