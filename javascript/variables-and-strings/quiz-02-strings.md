# JavaScript Strings Quiz

1. What is the return value for the `includes()` method?
    - [ ] If the substring is found within the string, the method returns the string. Otherwise, it returns `undefined`.
    - [ ] If the substring is found within the string, the method returns `true`. Otherwise, it returns an empty string.
    - [ ] If the substring is found within the string, the method returns the string. Otherwise, it returns `null`.
    - [x] If the substring is found within the string, the method returns `true`. Otherwise, it returns `false`.

2. Which option demonstrates string interpolation?
    - [ ] \`Hello, {user}!\`
    - [ ] "Hello, $user!"
    - [ ] "Hello, " + user + "!"
    - [x] \`Hello, ${user}!\`

3. Which of the following options is the newline character?
    - [x] \n
    - [ ] \newline
    - [ ] \new
    - [ ] \line

4. Which of the following statements is correct about strings?
    - [ ] Strings are mutable and can be changed after they are created.
    - [ ] Strings are non primitive data types.
    - [ ] Strings can only be created using single quotes.
    - [x] Strings are immutable.

5. What does ASCII stand for?
    - [x] American Standard Code for Information Interchange
    - [ ] Advanced Systematic Code for Internal Interchange
    - [ ] Automatic Standard Code for Internal Information
    - [ ] American Standard Code for Internet Information

6. Which of the following methods extracts a portion of a string and returns a new string?
    - [ ] `trim()`
    - [ ] `prompt()`
    - [ ] `indexOf`()
    - [x] `slice()`

7. What is the purpose of the `prompt()` method?
    - [ ] It displays a confirmation box with a message.
    - [ ] It displays an alert box with a message.
    - [x] It displays a dialog box that waits for the user input.
    - [ ] It displays a message in the console.

8. Which of the following is the correct way to access the third character of a string?
    - [x] Case 1

        ```js
        const developer = "Jessica";
        developer[2];
        ```

    - [ ] Case 2

        ```js
        const developer = "Jessica";
        developer[0];
        ```

    - [ ] Case 3

        ```js
        const developer = "Jessica";
        developer[3];
        ```

    - [ ] Case 4

        ```js
        const developer = "Jessica";
        developer[-1];
        ```

9. How can you obtain the ASCII value of the first character in the string `"hello"`?
    - [x] `"hello".charCodeAt(0)`
    - [ ] `"hello".getCharIndex(0)`
    - [ ] `"hello".codeAt(0)`
    - [ ] `"hello".charCode(0)`

10. Which method can you use to obtain the character corresponding to an ASCII value?
    - [ ] `toCode()`
    - [ ] `toASCII()`
    - [ ] `toChar()`
    - [x] `fromCharCode()`

11. Which of the following `indexOf` examples will log `-1` to the console?

    - [ ] Case 1

        ```js
        const organization = "freeCodeCamp";
        console.log(organization.indexOf("C"));
        ```

    - [x] Case 2

        ```js
        const organization = "freeCodeCamp";
        console.log(organization.indexOf("c"));
        ```

    - [ ] Case 3

        ```js
        const organization = "freeCodeCamp";
        console.log(organization.indexOf("f"));
        ```

    - [ ] Case 4

        ```js
        const organization = "freeCodeCamp";
        console.log(organization.indexOf("e"));
        ```

12. How can you check if the string `"JavaScript"` contains `"Script"`?
    - [x] `"JavaScript".includes("Script")`
    - [ ] `"JavaScript".exists("Script")`
    - [ ] `"JavaScript".contains("Script")`
    - [ ] `"JavaScript".has("Script")`

13. Which of the following extracts the substring `"Script"` from the string `"JavaScript"`?
    - [ ] `"JavaScript".find(5)`
    - [ ] `"JavaScript".cut(5)`
    - [x] `"JavaScript".slice(4)`
    - [ ] `"JavaScript".extract(4)`

14. How do you convert the string `"JavaScript"` to uppercase?
    - [ ] `"JavaScript".toUpper()`
    - [ ] `"JavaScript".convertUpper()`
    - [x] `"JavaScript".toUpperCase()`
    - [ ] `"JavaScript".upper()`

15. How do you convert the string `"JavaScript"` to lowercase?
    - [ ] `"JavaScript".lower()`
    - [ ] `"JavaScript".toLower()`
    - [x] `"JavaScript".toLowerCase()`
    - [ ] `"JavaScript".convertLower()`

16. Which of the following will replace `"dogs"` with `"cats"` in the string `"I love dogs"`.
    - [ ] `"I love dogs".slice("dogs", "cats")`
    - [x] `"I love dogs".replace("dogs", "cats")`
    - [ ] `"I love dogs".find("dogs", "cats")`
    - [ ] `"I love dogs".replaceWith("dogs", "cats")`

17. Which method is used to repeat a string a specified number of times?
    - [x] `repeat()`
    - [ ] `repeatTimes()`
    - [ ] `times()`
    - [ ] `repeatNumber()`

18. What will the following code return: `"abc".repeat(3)`?
    - [ ] It will throw an error.
    - [x] "abcabcabc"
    - [ ] "abcabc"
    - [ ] "abcabcabcabc"

19. Which method will remove whitespace from the beginning and end of a string?
    - [ ] `strip()`
    - [x] `trim()`
    - [ ] `removeWhitespace()`
    - [ ] `trimWhitespace()`

20. Which of the following is the correct syntax for escaping quotes?
    - [ ] `"She said, ."Hello!.""`
    - [ ] `"She said, //"Hello!//""`
    - [x] `"She said, \"Hello!\""`
    - [ ] `"She said, ?"Hello!?""`
