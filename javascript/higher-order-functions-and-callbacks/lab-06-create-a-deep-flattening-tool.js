/*
Create a Deep Flattening Tool

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. You should have a function named `steamrollArray`.
    2. The `steamrollArray` function should accept one argument: a nested array.
    3. The function should flatten the nested array, accounting for varying levels of nesting.
    4. Your solution should not use the `Array.prototype.flat()` or `Array.prototype.flatMap()` methods.
    5. Global variables should not be used.
*/
const steamrollArray = (arrNested) => {
	const flatArr = [];

	for (const item of arrNested) {
		if (!Array.isArray(item)) {
			flatArr.push(item);
			continue;
		}

		const subArray = steamrollArray(item);
		flatArr.push(...subArray);
	}

	return [...flatArr];
};
