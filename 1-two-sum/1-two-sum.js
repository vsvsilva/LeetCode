/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {

    let numbersNeededHash = new Map();
    let result = [];
    
    for(i = 0; i < nums.length; i++){
        let cur = nums[i];
        let needed = target - cur;

        if(numbersNeededHash.has(needed)){
            result[0] = numbersNeededHash.get(needed);
            result[1] = i;
            return result;
        }
        numbersNeededHash.set(cur, i);
    }
};
