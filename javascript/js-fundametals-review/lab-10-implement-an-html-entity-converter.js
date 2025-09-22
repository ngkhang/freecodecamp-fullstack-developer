/*
Implement an HTML Entity Converter

This lab is about converting special characters in a string with their corresponding HTML entities.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. You should have a `convertHTML` function that accepts a string as an argument.
    2. The `convertHTML` function should return a new string by converting special characters in the argument string to their corresponding HTML entities.
        - `&` should be converted to `&amp;`
        - `<` should be converted to `&lt;`
        - `>` should be converted to `&gt;`
        - `"` should be converted to `&quot;`
        - `'` should be converted to `&apos;`
*/
const convertHTML = (str) => {
	const specialChar = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&apos;",
	};

	let strHtml = "";

	for (const char of str) {
		const isSpecialChar = Object.hasOwn(specialChar, char);

		strHtml += isSpecialChar ? specialChar[char] : char;
	}
	return strHtml;
};
