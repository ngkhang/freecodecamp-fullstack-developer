/*
Design a Sum All Numbers Algorithm

In this lab, you will need to design a sum all numbers algorithm.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. You should have a function named `sumAll` that accepts an array of two numbers.
    2. `sumAll([n, m])` should return the sum of `n` and `m` plus the sum of all the numbers between them. The lowest number will not always come first. For example, `sumAll([4,1])` should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/
const sumAll = (arrNum) => {
	const [n, m] = arrNum;
	const start = n < m ? n : m;
	const end = n < m ? m : n;
	const RANGE = 1;

	const numbersOfNumber = (end - start) / RANGE + 1;

	return ((end + start) * numbersOfNumber) / 2;
};
