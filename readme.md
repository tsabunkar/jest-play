# Jest

- https://jestjs.io/
- JavaScript Testing Framework
- works with projects using: Babel, TypeScript, Node, React, Angular, Vue
- Features:
  - CODE COVERAGE
  - EASY MOCKING
  - GREAT EXCEPTIONS
  - ALL IN ONE- TEST FRAMEWORK (like- mocha), BDD / TDD assertion library (like Chai), TEST RUNNER, CODE COVERAGE (like- Istanbul)

## Installation

- Install any test framework as devDependency - `npm install --save-dev jest`
- Add scripts as -> `"test": "jest"`
- `$ npm run test` <-- Smart enough to find all the .`spec.*` or `.test.*` files and run the test cases
- `$ npm run test:watch` <-- To run in watch mode

## Generate basic Jest Configuration file

- Above jest was smart enought to detect on which file it should run the tests upon
- `npm i jest -g` (install jest globally)
- `jest --init` <-- Create jest.config.js file in the root directory

### Basic

- Test are written like a story
- each test file can be called -> `*.test.*` or `*.spec.*`
- ```
  descibe('', () => {
      it('', () => {})
      it('', () => {})
      it('', () => {})
  })
  ```
- it() block can be also test()
- xit() <-- Skip this test case
- fit() <-- Focus this particular test case
- we can also do on descirbe block as fdescribe() or xdescribe()

---

### Matchers / Expect

- "matchers" lets you --> test values in different ways
- Matcher --> expect()
- Complete list of matchers: https://jestjs.io/docs/expect

### Common Matchers : `toBe()` <-- Excat Equality Matcher

- ```spec.js
   test('two plus two is four', () => {
       expect(sum(2, 2)).toBe(4);
       });
  ```
- expect(sum(2 , 2)) return an "expectation" object
- on this expectation object you use matcher like - `.toBe(4)`
- `expect(ACTUAL_VALUE).toBe(EXPECTED_VALUE)` <-- (What that sum() function return is ACTUAL/RECEIVED VALUE which we are expecting tobe similar as EXPECTED VALUE)
- toEqual():
  - check the exact value of an object or array
  - recursively checks every field of an object or array.
- If you want to check/match the opposite value use- `not` before the matcher
- **NOTE**: Whenever you test a function always test happy scenario (Green) and Error scenario (Red)

### Truthiness

- In tests, you sometimes need to distinguish between undefined, null, and false
- toBeNull matches only null
- toBeUndefined matches only undefined
- toBeDefined is the opposite of toBeUndefined
- toBeTruthy matches anything that an if statement treats as true
- toBeFalsy matches anything that an if statement treats as false

### Numbers

- numbers have matcher equivalents
- NOTE: toBe and toEqual are equivalent/same for numbers
- floating point equality, use toBeCloseTo instead of toEqual

### Strings

- toMatch() <-- check strings against regular expressions

### Arrays and iterables

- toContain() <-- check if an array or iterable contains a particular item

### Exceptions

- toThrow() <-- check whether a particular function throws an error

---

# Testing Asynchronous Code

- When you have code that runs asynchronously, Jest needs to know when the code it is testing has completed
- Callbacks:
  - A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
  - callbacks are often used with asynchronous functions, where one function has to wait for another function (like waiting for a file to load).
  - example of callback in js - setTimeout(), read/write to a file, etc
- Promises:
  - contains both the producing code and calls to the consuming code
  - Promise object can be:
    - Pending
    - Fulfilled
    - Rejected
  - Promise object supports two properties: state and result.
  - If Promise object is "pending" (working), the result is undefined
  - If Promise object is "fulfilled", the result is a value.
  - If Promise object is "rejected", the result is an error object.
  - Promise.then() takes two arguments, a callback for success and another for failure. Both are optional
- Async/Await
  - keyword `async` before a function makes the function **return** a promise.
  -
  ```js
  async function foo() {
    return 'Hello World';
  }
  ```
  but same function with async
  ```js
  async function foo() {
    return Promise.resolve('Hello World');
  }
  ```
  - keyword `await` before a function makes the function **wait** for a promise
  -
- `expect.assertions` is used to verify that a certain number of assertions are called.
