# JavaScript Variables and Data Types Quiz

1. Which of the following best describes JavaScript?
    - [x] A programming language used for web development.
    - [ ] A server-side programming language.
    - [ ] A markup language used to design websites.
    - [ ] A database management system.

2. Which of the following is NOT a JavaScript data type?
    - [ ] `Object`
    - [x] `Double`
    - [ ] `Undefined`
    - [ ] `Number`

3. Which of the following is NOT a valid JavaScript variable declaration?
    - [x] `public Int x;`
    - [ ] `const x = 0;`
    - [ ] `var x;`
    - [ ] `let x;`

4. Which of the following is a common naming convention for variables in JavaScript?
    - [ ] Lightning case.
    - [x] Camel case.
    - [ ] JavaScript case.
    - [ ] Giraffe case.

5. What is the difference between `let` and `const` variable declarations in JavaScript?
    - [x] `const` cannot be re-assigned or re-declared. `let` can be re-assigned, but not re-declared.
    - [ ] `const` can be re-assigned but not re-declared. `let` can be re-declared, but not re-assigned.
    - [ ] `const` can be re-assigned and re-declared. `let` cannot be re-assigned nor re-declared.
    - [ ] `const` cannot be re-assigned nor re-declared. `let` can be re-assigned and re-declared.

6. Why are strings considered immutable in JavaScript?
    - [ ] Strings can only be created using literals.
    - [x] Once a string is created, you cannot change its characters directly.
    - [ ] You cannot create strings using variables.
    - [ ] You can change strings, but only through global variables.

7. How would you print out the string `Hello, world!` in the console in JavaScript?
    - [ ] `alert("Hello, world");`
    - [x] `console.log("Hello, world!");`
    - [ ] `print("Hello, world!")`
    - [ ] `System.out.println("Hello, world!");`

8. What does the code below do?

    ```js
    let hello = "Hello";
    hello += " world";
    console.log(hello);
    ```

    - [ ] Combines `"Hello"` and `" world"` into a new string and prints it, but the value of `hello` remains `"Hello"`.
    - [ ] Prints out the number of characters in `Hello world` in the console.
    - [x] Combines the current value of `hello` with the string `" world"`, reassigns it to `hello`, and prints it to the console.
    - [ ] Reassigns `" world"` to the variable `hello`, and prints it out in the console.

9. Which JavaScript character is used to mark the end of a statement?
    - [ ] `,`
    - [ ] `:`
    - [ ] `.`
    - [x] `;`

10. Which of the following is a valid single line comment syntax in JavaScript?
    - [ ] `-- This is a single line comment`
    - [x] `// This is a single line comment`
    - [ ] `/* This is a single line comment */`
    - [ ] `# This is a single line comment`

11. Dynamic typing in JavaScript means that:
    - [x] JavaScript infers the type based on the value assigned to the variable.
    - [ ] You need to declare the data type of a variable before using it.
    - [ ] You cannot assign a value of one data type to a variable of a different type.
    - [ ] JavaScript performs type checking before execution, meaning type related errors will be thrown before the code is run.

12. Which of the following prints out the type of the variable `x` in the console?
    - [x] `console.log(typeof x);`
    - [ ] `console.log(x.type);`
    - [ ] `console.log(typeOf(x));`
    - [ ] `console.log(isNaN(x));`

13. What will be the output of `console.log(typeof null);`?
    - [ ] `"undefined"`
    - [ ] `"NaN"`
    - [x] `"object"`
    - [ ] `"null"`

14. Which of the following is a valid multi-line comment in JavaScript?
    - [ ] Case 1

        ```js
        '''
        This is a
        multi-line
        comment
        '''
        ```

    - [ ] Case 2

        ```js
        // This is a
        // multi-line
        // comment
        ```

    - [x] Case 3

        ```js
        /*
        This is a
        multi-line
        comment
        */
        ```

    - [ ] Case 4

        ```js
        <!--
        This is a
        multi-line
        comment
        -->
        ```

15. Which of the following declares a variable in JavaScript that cannot be changed?
    - [ ] var x = 0;
    - [ ] let x = 0;
    - [ ] final x = 0;
    - [x] const x = 0;

16. Which of the following is a valid variable name in JavaScript?
    - [ ] `!!dogs`
    - [x] `$number`
    - [ ] `tart@n`
    - [ ] `4cats`

17. Which of the following is NOT a valid string concatenation method in JavaScript?
    - [x] `console.log(string1 string2);`
    - [ ] `console.log(string1.concat(" ", string2));`
    - [ ] `console.log(string1 + " " + string2);`
    - [ ] `console.log("string1 " + string2);`

18. Which of the following variable names uses camel case correctly?
    - [ ] `a_long_variable_name`
    - [ ] `ALongVariableName`
    - [ ] `alongvariableName`
    - [x] `aLongVariableName`

19. Why is it beneficial to use semicolons explicitly even though JavaScript has Automatic Semicolon Insertion?
    - [ ] To maintain consistency with other programming languages.
    - [x] To improve code readability and reliability.
    - [ ] To increase the execution speed of the code.
    - [ ] To allow for better debugging and error tracing.

20. Which of the following is NOT a JavaScript data type?
    - [ ] `Null`
    - [ ] `Boolean`
    - [ ] `Symbol`
    - [x] `Float`
