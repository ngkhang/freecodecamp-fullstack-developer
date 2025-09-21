/*
Build a Quiz Game

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. You should create an array named `questions`.
    2. The `questions` array should contain at least five objects, each having the keys `category`, `question`, `choices`, and `answer`.
    3. The `category` key should have the value of a string representing a question category.
    4. The `question` key should have the value of a string representing a question.
    5. The `choices` key should have the value of an array containing three strings, which are alternative answers to the question.
    6. The `answer` key should have the value of a string, representing the correct answer to the question. Also, the value of `answer` should be included in the `choices` array.
    7. You should have a function named `getRandomQuestion` that takes an array of questions as a parameter and returns a random question object from the array.
    8. You should have a function named `getRandomComputerChoice` that takes the array of the available choices as a parameter, and returns a random answer to the selected question.
    9. You should have a function named `getResults` that takes the question object as the first parameter and the computer's choice as the second parameter. The function should return `The computer's choice is correct!` if the answer is correct. Otherwise, it returns `The computer's choice is wrong. The correct answer is: <correct-answer>`, where `<correct-answer>` is the value of the correct answer to the chosen question.
*/
const questions = [
	{
		category: "Geography",
		question: "What is the capital of France?",
		choices: ["London", "Paris", "Berlin"],
		answer: "Paris",
	},
	{
		category: "Science",
		question: "What is the chemical symbol for gold?",
		choices: ["Au", "Ag", "Fe"],
		answer: "Au",
	},
	{
		category: "History",
		question: "In which year did World War II end?",
		choices: ["1944", "1945", "1946"],
		answer: "1945",
	},
	{
		category: "Technology",
		question: "Which programming language was created by Brendan Eich?",
		choices: ["Python", "JavaScript", "Java"],
		answer: "JavaScript",
	},
	{
		category: "Literature",
		question: "Who wrote the novel '1984'?",
		choices: ["George Orwell", "Aldous Huxley", "Ray Bradbury"],
		answer: "George Orwell",
	},
];

const getRandomQuestion = (questions) => {
	const size = questions.length;

	const indexRandom = Math.floor(Math.random() * size);
	return questions[indexRandom];
};

const getRandomComputerChoice = (arrAnswers) => {
	const size = arrAnswers.length;
	const indexRandom = Math.floor(Math.random() * size);

	return arrAnswers[indexRandom];
};

const getResults = (question, choice) => {
	if (question.answer === choice) return "The computer's choice is correct!";

	return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
};
