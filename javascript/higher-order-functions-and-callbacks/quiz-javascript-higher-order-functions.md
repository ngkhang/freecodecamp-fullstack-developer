# JavaScript Higher Order Functions Quiz

1. Which of the following statements about JavaScript higher-order functions is NOT true?
    - [ ] Higher-order functions can greatly enhance code readability and maintainability by enabling functional programming techniques.
    - [x] All functions in JavaScript, including those that do not take or return other functions, can be classified as higher-order functions.
    - [ ] Higher-order functions may introduce complexity in understanding code, but they can also lead to more expressive and concise solutions.
    - [ ] Higher-order functions like map, filter, and reduce are powerful tools for array manipulation, but they are not unique to functional programming.

2. What is a factory function in the context of higher order functions?
    - [ ] A function that creates new variables.
    - [x] A function that returns a new function based on specific parameters
    - [ ] A function that automatically generates code comments.
    - [ ] A function that only works with strings.

3. After code execution, what will be the value of `forEachRes` and `mapRes`?

    ```js
    const numbers = [1, 1, 1, 1, 1];
    let sum = 0;
    const forEachRes = numbers.forEach(num => {
        return (sum += num);
    });
    const mapRes = numbers.map(num => {
        return (sum += num);
    });
    ```

    - [ ] `forEachRes` is `0` and `mapRes` is `[1,2,3,4,5]`
    - [ ] `forEachRes` is `undefined` and `mapRes` is `[1,2,3,4,5]`
    - [ ] `forEachRes` is `5` and `mapRes` is `[1,2,3,4,5]`
    - [x] `forEachRes` is `undefined` and `mapRes` is `[6,7,8,9,10]`

4. What is the result of this code?

    ```js
    [, undefined, 'a', 'b', { 20: 5 }].sort();
    ```

    - [ ] Unsupported elements for an array to be sorted, hence error.
    - [ ] Callback not supplied, hence error.
    - [ ] `[empty, 'a', 'b', undefined, { '20': 5 }]`
    - [x] `[{ '20': 5 }, 'a', 'b', undefined, empty]`

5. Which of the following describes a callback function in JavaScript?
    - [x] A function passed as an argument to another function, to be executed by that function's logic.
    - [ ] A function that returns another function.
    - [ ] A function that is invoked with a specific context.
    - [ ] A function that is called immediately upon declaration.

6. What is the result of using `reduce()` on an array?
    - [ ] A boolean indicating whether any elements meet a condition.
    - [ ] An array with all elements reduced by specified callback function.
    - [ ] An array of booleans.
    - [x] It varies depending on the accumulator's initial value and the callback function.

7. How does the `sort()` method behave if no compare function is provided in numerical sorting?
    - [x] It sorts the array as strings based on UTF-16 code units.
    - [ ] It returns an array of special characters.
    - [ ] It fills the empty slots with null.
    - [ ] It sorts the array in reverse order.

8. What is the purpose of the `some()` method in JavaScript?
    - [x] To determine if any elements in an array pass a specified test.
    - [ ] To iterate through an array without producing a result.
    - [ ] To reduce an array to a single value based on a callback function.
    - [ ] To create a new array with the results of a function applied to each element.

9. Which of the following is a valid example of method chaining?
    - [x] `str.toLowerCase().trim().replace(' ', '_');`
    - [ ] `console.log('Hello');`
    - [ ] `Math.random();`
    - [ ] `array.push(1).pop();`

10. What is the output of the following code?

    ```js
    let numbers = [2, 4, 8, 10];

    numbers.forEach(function(number) {
        console.log(number % 2);
    });
    ```

    - [ ] `null null null null`
    - [ ] `2 4 8 10`
    - [ ] `1 2 4 5`
    - [x] `0 0 0 0`

11. Which of the following is a benefit of method chaining?
    - [ ] It allows for error handling and debugging to be more straightforward.
    - [x] It promotes simplified syntax and more readable code by allowing multiple operations in a single expression.
    - [ ] It inherently optimizes performance by reducing the execution time of functions.
    - [ ] It eliminates the need for temporary variables, but may increase memory usage in some cases.

12. How can you sort an array of objects by a specific property using the sort method?
    - [ ] The sort method cannot sort objects.
    - [ ] Convert the objects to strings and sort them.
    - [x] Use a compare function that compares the property values.
    - [ ] Use the reverse method after sorting.

13. In method chaining, what is a common practice to enhance clarity and debugging?
    - [x] Break long chains into multiple steps.
    - [ ] Use fewer methods in the chain.
    - [ ] Use only built-in methods.
    - [ ] Avoid chaining methods that return only primitive values.

14. What is a potential downside of using method chaining excessively in your code?
    - [ ] It makes the file size larger.
    - [ ] It prevents the use of comments.
    - [x] It can make the code harder to debug.
    - [ ] It makes the code run slower.

15. Which method would you use to determine if all elements in an array are strings?
    - [ ] `everyInstance()`
    - [x] `every()`
    - [ ] `filter()`
    - [ ] `some()`

16. What will be the value of `originalArray` after the following code is run?

    ```js
    const originalArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const filteredArray = originalArray.filter(item => item.id > 1);
    filteredArray[0].id = 4;
    ```

    - [ ] `[{ id: 1 }]`
    - [x] `[{ id: 1 }, { id: 4 }, { id: 3 }]`
    - [ ] `[{ id: 1 }, { id: 2 }, { id: 3 }]`
    - [ ] `[{ id: 4 }, { id: 2 }, { id: 3 }]`

17. What will be the value of `shortWords` after the following code is run?

    ```js
    const words = ['apple', 'banana', 'pear', 'kiwi'];
    const shortWords = words.filter(word => word.length <= 5);
    ```

    - [x] `['apple', 'pear', 'kiwi']`
    - [ ] `[]`
    - [ ] `['pear', 'kiwi']`
    - [ ] `['apple', 'banana']`

18. What is the purpose of providing an initial value as an argument to the `reduce()` method?
    - [ ] To limit the number of iterations.
    - [ ] To set the length of the array.
    - [x] To define the starting value for the accumulator.
    - [ ] To specify the return type of the function.

19. Can the map method be used on objects that are not arrays?
    - [ ] It depends on the JavaScript version.
    - [x] No, it is specifically designed for arrays.
    - [ ] Yes, it can be used on any object.
    - [ ] Yes, but only on objects with numeric properties.

20. What is the primary purpose of the map method in JavaScript?
    - [ ] To filter elements from an array and remove or add elements based on a condition.
    - [ ] To find a specific element in an array and return its index along with the element.
    - [x] To create a new array containing the results of calling a provided function on each element in the starting array.
    - [ ] To sort an array and return a new array while maintaining the original order.
