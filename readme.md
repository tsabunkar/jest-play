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

### Basic Setup

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
- xit() or test.only() <-- Skip this test case
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

## Setup and Teardown

- while writing tests you need to have some task before test run and after test run
- Jest provides helper functions to handle them
- Repeating Setup For Many Tests
  - some work you need to do repeatedly for many tests, you can use `beforeEach` and `afterEach`
  - BeforeEach:
  ```
  beforeEach(() => {
  // some task repeatedly performed before every it()/test()
  });
  ```
  AfterEach:
  ```
  afterEach(() => {
    // some task repeatedly performed after every it()/test()
  });
  ```
  - beforeEach and afterEach can handle asynchronous code i.e- they can either take a `done` parameter or `return a promise`
- One Time Setup:
  - some work you only need to do setup once, at the beginning of a file, you can use `beforeAll` and `afterAll`
  - BeforeAll:
  ```
  beforeAll(() => {
  // some task repeatedly performed before only one time per file
  });
  ```
  AfterAll:
  ```
  afterAll(() => {
    // some task repeatedly performed after only one time per file
  });
  ```
- Scoping:

  - You group tests/it block together using a describe block
  - When it() are inside a describe block, the before and after blocks only apply to the tests/it within that describe block.
  - ```
     // Applies to all tests in this file
     beforeEach(() => {});

     test('', () => {
     expect().toBeTruthy();
     });

     test('', () => {
     expect().toBeTruthy();
     });

     describe('', () => {
     // Applies only to tests in this describe block
     beforeEach(() => { });

     test('', () => { });

     test('', () => { });
     });
    ```

---

## Mock Functions

- Interchangeably called- Stub, Fake or Mock
- Mock functions allow you to test the links between code by erasing the actual implementation of a function.
- Other features of Mock functions:
  - Mock actual implementation of a function (both- sync/async functions)
  - Mock calls to the function (also parameters passed in those calls)
  - Mocking return value of the function
  - capturing instances of constructor functions
- In Jest there are 2 ways to mock functions:
  - Creating a mock function which would be fake implementation of actual function
  - Creating a Manual mock to override a module dependency
- Using a mock function
  - Create a mock function -> `jest.fn()`
  - all mocks have special property called --> `.mock`
  - This .mock property :
    - It has info about- how the function has been called and what the function had returned.
    - It also tracks the value of this for each call
  - Mock Return Values:
    - Fake return values for mocked function
  - Mocking 3rd party Modules
    - If we have backend API Call/ DB Call --> We should **not** hit/call the API/DB call but rather mock it!! (Since we are doing unit testing not E2E Testing)
    - Ex- Can use `jest.mock(...)` to automatically mock the axios get API Call
    - Once module is mocked, we can provide a mockResolvedValue for .get() of Axios thus -> axios.get('') to return a fake response.
  - Mocking Implementation
    - Provides ability to replace the implementation of a mock function
    - `jest.fn` or `mockImplementationOnce`
