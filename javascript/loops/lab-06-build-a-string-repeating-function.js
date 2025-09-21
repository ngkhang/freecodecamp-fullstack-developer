/*
Build a String Repeating Function

In this lab, you will create a function that repeats a given string a specific number of times. For the purpose of this lab, do not use the built-in `.repeat()` method.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. You should create a function named `repeatStringNumTimes` that takes two parameters: a string and a number.
    2. The function should return the string repeated the specified number of times.
    3. If the number is less than or equal to zero, the function should return an empty string.
*/
const repeatStringNumTimes = (str, num) => {
	if (num <= 0) return "";

	let result = "";

	for (let step = 0; step < num; step++) {
		result += str;
	}
	return result;

	// Other solution:
	// return num <= 0 ? "" : Array(num).fill(str).join("");
};
