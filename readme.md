# Jest

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
