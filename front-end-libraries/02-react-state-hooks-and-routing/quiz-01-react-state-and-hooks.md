# React State and Hooks Quiz

1. Which of the following is the correct way to add a click event to a button in React?
    - [x] `<button onClick={handleLoginClick} />`
    - [ ] `<button onClick={{ handleLoginClick }} />`
    - [ ] `<button onClick={handleLoginClick()} />`
    - [ ] `<button onclick={handleLoginClick} />`

2. What is a React Synthetic Event?
    - [ ] A type of JSX element for `inputs` and `submit` events only.
    - [ ] A type of JSX element for `submit` events only.
    - [ ] A way to alter the bubbling phase of event propagation to be more user friendly.
    - [x] A wrapper around native events like `click` and `submit` events.

3. Which of the following is a common prefix used for naming event handler functions?
    - [ ] isHandling
    - [ ] hasHandled
    - [ ] handling
    - [x] handle

4. What are the three major stages in React's rendering?
    - [x] Triggering, rendering and committing.
    - [ ] Mounting, updating and unmounting.
    - [ ] Fetching, decoding and execution.
    - [ ] Handshake, loading and hydration.

5. Which of the following is the correct way to work with the `useState` hook?
    - [ ] `const <count, setCount> = useState(0);`
    - [x] `const [count, setCount] = useState(0);`
    - [ ] `const count, setCount = useState(0);`
    - [ ] `const [count, setCount] = useState<0>;`

6. Which of the following is NOT a valid attribute used for handling React events?
    - [ ] `onClick`
    - [ ] `onChange`
    - [x] `onHandle`
    - [ ] `onSubmit`

7. Which of the following is the correct way to update array state?
    `const [certificates, setCertificates] = useState([]);`
    - [ ] `setCertificates.push("Front End");`
    - [ ] `setCertificates().append("Front End");`
    - [x] `setCertificates(previousItems => [...previousItems, "Front End"]);`
    - [ ] `setCertificates(previousItems => previousItems, "Front End");`

8. What is wrong with this function?

    ```jsx
    function updateSpaceship() {
    setSpaceship(previousState => ({
        name: "Discovery"
    }));
    }
    ```

    - [ ] Updating a `useState` variable is not allowed inside a nested function.
    - [ ] `previousState` needs to be surrounded by parenthesis.
    - [ ] Arrow functions should not be used inside a state setter function.
    - [x] `previousState` must be spread before `name` to ensure any other properties are not overwritten.

9. Which of the following is the correct way to update state to remove items from an array?
    - [ ] Case 1

        ```jsx
        const removeItem = (id) => {
            setItems((prevItems) => prevItems.reduce((item) => item.id));
        };
        ```

    - [ ] Case 2

        ```jsx
        const removeItem = (id) => {
            setItems(() => delete item.id !== id);
        };
        ```

    - [ ] Case 3

        ```jsx
        const removeItem = (id) => {
            setItems((prevItems) => prevItems.map((item) => item.id !== id));
        };
        ```

    - [x] Case 4

        ```jsx
        const removeItem = (id) => {
            setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        };
        ```

10. What is the `ref` attribute typically used for in React?
    - [ ] It is used to remove DOM nodes.
    - [x] It is used to access a DOM node.
    - [ ] It is used to audit for performance issues in react components.
    - [ ] It is used to audit for accessibility issues in react components.

11. Which of the following is the correct way to access the current value for a `ref`?

    - [ ] Case 1

        ```jsx
        const inputRef = useRef(null);
        inputRef.val
        ```

    - [ ] Case 2

        ```jsx
        const inputRef = useRef(null);
        inputRef.initial
        ```

    - [x] Case 3

        ```jsx
        const inputRef = useRef(null);
        inputRef.current
        ```

    - [ ] Case 4

        ```jsx
        const inputRef = useRef(null);
        inputRef.curr
        ```

12. How many times will this message be logged to the console?

    ```jsx
    useEffect(() => {
        console.log("Nice work!!");
    }, []);
    ```

    - [x] Only once on initial render.
    - [ ] None as the dependency array is empty.
    - [ ] Twice.
    - [ ] Three times.

13. What are React custom hooks typically used for?
    - [ ] They replace life cycle methods from previous versions of React.
    - [ ] They are not typically used, built-in hooks are preferred.
    - [x] They are helpful for reusing stateful logic across components.
    - [ ] They are used to execute an app's most complex functionality.

14. How many times will this message get logged to the console?

    ```jsx
    useEffect(() => {
        console.log("I love freeCodeCamp!");
    });
    ```

    - [ ] It will only get logged once.
    - [ ] It will be logged twice.
    - [x] It will be logged each time the component renders.
    - [ ] It will be logged anytime a form is submitted or a click event happens.

15. Which of the following is the correct way to prevent a browser refresh for an `onSubmit` event?
    - [ ] Case 1

        ```jsx
        function handleSubmit(event) {
            event.defaultPrevent();
            console.log("Form submitted!");
        }

        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button>Submit</button>
        </form>;
        ```

    - [ ] Case 2

        ```jsx
        function handleSubmit(event) {
            event.Default();
            console.log("Form submitted!");
        }

        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button>Submit</button>
        </form>;
        ```

    - [x] Case 3

        ```jsx
        function handleSubmit(event) {
            event.preventDefault();
            console.log("Form submitted!");
        }

        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button>Submit</button>
        </form>;
        ```

    - [ ] Case 4

        ```jsx
        function handleSubmit(event) {
            event.prevent();
            console.log("Form submitted!");
        }

        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button>Submit</button>
        </form>;
        ```

16. Which of the following hooks is typically used to fetch data?
    - [ ] `useDebounce`
    - [ ] `useReducer`
    - [x] `useEffect`
    - [ ] `useState`

17. Which of the following is NOT a valid property on the native Event object?
    - [ ] `target`
    - [ ] `currentTarget`
    - [x] `prop`
    - [ ] `type`

18. Which of the following rendering stages occurs when React detects that something has changed and the user interface (UI) might need to be updated?
    - [ ] setter
    - [ ] commit
    - [x] trigger
    - [ ] loop

19. Which of the following stages refers to when React takes the prepared changes from the virtual DOM and applies them to the real DOM?
    - [ ] setter
    - [x] commit
    - [ ] trigger
    - [ ] render

20. What is the purpose of the dependencies in a useEffect?

    ```jsx
    useEffect(() => {
        // Your side effect logic (usually a function) goes here
    }, [dependencies]);
    ```

    - [ ] The optional `dependencies` argument is used to prevent the effect from running.
    - [ ] The optional `dependencies` argument makes the effect run on an infinite loop.
    - [ ] The optional `dependencies` argument does not effect anything dealing with the `useEffect`.
    - [x] The optional `dependencies` argument controls when the effect runs.
