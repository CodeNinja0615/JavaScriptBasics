/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let flag = false;
    for (let i in nums) {
        let n1 = nums[i];
        if (flag) {
            break;
        }
        for (let i2 in nums) {
            let n2 = nums[i2];
            if (i > i2) {
                let sum = n1 + n2
                if (sum === target) {
                    flag = true;
                    return [parseInt(i), parseInt(i2)];
                }
            }
        }
    }
};


console.log(twoSum([3,3], 6));