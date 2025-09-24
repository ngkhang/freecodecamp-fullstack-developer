/*
Implement a Matching Object Filter

In this lab, you will create a function that filters an array of objects and returns only those objects that match all key-value pairs in a given source object.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. You should have a `whatIsInAName` function that accepts two arguments, an array of objects and a source object.
    2. The `whatIsInAName` function should return a new array containing only the objects from the collection that have all the key–value pairs present in the source object.
    3. If no objects match all the key–value pairs from the source, the function should return an empty array. For example:

    ```js
    whatIsInAName(
    [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
    );
    // should return [{ first: "Tybalt", last: "Capulet" }]
    ```
*/
const whatIsInAName = (arr, sourceObj) => {
	return arr.filter((obj) => {
		let isContain = true;
		for (const [key, value] of Object.entries(sourceObj)) {
			if (!key in obj || obj[key] !== value) isContain = false;
		}

		return isContain;
	});
};
