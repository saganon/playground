const {expect} = require("@jest/globals");
const twoSum = require("./twoSum.js");

// test("0 1", () => {
//     expect(twoSum([2,7,11,15], 9)).toStrictEqual([0, 1]);
// })
//
// test("1 2", () => {
//     expect(twoSum([3,2,4], 6)).toStrictEqual([1,2]);
// })
//
// test("3 3", () => {
//     expect(twoSum([3,3], 6)).toStrictEqual([0,1]);
// })

test("0 2", () => {
    expect(twoSum([3,2,3], 6)).toStrictEqual([0,2]);
})

// test("0 2", () => {
//     expect(twoSum([-3,4,3,90], 0)).toStrictEqual([0,2]);
// })