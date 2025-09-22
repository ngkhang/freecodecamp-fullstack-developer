/*
Implement the Slice and Splice Algorithm

In this lab, you will need to create an algorithm to merge two arrays.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. Create a `frankenSplice` function that accepts two arrays and an index.
    2. Copy each element of the first array into the second array, in order, beginning at the given index, and return the resulting array.
    3. The input arrays should remain the same after the function runs.
*/
const frankenSplice = (firstArr, secondArr, index) => {
	const copySecondArr = [...secondArr];
	copySecondArr.splice(index, 0, ...firstArr);
	return copySecondArr;
};
