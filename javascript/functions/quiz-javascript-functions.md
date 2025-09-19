# JavaScript Functions Quiz

1. Which of the following is the correct way to declare a function in JavaScript?
    - [ ] Case 1

        ```js
        def greet() {
            console.log("Hello there!");
        }
        ```

    - [x] Case 2

        ```js
        function greet() {
            console.log("Hello there!");
        }
        ```

    - [ ] Case 3

        ```js
        defineFunction greet() {
            console.log("Hello there!");
        }
        ```

    - [ ] Case 4

        ```js
        func greet() {
         console.log("Hello there!");
        }
        ```

2. What happens when you call (or execute) a function?
    - [ ] The code inside the function `will` run and null will always be returned.
    - [x] The code inside the function will run and a value will be returned.
    - [ ] A `TypeError` will be thrown and the program will crash.
    - [ ] Nothing will happen when you call a function.

3. Which of the following is the correct way to call a function?
    - [ ] `()exampleFunction();`
    - [x] `exampleFunction();`
    - [ ] `exampleFunction;`
    - [ ] `exampleFunction>>;`

4. What is the role of the `return` keyword?
     - [ ] The `return` keyword serves no purpose in functions.
     - [ ] The `return` keyword will execute the function.
     - [x] The `return` keyword returns a value from the function.
     - [ ] The `return` keyword will throw a type error.

5. Which of the following is a valid function expression?
    - [x] Case 1

        ```js
        const getSum = function(x, y) {
            return x + y;
        };
        ```

    - [ ] Case 2

        ```js
        expression function getSum(x, y) {
            return x + y;
        };
        ```

    - [ ] Case 3

        ```js
        getSum: function(x, y) {
            return x + y;
        };
        ```

    - [ ] Case 4

        ```js
        function = getSum(x, y) {
            return x + y;
        };
        ```

6. What are function arguments?
    - [ ] Placeholder values used inside of the function.
    - [ ] Special values that act similar to anonymous functions.
    - [x] Real values passed to a function when it is called.
    - [ ] Values that represents the absence of a value.

7. What are function parameters?
    - [ ] Values that represent the intentional absence of the value.
    - [x] Values listed inside the function definition.
    - [ ] Floating point values used inside of the function.
    - [ ] Values passed to a function when it is called.

8. What will be logged to the console?

    ```js
    const calculateTotal = (amount, taxRate = 0.05) => {
        return amount + (amount * taxRate);
    };

    console.log(calculateTotal(100));
    ```

    - [ ] `1`
    - [ ] `undefined`
    - [x] `105`
    - [ ] `10`

9. Which of the following is the correct syntax for an arrow function?
    - [ ] `const sum === (num1, num2) === num1 + num2`
    - [ ] `const sum <<>> (num1, num2) => num1 + num2`
    - [x] `const sum = (num1, num2) => num1 + num2`
    - [ ] `const sum >=> (num1, num2) => num1 + num2`

10. What will be result for the following code?

    ```js
    function greet() {
        const developer = "Jessica";
        console.log("Hello there!");
    }

    console.log(developer);
    ```

    - [x] You will get a reference error because `developer` is not defined globally.
    - [ ] Nothing will happen and the code will run normally.
    - [ ] The string `"Hello!"` will be logged to the console.
    - [ ] The string `"Hello there!"` will be logged to the console.

11. When can you omit a set of parentheses around a parameter list for an arrow function?
    - [ ] You should always omit the parentheses around a parameter list.
    - [ ] You should only omit the parentheses when you are working with multiple parameters.
    - [x] You should only omit the parentheses when you only have one parameter.
    - [ ] You are never supposed to omit the parentheses for an arrow function.

12. When can you omit the curly braces and `return` keyword for an arrow function?
    - [ ] You should always omit the curly braces and `return` keyword.
    - [x] When the function body consists of a single expression.
    - [ ] When the function body has multiple lines of code.
    - [ ] You should never omit the curly braces and `return` keyword.

13. What will be the result for the following code?

    ```js
    function exampleFunction() {
        return "Hello";
        return "World!";
    };

    exampleFunction();
    ```

    - [ ] `undefined`
    - [ ] `"World!"`
    - [x] `"Hello"`
    - [ ] `"Hello World!"`

14. Which of the following is the correct way to use default parameters?
    - [ ] Case 1

        ```js
        function sum(num1, num2 >> 12) {
            return num1 + num2
        }
        ```

    - [x] Case 2

        ```js
        function sum(num1, num2 = 12) {
            return num1 + num2
        }
        ```

    - [ ] Case 3

        ```js
        function sum(num1, num2 <<>> 12) {
            return num1 + num2
        }
        ```

    - [ ] Case 4

        ```js
        function sum(num1, num2 === 12) {
            return num1 + num2
        }
        ```

15. What will be the result for the following code?

    ```js
    const developer = "Jessica";

    function greet() {
        console.log("Hello, " + developer)
    }

    greet();
    ```

    - [x] The string `"Hello, Jessica"` will be logged to the console.
    - [ ] The string `"Hello, developer"` will be logged to the console.
    - [ ] An error message will display in the console.
    - [ ] Nothing will display in the console.

16. What happens if you try to remove the curly braces for a regular function?
    - [x] You will get a syntax error.
    - [ ] The program will crash and not start again.
    - [ ] An alert box will display on the page with an error.
    - [ ] Nothing will happen.

17. What will be the result for the following code?

    ```js
    const sum = (num1, num2) => num1 + num2
    console.log(sum(0, 0) + 10);
    ```

    - [x] The number `10` will be logged to the console.
    - [ ] Nothing will be logged to the console.
    - [ ] The number `0` will be logged to the console.
    - [ ] An error message will display in the console.

18. What will be the output for the following code?

    ```js
    const exampleFunction = (param1, param2) => param1 + param2;
    console.log(exampleFunction(3, "Something"));
    ```

    - [ ] `3 + "Something"`
    - [x] `"3Something"`
    - [ ] `null`
    - [ ] `undefined`

19. What will be the result for the following code?

    ```js
    const sum = (num1, num2) => num1 + num2
    console.log(sum(0, 0) + num2);
    ```

    - [x] An error message saying `num2` is not defined.
    - [ ] An error message saying `num1` is not defined.
    - [ ] `undefined` will be displayed in the console.
    - [ ] The number `0` will be displayed in the console.

20. What will be the output for the following code?

    ```js
    const divideTwoNumbers = (num1, num2) => num1 / num2;
    console.log(divideTwoNumbers(3, 0));
    ```

    - [ ] Error
    - [ ] 0
    - [x] Infinity
    - [ ] null
