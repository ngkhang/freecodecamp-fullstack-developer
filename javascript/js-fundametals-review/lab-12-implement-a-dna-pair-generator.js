/*
Implement a DNA Pair Generator

Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

In this lab, you will write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character.

For example, for the input `GCG`, return `[["G", "C"], ["C", "G"], ["G", "C"]]`

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. You should have a `pairElement` function that takes a string as an argument.
    2. The `pairElement` function should return a 2d array.
    3. When given A, the function should pair it with T.
    4. When given T, the function should pair it with A.
    5. When given C, the function should pair it with G.
    6. When given G, the function should pair it with C.
    7. Each pair should be returned as an array with the original character first and its complement second.
*/
const pairElement = (str) => {
	const dnaPair = {
		A: "T",
		T: "A",
		C: "G",
		G: "C",
	};

	const pairs = [];

	for (const char of str) {
		pairs.push([char, dnaPair[char]]);
	}

	return pairs;
};
