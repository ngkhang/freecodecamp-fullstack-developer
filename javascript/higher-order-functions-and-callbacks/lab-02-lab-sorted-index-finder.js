/*
Implement a Sorted Index Finder

In this lab you will create a function that returns the lowest index at which a value should be inserted into an array once it has been sorted in ascending order.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:
    1. You should have a `getIndexToIns` function that takes two arguments: an array and a number.
    1. You should use the `sort` method to sort the array in ascending order.
    1. Your `getIndexToIns` function should return the lowest index at which the number should be inserted by using the `findIndex` method.
    1. Your `getIndexToIns` function should always return a number.

Hint:
    The `findIndex` method is a built-in array method in JavaScript. It takes a callback function and returns the index of the first element that satisfies the condition. Both `findIndex` and `sort` are higher-order functions.

Examples:
    - getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because 1.5 is greater than 1 (index 0) and less than 2 (index 1).
    - getIndexToIns([20, 3, 5], 19) should return 2 because after sorting to [3, 5, 20], 19 is less than 20 (index 2) and greater than 5 (index 1).
*/
const getIndexToIns = (arr, index) => {
	const arrSortedByAsc = arr.sort((a, b) => a - b);
	return arrSortedByAsc.findIndex((val) => val >= index);
};
