/*
Build a Book Organizer

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. You should have an array of objects named `books` where each object in the array should have a string `title`, another string `authorName`, and a number `releaseYear`.
    2. Your `books` array should have a minimum of three objects.
    3. You should have a callback function named `sortByYear` that accepts two books as parameter for sorting the array.
    1. The `sortByYear` function should return -1 if the `releaseYear` of the first book is smaller than that of the second book.
    1. The `sortByYear` function should return 1 if the `releaseYear` of the first book is bigger than that of the second book.
    1. The `sortByYear` function should return 0 if both `releaseYear` values are equal.
    1. You should filter out books written after a certain year such as 1950 from the `books` array and save the filtered array in a new array named `filteredBooks`.
    1. You should sort the books in the `filteredBooks` array according to their `releaseYear` in ascending order. You learned in a prior lecture that the `sort()` method will sort the array in place. This means the `filteredBooks` array will be mutated.
*/
const books = [
	{
		title: "SaiGon cua toi",
		authorName: "Quoc Bao",
		releaseYear: 2013,
	},
	{
		title: "Toi noi gi khi noi ve chay bo",
		authorName: "Murakami",
		releaseYear: 2025,
	},
	{
		title: "Nhung loi binh yen",
		authorName: "Quoc Bao",
		releaseYear: 2019,
	},
];

const sortByYear = (books1, books2) => {
	if (books1.releaseYear < books2.releaseYear) return -1;
	if (books1.releaseYear === books2.releaseYear) return 0;
	return 1;
};

const filteredBooks = books
	.filter((book) => book.releaseYear > 2014)
	.sort(sortByYear);
