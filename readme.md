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

## Generate basic Jest Configuration file

- Above jest was smart enought to detect on which file it should run the tests upon
- `npm i jest -g` (install jest globally)
- `jest --init` <-- Create jest.config.js file in the root directory

---

### Matchers

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
