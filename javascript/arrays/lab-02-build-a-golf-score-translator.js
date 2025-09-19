/*
Build a Golf Score Translator

In the game of Golf, each hole has a par, meaning the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

In this lab, you will write a function that converts the par and strokes to their nickname.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. You should create a function named `golfScore`.
    2. `golfScore` should take two numeric arguments, which are the par for the course and the amount of strokes made.
    3. `golfScore` should return a string.
    4. `golfScore` should return "Hole-in-one!" if strokes is 1.
    5. `golfScore` should return "Eagle" if strokes is less than or equal to par minus 2.
    6. `golfScore` should return "Birdie" if strokes is equal to par minus 1.
    7. `golfScore` should return "Par" if strokes is equal to par.
    8. `golfScore` should return "Bogey" if strokes is equal to par plus 1.
    9. `golfScore` should return "Double Bogey" if strokes is equal to par plus 2.
    10. `golfScore` should return "Go Home!" if strokes is greater than or equal to par plus 3.
*/
const golfScore = (par, strokes) => {
	if (strokes === 1) return "Hole-in-one!";

	const names = [
		"Eagle", // 0
		"Birdie", // 1
		"Par", // 2
		"Bogey", // 3
		"Double Bogey", // 4
		"Go Home!", // 5
	];

	const indexOfName = strokes - par + 2;
	// (strokes - par) is range [..., -2, -1, 0, 1, 2, 3, ...]
	// (strokes - par + 2) is range [... 0, 1, 2, 3, 4, 5, ...]
	if (indexOfName <= 0) return names[0];
	else if (indexOfName >= names.length - 1) return names[names.length - 1];
	else return names[indexOfName];
};
