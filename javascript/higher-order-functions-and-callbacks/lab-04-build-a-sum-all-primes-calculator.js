/*
Build a Sum All Primes Calculator

In this lab, you will build a calculator that takes a number and returns the sum of all prime numbers that are less than or equal to that number.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. You should have a `sumPrimes` function that accepts a number as an argument.
    2. The `sumPrimes` function should return the sum of all prime numbers less than or equal to the provided number.
    3. If the input number is less than 2, the function should return 0.
*/
const sumPrimes = (number) => {
	if (number <= 1) return 0;
	if (number === 2) return 2;

	const isPrime = (num) => {
		if (num <= 1) return false;
		if (num === 2) return true;

		if (num % 2 === 0) return false;
		const sqrt = Math.sqrt(num);
		for (let i = 3; i <= sqrt; i += 2) {
			if (num % i === 0) return false;
		}

		return true;
	};

	let sum = 2;

	for (let i = 3; i <= number; i += 2) {
		if (isPrime(i)) {
			sum += i;
		}
	}
	return sum;
};
