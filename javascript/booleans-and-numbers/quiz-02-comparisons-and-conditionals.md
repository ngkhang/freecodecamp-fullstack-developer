# JavaScript Comparisons and Conditionals Quiz

1. What's the result of the expression `undefined > 0`?
    - [ ] `true`
    - [ ] `undefined`
    - [x] `false`
    - [ ] `null`

2. Which logical operation does `||` represent?
    - [x] OR
    - [ ] AND
    - [ ] XOR
    - [ ] NOT

3. What's the output of the following code?

    ```js
    console.log(5 === 2 + 3 || 4 == 2);
    ```

    - [ ] `false`
    - [ ] `undefined`
    - [x] `true`
    - [ ] An error is raised.

4. What is a truthy and falsy value?
    - [ ] A value that's both `true` and `false`.
    - [ ] A value that changes depending on context.
    - [x] A value that is considered `true` or `false` when encountered in a Boolean context.
    - [ ] A value that functions differently than `true` or `false` value.

5. What's logged to the console from the code below?

    ```js
    if (1) {
        console.log("True!");
    }
    ```

    - [ ] An error is raised.
    - [ ] `false`
    - [ ] Nothing gets printed to the console.
    - [x] `True!`

6. What's the difference between `undefined` and `null`?
    - [x] Variables without a value are `undefined`, while `null` represents an intentional absence of an object value.
    - [ ] `null` is the implicit value assigned to variables and it can not be changed, while `undefined` is the explicit value assigned to variables.
    - [ ] `null` and `undefined` point to an out-of-range memory location and are inaccessible.
    - [ ] `null` is a global property, `undefined` is not.

7. What happens when you don't include `break` while implementing a `switch` statement?
    - [ ] The `switch` statement will stop abruptly.
    - [ ] The `switch` statement will throw an error after previous statement.
    - [ ] The `switch` statement will exit after the first match.
    - [x] The code continues to evaluate the following `case` statements, even after finding a match.

8. What is printed to the console from the code below?

    ```js
    const a = 2;
    if (1 == "1") {
        let b = 3;
        console.log(a + b);
    }
    console.log(b);
    ```

    - [ ] An error is raised.
    - [ ] _

        ```js
        5
        undefined
        ```

    - [ ] _

        ```js
        5
        3
        ```

    - [x] 5, and then an error is raised.

9. What will be the output of the following JavaScript code?

    ```js
    let vehicle = "car";

    switch (vehicle) {
    case "bike":
        console.log("Bikes are two-wheelers.");
        break;
    case "car":
        console.log("Some cars are 4x4.");
    case "truck":
        console.log("Trucks can carry heavy loads.");
        break;
    default:
        console.log("Unknown vehicle.");
    }
    ```

    - [ ] Unknown vehicle.
    - [x] _
        Some cars are 4x4.
        Trucks can carry heavy loads.
    - [ ] _
        Some cars are 4x4.
        Trucks can carry heavy loads.
        Unknown vehicle.
    - [ ] Some cars are 4x4.

10. What is printed to the console with code below?

    ```js
    let x = 5;
    if (x > 1 && x < 10) {
    console.log("x is between 1 and 10");
    } else {
    console.log("x is not between 1 and 10");
    }
    ```

    - [x] `x is between 1 and 10`
    - [ ] `x is not between 1 and 10`
    - [ ] An error is raised.
    - [ ] Nothing is printed.
