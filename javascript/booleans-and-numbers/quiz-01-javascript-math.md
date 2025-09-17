# JavaScript Math Quiz

1. What does `NaN` stand for?
    - [ ] Not a Null
    - [ ] Null and Number
    - [ ] Numeric and Number
    - [x] Not a Number

2. Which of the following is NOT an arithmetic operator in JavaScript?
    - [x] `??`
    - [ ] `*`
    - [ ] `+`
    - [ ] `-`

3. What happens if you try to divide by zero in JavaScript?
    - [ ] Nothing will happen.
    - [ ] JavaScript will throw an error.
    - [x] JavaScript will output `Infinity`
    - [ ] JavaScript will output 0.

4. Which of the following is the correct use of the exponentiation operator?
    - [ ] `2*3`
    - [x] `2**3`
    - [ ] `2%3`
    - [ ] `2#3`

5. Which operator should you use when decrementing a variable in JavaScript?
    - [ ] `++`
    - [x] `--`
    - [ ] `**`
    - [ ] `//`

6. Which of the following is NOT a bitwise operator?
    - [x] `>`
    - [ ] `|`
    - [ ] `^`
    - [ ] `&`

7. Which of the following is the correct compound operator for getting the remainder?
    - [ ] `//=`
    - [ ] `\=`
    - [ ] `%%=`
    - [x] `%=`

8. What is the difference between the `==` and `===` operators?
    - [ ] The `==` operator is used to check if the data type is the same while the `===` is used to check if the value is equal.
    - [ ] There is no difference. The comparison result will always have the same result.
    - [x] The `==` operator only compares values whereas the `===` operator compares values and types.
    - [ ] The `==` operator can only be used with primitive types while the `===` operator is only used for objects.

9. What is the unary plus operator (`+`) used for?

    - [ ] It is used to get the remainder from an operation.
    - [ ] It is used to decrement a value by one.
    - [x] It is used to convert its operand into a number.
    - [ ] It is used to invert the binary representation of a number.

10. Which of the following `Math` methods rounds a value to the nearest whole integer?
    - [ ] `Math.min()`
    - [ ] `Math.max()`
    - [x] `Math.round()`
    - [ ] `Math.trunc()`

11. What does the `Math.sqrt()` method do?
    - [ ] This method returns a random floating point number.
    - [ ] This method returns the cube of a number.
    - [ ] This method returns the absolute value for a number.
    - [x] This method returns the square root of a number.

12. Which of the following is NOT a valid method for the `Math` object?
    - [x] `Math.extend()`
    - [ ] `Math.ceil()`
    - [ ] `Math.abs()`
    - [ ] `Math.pow()`

13. Which of the following will return `false`?
    - [ ] `isNaN(undefined)`
    - [ ] `isNaN()`
    - [ ] `isNaN("Matt")`
    - [x] `isNaN(7)`

14. What does the `parseFloat()` method do?
    - [x] It parses a string argument and returns a floating-point number.
    - [ ] It parses a string argument and returns an integer.
    - [ ] It parses a string argument and performs a bitwise operation on it.
    - [ ] It parses a string argument and returns `false`.

15. What will be logged to the console?

    ```js
    let num = 5;
    console.log(++num);
    ```

    - [ ] `null`
    - [ ] `5`
    - [ ] `error`
    - [x] `6`

16. What would be the output for the following code?

    ```js
    console.log(5 == '5');
    ```

    - [ ] `null`
    - [ ] `undefined`
    - [x] `true`
    - [ ] `false`

17. What is operator precedence?
    - [x] Operator precedence determines the order in which operations are evaluated in an expression.
    - [ ] Operator precedence is used to to increase the value by one.
    - [ ] Operator precedence is used to raise a variable to the power of the specified number and reassigns the result to the variable.
    - [ ] Operator precedence is used to check if the value on the left is less than the one on the right.

18. Which of the following is NOT a comparison operator?
    - [x] `!>`
    - [ ] `>`
    - [ ] `<`
    - [ ] `>=`

19. What does the unary negation operator (`-`) do?
    - [ ] It decreases the value by one.
    - [ ] It increases the value by one.
    - [ ] It flips the boolean value of its operand.
    - [x] It negates the operand.

20. Which of the following is an example of using the nullish coalescing operator?
    - [ ] Case 1

        ```js
        const userSettings = {
        theme: null,
        volume: 0,
        notifications: false,
        };

        userSettings.theme \\ 'light';
        ```

    - [x] Case 2

        ```js
        const userSettings = {
        theme: null,
        volume: 0,
        notifications: false,
        };

        userSettings.theme ?? 'light';
        ```

    - [ ] Case 3

        ```js
        const userSettings = {
        theme: null,
        volume: 0,
        notifications: false,
        };

        userSettings.theme () 'light';
        ```

    - [ ] Case 4

        ```js
        const userSettings = {
        theme: null,
        volume: 0,
        notifications: false,
        };

        userSettings.theme ** 'light';
        ```
