/*
Build a Longest Word Finder App

In this lab, you will build a function that returns the length of the longest word in the provided sentence.

For example, in the sentence "The quick brown fox jumped over the lazy dog", the longest word is "jumped", which has a length of 6.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. You should create a function named `findLongestWordLength` that takes a string as an argument.
    2. The function should return the length of the longest word in the string.
*/
const findLongestWordLength = (str) => {
	let maxLen = 0;
	let word = "";

	const strEndSpace = `${str} `;

	for (let i = 0; i < strEndSpace.length; i++) {
		if (strEndSpace[i] !== " ") {
			word += strEndSpace[i];
			continue;
		}

		maxLen = maxLen <= word.length ? word.length : maxLen;
		word = "";
	}
	return maxLen;
};
