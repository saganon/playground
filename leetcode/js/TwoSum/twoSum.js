/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.

    Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
    Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

// nanti di sort

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let sum = 0;
    let position = [];
    let isPassed = false;
    let parsedI = 0;
    let parsedJ = 0;
    // for (const i in nums) {
    //     const num = parseInt(i);
    //     const first = (num - 1 === -1) ? 0 : num;
    //     const last = (first === nums.length - 1) ? 0 : num + 1;
    //     sum = nums[first] + nums[last];
    //     console.log(sum);
    //     if (sum === target && !isPassed) {
    //         isPassed = true;
    //         position.push(first);
    //         position.push(last);
    //         console.log("passed",sum);
    //     }
    // }

    for (const i in nums) {
        parsedI = parseInt(i)
        for (const j in i) {
            parsedJ = parseInt(j)
            if (nums.length !== 2 && parsedI === nums.length-1) {
                console.log("check", parsedI)
                if (!isPassed) {
                    parsedJ = parsedJ + 1
                }
            }
            console.log(`i ${i} j ${parsedJ}`)

            if (parsedI !== parsedJ) {
                sum = nums[parsedJ] + nums[parsedI];
            }
        }


        if (sum === target && !isPassed) {
            isPassed = true;
            console.log("PASSED")
            position.push(parsedJ)
            position.push(parsedI)
        }
    }

    console.log(position.sort());
    return position.sort();
}

module.exports = twoSum;