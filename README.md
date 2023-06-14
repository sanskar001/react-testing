# React testing

## Jest

Jest is a javascript testing framework.

Jest is a test runner that finds tests, runs the test, determines whether the tests passed or failed and reports it back in a human readable manner.

## React Testing Library (RTL)

Javascript testing utitlity that provides virtual DOM for testing react components.

React Testing library provides a virtual DOM which we can use to interact with and verify the behaviour of a react component.

Testing Library is infact a family of packages which helps test UI components.

The core library is called DOM Testing library and RTL is simply wrapper around this core library to test React applications in a easier way.

## Types of Test

### 1. Unit Test

Focus is on testing the individual building blocks of an application such as a class or function or a component.

Each unit or building block is tested in isolation, independent of other units.

Dependencies are mocked.

Run in a short amount of time and make it very easy to pinpoint failure.

Relatively easier to write and maintain.

### 2. Integration Test

Focus is on testinf a combination of units and ensuring they work together.

Take longer than unit tests.

### 3. E2E TEst

End to End test

Focus is on testing the entire application flow and ensuring it works as designed from start to finish.

Involves in a real UI, a real backend database, real services etc.

Take the longest as thet cover the most amount of code.

Have a cost implication as you interact with real APIs that may charge based on the number of requests.

## Test Driven Development (TDD)

Test driven development is a software development process where you write tests before writing the software code.

Once the tests have been written tou then write the code to ensure the tests pass.

1. Create tests that verify the functionality of a specify feature.
2. Write software code thet will run the tests successfully when re-execute.
3. Refactor the code for optimization while ensuring the tests continue to pass.

Also called red-green testing as all tests go from a red failed state to a green passed state.
