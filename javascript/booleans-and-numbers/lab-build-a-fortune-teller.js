/*
Build a Fortune Teller

In this lab, you will define five fortunes and randomly select one of them to display the fortune to the user.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

1. You should initialize the five variables `fortune1`, `fortune2`, `fortune3`, `fortune4`, and `fortune5` with a string value of your choice. You can use the below options if you like:
    - "Your cat will look very cuddly today."
    - "The weather will be nice tomorrow."
    - "Be cautious of your new neighbors."
    - "You will find a new hobby soon."
    - "It would be wise to avoid the color red today."

2. You should select a random number between 1 and 5, inclusive, and assign it to the variable `randomNumber`.

3. You should create a `selectedFortune` variable and assign the appropriate fortune based on these rules:

    - If `randomNumber` is 1, assign the value of `fortune1` to `selectedFortune`.
    - If `randomNumber` is 2, assign the value of `fortune2` to `selectedFortune`.
    - If `randomNumber` is 3, assign the value of `fortune3` to `selectedFortune`.
    - If `randomNumber` is 4, assign the value of `fortune4` to `selectedFortune`.
    - If `randomNumber` is 5, assign the value of `fortune5` to `selectedFortune`.

4. You should log the `selectedFortune` to the console.
*/
const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

const randomNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

let selectedFortune;

if (randomNumber === 1) selectedFortune = fortune1;
else if (randomNumber === 2) selectedFortune = fortune2;
else if (randomNumber === 3) selectedFortune = fortune3;
else if (randomNumber === 4) selectedFortune = fortune4;
else selectedFortune = fortune5;

console.log(selectedFortune);
