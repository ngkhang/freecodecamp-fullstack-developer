/*
Build a Title Case Converter

In this lab you will create a function that converts a string to title case. Title case means that the first letter of each word is capitalized and the rest of the word is in lower case.

"Web Development Is Awesome" is an example of a title cased string.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. You should have a `titleCase` function that takes a string as an argument.
    2. The `titleCase` function should return a string with the first letter of each word capitalized and the rest of the word in lower case.
    3. `titleCase("I like to code")` should return "I Like To Code".
    4. `titleCase("javaScript is fun")` should return "Javascript Is Fun".
*/
const titleCase = (str) => {
	const RANGE_BETWEEN_LOWER_AND_UPPER = 32;
	const strArr = str.toLowerCase().split(/\s/g);

	for (let i = 0; i < strArr.length; i++) {
		const word = strArr[i];
		const firstCharUpper = String.fromCharCode(
			word[0].charCodeAt() - RANGE_BETWEEN_LOWER_AND_UPPER
		);

		strArr[i] = firstCharUpper + word.slice(1);
	}

	return strArr.join(" ");
};

titleCase("I'm a little tea pot");
