# JavaScript Objects Quiz

1. Which of the following does NOT describe an object in JavaScript?
    - [x] A primitive data type.
    - [ ] A container for properties and methods.
    - [ ] A collection of key-value pairs.
    - [ ] A non-primitive data type.

2. Which of the following object definitions is invalid?
    - [ ] `const book = { "pages": 255 };`
    - [x] `const product = { color: blue };`
    - [ ] `const person = { "name": "nora" };`
    - [ ] `const car = { year: 2025 };`

3. How can you access the `job` property of this `person` object?

    ```js
    let person = { job: "Software Developer" };
    ```

    - [ ] `person[job]`
    - [ ] `person#job`
    - [ ] `person -> job`
    - [x] `person.job`

4. How can you access the `street` property of the `person` object below?

    ```js
    const person = {
        address: {
            street: "sample-street"
        }
    };
    ```

    - [x] `person["address"]["street"]`
    - [ ] `person[address.street]`
    - [ ] `person -> address -> street`
    - [ ] `person#address#street`

5. Which of these property keys can only be accessed using bracket notation?
    - [ ] A property key that is nested within multiple levels of an object.
    - [ ] A property key that is known and static.
    - [ ] A property key that might not exist in the object.
    - [x] A property key that is dynamic.

6. Which of the following correctly uses destructuring to access the `name` property of the `person` object below?

    ```js
    const person = { name: "John" }
    ```

    - [ ] `const name = person["name"];`
    - [ ] `const { ...name } = person;`
    - [ ] `const name = person.name;`
    - [x] `const { name } = person;`

7. Which of the following correctly uses destructuring to access the `flour` property of the `recipe` object below?

    ```js
    const recipe = {
        ingredients: {
            flour: "2 cups",
            sugar: "1 cup"
        }
    };
    ```

    - [ ] `const flour = recipe["ingredients"]["flour"];`
    - [x] `const { ingredients: { flour } } = recipe;`
    - [ ] `const { ingredients: flour } = recipe;`
    - [ ] `const flour = recipe.ingredients.flour;`

8. How can you assign a default value to a property key when using destructuring in JavaScript?
    - [ ] `const key = object.key || "defaultValue";`
    - [x] `const { key = "defaultValue" } = object;`
    - [ ] `const { key: "defaultValue" } = object;`
    - [ ] `const key = object.key && "defaultValue";`

9. How can you check if a `car` object has a `year` property?
    - [ ] `car.hasProperty("year");`
    - [x] `car.hasOwnProperty("year");`
    - [ ] `year.hasProperty("car");`
    - [ ] `car.hasOwnProperty(year);`

10. What is an object method?
    - [ ] A string associated with an object.
    - [ ] A number associated with an object.
    - [ ] An array associated with an object.
    - [x] A function associated with an object.

11. How can you call the `add` method of this `calculator` object to add the numbers 10 and 7?

    ```js
    const calculator = {
        add: function(a, b) {
            return a + b;
        }
    };
    ```

    - [x] `calculator.add(10, 7);`
    - [ ] `calculator.call(add(10, 7));`
    - [ ] `add.calculator(10, 7);`
    - [ ] `calculator#add(10, 7);`

12. Which operator removes a property from an object?
    - [x] `delete`
    - [ ] `remove`
    - [ ] `discard`
    - [ ] `erase`

13. How can you check if a `score` property exists in a `player` object?
    - [ ] `player in "score"`
    - [ ] `player in score`
    - [x] `"score" in player`
    - [ ] `score in player`

14. How can you create a new empty object in JavaScript?
    - [ ] `object() new`
    - [ ] `Object() new`
    - [x] `new Object()`
    - [ ] `new object()`

15. What is the correct syntax for using optional chaining in JavaScript?
    - [x] `object?.key`
    - [ ] `object?key`
    - [ ] `object.["key"]`
    - [ ] `object.?key`

16. What is optional chaining used for in JavaScript?
    - [ ] Used to write more concise code by chaining multiple method calls together in a single statement.
    - [x] Used to safely access properties of an object that might be `null` or `undefined`.
    - [ ] Used to define optional methods within an object that may or may not be called.
    - [ ] Used to define variables with default values.

17. What method is used to convert a JavaScript object into a JSON string?
    - [ ] `JSON.toObject()`
    - [ ] `Object.toJSON()`
    - [x] `JSON.stringify()`
    - [ ] `Stringify.toJSON()`

18. What method converts a JSON string back into a JavaScript object?
    - [ ] `JSON.object()`
    - [ ] `JSON.toObject()`
    - [ ] `JSON.convert()`
    - [x] `JSON.parse()`

19. Which one of these options accesses the `color` property of a `toy` object using bracket notation?
    - [x] `toy["color"]`
    - [ ] `color[toy]`
    - [ ] `toy.color`
    - [ ] `toy[color]`

20. How can you access the home phone of this learner object in JavaScript using dot notation?

    ```js
    const learner = {
        name: "Nora",
        age: 45,
        contact: {
            email: "nora@email.com",
            phone: {
                home: "123-456-7890",
                work: "098-765-4321"
            }
        }
    };
    ```

    - [ ] `learner.contact.home`
    - [ ] `learner.email.work`
    - [x] `learner.contact.phone.home`
    - [ ] `learner.name.phone.home`
