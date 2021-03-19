# Wizeline Academy - 2021 React Bootcamp

Please refere to the following [GIST](https://gist.github.com/erickwize/d7311bfc972080c162c43cbb7dc80587) for further instructions

Code sandbox: https://codesandbox.io/s/core-concepts-and-styling-evtvz

# Mini-Challenge 2: Intro to Testing
## Answer the following questions first

1. Using `create-react-app`, what do we need to set up for testing?
    A: `create-react-app` comes with `Jest` and `react-testing-library` by default, but in order for `Jest` to locate them they need to have one of the following conventions:
      - Files with `.js` suffix in` __tests__` folders, files with `.test.js` or `.spec.js`.
    Jest can also be paired with other testing libraries/utilities like Enzyme but those must me installed using `yarn add` or `npm install`.

2. What components are worth to test in your development?
    A: In my opinion it would be components that have some kind of interaction that can be mimicked and function used.

3. Can you apply TDD once you already created components?
    A: Yes, the concept of TDD is to test first (create failing test) then make those test pass and finally refactor, so when adding new change to that component one can start using TDD, providing little by little more more of the TDD advantages.
     _TDD is a cycle that is best done in chunks._
