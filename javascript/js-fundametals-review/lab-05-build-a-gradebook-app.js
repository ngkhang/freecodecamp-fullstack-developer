/*
Build a Gradebook App

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. You should have a function named `getAverage` that takes an array of test scores as a parameter and returns the average score.
    2. You should have a function named `getGrade` that takes a student score as a parameter and returns a string representing a letter grade based on the score. Here are the scores and their corresponding letter grades:
        | Score   | Range Grade |
        | ------- | ----------- |
        | 100     | "A+"        |
        | 90 - 99 | "A"         |
        | 80 - 89 | "B"         |
        | 70 - 79 | "C"         |
        | 60 - 69 | "D"         |
        | 0 - 59  | "F"         |
    3. You should have a function named `hasPassingGrade` that takes a score as a parameter and returns either `true` or `false` depending on if the score corresponds to a passing grade.
    4. The `hasPassingGrade` function should use the `getGrade` function to get the letter grade, and use it to determine if the grade is passing. A passing grade is anything different from "F".
    5. You should have a function named `studentMsg` that takes an array of scores and a student score as the parameters. The function should return a string with the format:
        - "Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.", if the student passed the course.
        - "Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.", if the student failed the course.

Replace `average-goes-here` with the average of total scores and `grade-goes-here` with the student's grade. Use `getAverage` to get the average score and `getGrade` to get the student's grade.
*/
const getAverage = (scores) => {
	const total = scores.reduce((score, total) => (total += score), 0);
	return total / scores.length;
};

const getGrade = (score) => {
	if (score === 100) return "A+";
	if (90 <= score && score <= 99) return "A";
	if (80 <= score && score <= 89) return "B";
	if (70 <= score && score <= 79) return "C";
	if (60 <= score && score <= 69) return "D";

	return "F";
};

const hasPassingGrade = (score) => {
	const gradeChar = getGrade(score);

	return gradeChar !== "F";
};

const studentMsg = (scores, score) => {
	const averScore = getAverage(scores);
	const scoreChar = getGrade(score);
	const isPassed = hasPassingGrade(score);

	return `Class average: ${averScore}. Your grade: ${scoreChar}. You ${
		isPassed ? "passed" : "failed"
	} the course.`;
};
