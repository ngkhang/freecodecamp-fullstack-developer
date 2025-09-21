/*
Implement the Mutations Algorithm

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. Create a function named `mutation` that takes an array as its argument.
    2. `mutation` should return `true` if the string in the first element of the array contains all of the letters of the string in the second element of the array, and `false` otherwise. For example:
        - mutation(["hello", "Hello"]), should return `true` because all of the letters in the second string are present in the first, ignoring case.
        - mutation(["hello", "hey"]) should return `false` because the string `hello` does not contain a `y`.
    3. mutation(["Alien", "line"]), should return `true` because all of the letters in `line` are present in `Alien`.
*/
const mutation = (arrStr) => {
	const [first, second] = arrStr;

	for (const char of second.toLowerCase()) {
		if (!first.toLowerCase().includes(char)) return false;
	}
	return true;
};
