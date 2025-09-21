# JavaScript Loops Quiz

1. Which of the following best describes iteration?
    - [ ] It is the process of sending signals between components to establish a connection.
    - [x] It is the process of repeating a set of instructions multiple times.
    - [ ] It is a technique for storing data in consecutive memory locations.
    - [ ] It is the process of writing code repeatedly until it works correctly.

2. What technique is used for iterations in programming?
    - [ ] Conditionals
    - [x] Looping
    - [ ] Compilation
    - [ ] Recursion

3. Which of the following is an iterable object?
    - [ ] Boolean
    - [ ] Undefined
    - [ ] Number
    - [x] String

4. Which of the following is not a type of loop supported in JavaScript?
    - [ ] `while` loop.
    - [ ] `for...in` loop.
    - [x] `if...else` loop.
    - [ ] `for` loop.

5. What is the correct order of the for loop declaration?
    - [ ] `for (increment/decrement; condition; initialization) { statement; }`
    - [ ] `for (condition; increment/decrement; initialization) { statement; }`
    - [ ] `for (initialization; increment/decrement; condition) { statement; }`
    - [x] `for (initialization; condition; increment/decrement) { statement; }`

6. Which loop executes the code block once, before checking if the condition is true, and will continue working as long as the condition remains true?
    - [x] `do...while` loop.
    - [ ] `for...in` loop.
    - [ ] `for...of` loop.
    - [ ] `while` loop.

7. Which of the following will loop over the values of an iterable object?
    - [x] `for...of` loop.
    - [ ] `for` loop.
    - [ ] `for...in` loop.
    - [ ] `do...while` loop.

8. Which of the following best defines an infinite loop?
    - [ ] A loop that runs once and then is terminated.
    - [ ] A loop that automatically stops after a fixed number of iterations.
    - [x] A loop whose termination condition is never met or is absent.
    - [ ] A loop that runs until the condition becomes false.

9. How many times will the following loop run?

    ```js
    for (let i = 2; i < 10; i+=2) {
        console.log(i);
    }
    ```

    - [x] `4`
    - [ ] `9`
    - [ ] `10`
    - [ ] `5`

10. Which loop is the best for iterating objects?
    - [ ] `do...while` loop.
    - [ ] `for` loop.
    - [x] `for...in` loop.
    - [ ] `for...of` loop.

11. What is the difference between the `for...in` loop and the `for...of` loop?
    - [x] `for...in` loop iterates over property names (keys), while the `for...of` loop iterates over property values.
    - [ ] `for...in` loop iterates over property values, while the `for...of` loop iterates over property names (keys).
    - [ ] `for...in` loops can only be used with strings, while the `for...of` loops can be used with both strings and numbers.
    - [ ] `for...in` loops create new properties, while `for...of` loops modify existing properties.

12. Which of these would cause an infinite loop?
    - [ ] A loop condition that eventually gives false.
    - [ ] Increment/decrement logic.
    - [x] A loop condition that always returns true.
    - [ ] Initialization of variable.

13. What statement can be used to break out of a loop completely?
    - [ ] The `continue` statement.
    - [x] The `break` statement.
    - [ ] The `skip` statement.
    - [ ] The `label` statement.

14. Which statement can be used to skip the current iteration and move to the next iteration?
    - [ ] The `label` statement.
    - [ ] The `break` statement.
    - [ ] The `return` statement.
    - [x] The `continue` statement.

15. What is printed to the console with the following code?

    ```js
    for (let i = 0; i < 25; i += 2) {
        if (i % 5 === 0) {
            continue;
        }
        if (i % 13 === 0) {
            break;
         }
        console.log(i);
    }
    ```

    - [ ] `2, 4, 6, 8, 12`
    - [ ] `0, 2, 4, 6, 8, 12`
    - [ ] `0, 2, 4, 6, 8, 12, 14, 16, 18, 22, 24`
    - [x] `2, 4, 6, 8, 12, 14, 16, 18, 22, 24`

16. What would the following code print to the console?

    ```js
    for (let i = 1; i < 6; i++) {
        if (i === 4) break;
        console.log(i);
    }
    ```

    - [x] `1, 2, 3`
    - [ ] `1, 2, 3, 4, 5, 6`
    - [ ] `1, 2, 3, 4`
    - [ ] `1, 2, 3, 4, 5`

17. What will be printed to the console with the code below?

    ```js
    const shoppingList = { tomatoes: 4, apples: 10 };
    for (const item in shoppingList) {
        console.log(item);
    }
    ```

    - [ ] `tomatoes - 4, apples - 10`
    - [ ] `4, 10`
    - [ ] `tomatoes:4, apples:10`
    - [x] `tomatoes, apples`

18. What will be the console output of the code below?

    ```js
    for (let i = 2; i <= 13; i++) {
        if (i % 2 === 0) continue;
        console.log(i);
    }
    ```

    - [ ] `2, 4, 6, 8, 10, 12`
    - [ ] `1, 3, 5, 7, 9, 11`
    - [x] `3, 5, 7, 9, 11, 13`
    - [ ] `1, 3, 5, 7, 9, 11, 13`

19. What would be printed to the console with the code below?

    ```js
    const fruits = ["Mango", "Pineapple", "Oranges"];
    for (const fruit of fruits) {
        console.log(fruit);
    }
    ```

    - [ ] `Pineapple, Oranges, Mango`
    - [ ] `Oranges, Pineapple, Mango`
    - [ ] `0, 1, 2`
    - [x] `Mango, Pineapple, Oranges`

20. How many times will the code below output the string `in the loop`?

    ```js
    let x = 0
    while (x < 5) {
      console.log("in the loop");
    }
    ```

    - [x] Infinite times
    - [ ] 4 times
    - [ ] 5 times
    - [ ] 3 times
