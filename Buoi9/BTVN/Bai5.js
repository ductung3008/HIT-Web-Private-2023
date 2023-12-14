function moveZeros(nums) {
    let result = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] == 0) result.push(0);
        else result.unshift(nums[i]);
    }
    return result;
}

console.log(moveZeros([0,1,0,3,12]));
console.log(moveZeros([0]));