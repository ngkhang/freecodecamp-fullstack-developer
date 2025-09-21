/*
Implement the Chunky Monkey Algorithm

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. Write a function named `chunkArrayInGroups` that takes an array as first argument and a number as second argument. The function should split the array into smaller arrays of length equal to the second argument and returns them as a two-dimensional array.
*/
const chunkArrayInGroups = (arr, num) => {
	const twoDimensionalArr = [];
	for (let i = 0; i < arr.length; i += num) {
		i;
		const subArr = arr.slice(i, i + num);
		twoDimensionalArr.push(subArr);
	}
	return twoDimensionalArr;
};
