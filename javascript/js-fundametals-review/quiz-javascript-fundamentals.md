# JavaScript Fundamentals Quiz

1. Which one of these will create a String object?
    - [ ] `String({ "Hello World" });`
    - [ ] `"Hello World".toString();`
    - [ ] `String("Hello World");`
    - [x] `new String("Hello World");`

2. How can you convert a String object into a string literal?
    - [ ] With the `.stringify()` method.
    - [ ] With the `String()` constructor.
    - [ ] Enclose the String object in double quotes.
    - [x] With the `.toString()` method.

3. Why can you use methods like `.length`, `.repeat()`, `.concat()`, and `.slice()` on a string primitive in JavaScript?
    - [ ] Those methods exist natively on string primitives.
    - [ ] JavaScript temporarily converts the string primitive to an array.
    - [x] JavaScript temporarily wraps the string primitive in a String object.
    - [ ] String primitives are stored as objects internally.

4. What will the following code log to the console?

    ```js
    let stringArray = [8, 9, 10].toString();
    console.log(stringArray);
    ```

    - [ ] `["8", "9", "10"]`
    - [ ] `[8,9,10]`
    - [x] `"8,9,10"`
    - [ ] `"8", "9", "10"`

5. How can you convert a string literal into a Number object?
    - [ ] With the `.toNumber()` method.
    - [ ] With the `.parseInt()` method.
    - [ ] With the `Object()` constructor.
    - [x] With the `Number()` constructor.

6. What will `Number(true)` and `Number(false)` return, respectively?
    - [x] `1` and `0`
    - [ ] `true` and `false`
    - [ ] `undefined` and `undefined`
    - [ ] `NaN` and `NaN`

7. What will `Number(undefined)` and `Number(null)` return, respectively?
    - [ ] `undefined` and `null`
    - [ ] `0` and `0`
    - [x] `NaN` and `0`
    - [ ] `NaN` and `NaN`

8. Which of the following is the best name for a boolean variable that checks if a user is allowed to do something on your website?
    - [x] `hasPermission`
    - [ ] `permission`
    - [ ] `getPermission`
    - [ ] `handlePermission`

9. Which of the following is the best name for a function that runs when a user submits a form?
    - [ ] `formSubmit`
    - [x] `handleSubmit`
    - [ ] `hasSubmitted`
    - [ ] `didSubmit`

10. What is a sparse array?
    - [ ] An array where one or more indices have a value of `null`.
    - [x] An array where one or more indices are not assigned a value.
    - [ ] An array where one or more indices have a value of `undefined`.
    - [ ] An array where one or more indices have a value of an empty object literal.

11. In which of the following examples will `arr` NOT be a sparse array?
    - [ ] `const arr = new Array(5);`
    - [ ] `const arr = [1, 2, 3, , 5];`
    - [ ] Case 3

        ```js
        const arr = [1, 2, 3];
        arr[4] = 4;
        ```

    - [x] `const arr = Array.from({ length: 5 });`

12. What is the primary purpose of a linter?
    - [ ] To optimize code for performance.
    - [ ] To format code automatically.
    - [ ] To create documentation for code.
    - [x] To detect potential errors and issues in code.

13. What is a benefit of using a formatter in a codebase?
    - [ ] They allow developers to compile code more efficiently.
    - [x] They ensure a consistent code style.
    - [ ] They detect logical errors.
    - [ ] They convert code to a specific programming language.

14. In JavaScript, who or what is typically responsible for allocating memory to variables?
    - [ ] The developer.
    - [ ] The operating system.
    - [x] The runtime engine.
    - [ ] The server.

15. What will be logged to the console in the following code?

    ```js
    function trackTotal(initialValue) {
        let total = initialValue;
        return function(increment) {
            total += increment;
            return total;
        };
    }

    let track = trackTotal(1);
    console.log(track(2));
    console.log(track(3));
    ```

    - [ ] `2` `3`
    - [ ] `3` `6`
    - [ ] `5` `6`
    - [x] `3` `6`

16. What is hoisting in JavaScript?
    - [ ] The process of creating new variables.
    - [x] The process of moving variable declarations to the top of their scope.
    - [ ] Automatically moving var declarations to the top of the block.
    - [ ] Raising errors to the top of the code.

17. Why is using the `var` keyword considered bad practice in modern JavaScript?
    - [ ] They don't allow type checking.
    - [ ] They cause syntax errors.
    - [ ] They're slower than let and const.
    - [x] They're accessible outside their block.

18. What is the purpose of modules in JavaScript?
    - [x] To organize code into reusable units.
    - [ ] To make code more difficult to understand.
    - [ ] To improve code performance.
    - [ ] To create new programming languages.

19. How do you add an app.js script as a module in an HTML document?
    - [ ] `<script src="app.js"></script>`
    - [ ] `<script type="module/javascript" src="app.js"></script>`
    - [ ] `<script src="app.js" module></script>`
    - [x] `<script type="module" src="app.js"></script>`

20. Which of the following examples exports the `calculateSum` function from a utils.js module and properly imports and uses it in an app.js file?

    - [x] Case 1

        ```js
        // utils.js
        export function calculateSum(a, b) {
            return a + b;
        }
        // app.js
        import { calculateSum } from './utils.js';
        console.log(calculateSum(2, 3));
        ```

    - [ ] Case 2

        ```js
        // utils.js
        export default function calculateSum(a, b) {
            return a + b;
        }
        // app.js
        import { calculateSum } from './utils.js';
        console.log(calculateSum(2, 3));
        ```

    - [ ] Case 3

        ```js
        // utils.js
        export function calculateSum(a, b) {
            return a + b;
        }
        // app.js
        import calculateSum from './utils.js';
        console.log(calculateSum(2, 3));
        ```

    - [ ] Case 4

        ```js
        // utils.js
        function calculateSum(a, b) {
            return a + b;
        }
        export default calculateSum;

        // app.js
        import * as utils from './utils.js';
        console.log(utils.calculateSum(2, 3));
        ```
