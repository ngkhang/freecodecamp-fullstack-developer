/*
Build a Boolean Check Function

In this lab you will build a function that check if a value is classified as a boolean primitive.

Boolean primitives are `true` and `false`.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. You should have a function called `booWho` that receives one argument.
    2. If the argument received is a boolean primitive, the function should return `true`.
    3. If the argument is any other value, the function should return `false`.
*/
function booWho(value) {
	return typeof value === "boolean";
}
