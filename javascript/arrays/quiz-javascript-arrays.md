# JavaScript Arrays Quiz

1. What will be the output for the following code?

    ```js
    const numbers = [1, 2, 3];
    console.log(numbers[10]);
    ```

    - [ ] `null`
    - [x] `undefined`
    - [ ] `[1, 2, 3]`
    - [ ] `10`

2. Which of the following is the correct way to access the string `"Jessica"` from the `developers` array?

    - [x] Case 1

        ```js
        const developers = ["Jessica", "Naomi", "Tom"];
        developers[0]
        ```

    - [ ] Case 2

        ```js
        const developers = ["Jessica", "Naomi", "Tom"];
        developers[1]
        ```

    - [ ] Case 3

        ```js
        const developers = ["Jessica", "Naomi", "Tom"];
        developers[2]
        ```

    - [ ] Case 4

        ```js
        const developers = ["Jessica", "Naomi", "Tom"];
        developers[-1]
        ```

3. What value will be assigned to the `index` variable?

    ```js
    const numbers = [10, 20, 30, 40];
    const index = numbers.indexOf(20);
    console.log(index);
    ```

    - [ ] `-1`
    - [x] `1`
    - [ ] `2`
    - [ ] `3`

4. What does the rest syntax do?

    - [ ] It is used to divide a string into an array of substrings.
    - [ ] It is used to add or remove elements from any position in an array.
    - [ ] It is used to add elements to the end of the array and will return the new length.
    - [x] It captures the remaining elements of an array into a new array.

5. What is array destructuring?

    - [ ] It is used to concatenate all of the elements of an array into a single string.
    - [x] It is used to extract values from arrays and assign them to variables in a more concise and readable way.
    - [ ] It is used to remove the last element from an array and will return that removed element.
    - [ ] It is used to check if an array contains a specific value.

6. What value will be assigned to the `arr2` variable?

    ```js
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];
    console.log(arr2);
    ```

    - [ ] `[1, 2, 3]`
    - [ ] `[4, 5, 1, 2, 3]`
    - [x] `[1, 2, 3, 4, 5]`
    - [ ] `[1, 2, [3, 4, 5]]`

7. What will this code log to the console?

    ```js
    const colors = ["red", "blue", "green", "yellow"];
    colors.splice(1, 2, "purple");
    console.log(colors);
    ```

    - [ ] `["red", "blue", "yellow"]`
    - [ ] `["red", "blue", "green", "yellow"]`
    - [ ] `["red", "yellow"]`
    - [x] `["red", "purple", "yellow"]`

8. What value will be assigned to the `slicedArr` variable?

    ```js
    const arr = ["apple", "banana", "cherry", "date"];
    const slicedArr = arr.slice(1, 3);
    console.log(slicedArr);
    ```

    - [ ] `["apple", "banana"]`
    - [ ] `["apple", "cherry"]`
    - [ ] `["cherry", "date"]`
    - [x] `["banana", "cherry"]`

9. Which method returns the first index of a given element in an array?

    - [ ] `firstIndex()`
    - [x] `indexOf()`
    - [ ] `lastIndex()`
    - [ ] `searchIndex()`

10. Which method is used to remove the first element from an array and returns that removed element?

    - [ ] `slice()`
    - [ ] `splice()`
    - [x] `shift()`
    - [ ] `pop()`

11. What does the `concat()` method do?

    - [ ] Removes an element from the array.
    - [ ] Joins array elements into a string.
    - [ ] Adds an element to the beginning of an array.
    - [x] Merges two arrays into a new array.

12. What will be the output of this code?

    ```js
    const fruits = ["apple", "banana", "cherry", "apple", "orange"];
    fruits.splice(0, 1);
    console.log(fruits);
    ```

    - [ ] `["apple", "banana", "cherry", "apple", "orange"]`
    - [ ] `["cherry", 'apple']`
    - [ ] `["apple", "banana", "cherry"]`
    - [x] `["banana", "cherry", "apple", "orange"]`

13. What does the `includes()` method do?

    - [x] It is used to check if an array contains a specific value.
    - [ ] It is used to add or remove elements from any position in an array.
    - [ ] It is used to concatenate all of the elements of an array into a single string.
    - [ ] It is used to divide a string into an array of substrings.

14. Which of the following methods is used to reverse an array in place?

    - [ ] `reversed()`
    - [ ] `reversing()`
    - [x] `reverse()`
    - [ ] `reverseArr()`

15. What is a two dimensional array?

    - [x] An array of arrays.
    - [ ] An array of fixed length.
    - [ ] An array that only contains object literals.
    - [ ] An array of floating point numbers.

16. Which of the following is true about the `indexOf()` method in arrays?

    - [ ] It always returns the last occurrence of the element.
    - [ ] It requires the array to be sorted.
    - [ ] It throws an error if the element is not found.
    - [x] It returns `-1` if the element is not found.

17. Which of the following is NOT an array method?

    - [ ] `push()`
    - [ ] `includes()`
    - [x] `trim()`
    - [ ] `pop()`

18. What will be the output for the following code?

    ```js
    const arr = ["o", "l", "l", "e", "h"];
    console.log(arr.join(""));
    ```

    - [ ] `undefined`
    - [ ] `["o", "l", "l", "e", "h"]`
    - [ ] `"hello"`
    - [x] `"olleh"`

19. What will be the result of using the `shift()` method on an empty array?

    - [ ] `null`
    - [ ] `TypeError`
    - [x] `undefined`
    - [ ] `[]`

20. Which method will return a new array without changing the original array?

    - [ ] `pop()`
    - [ ] `shift()`
    - [ ] `push()`
    - [x] `slice()`
