module.exports = {
  parserOptions: {
    ecmaVersion: 2018
  },
  // parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  rules: {
    /* 
     * Possible Errors
     */
    // enforce “for” loop update clause moving the counter in the right direction.
    'for-direction': 'error',
    // Enforce a return statement is present in getters
    'getter-return': ['error', { allowImplicit: true }],
    // disallow await inside of loops
    'no-await-in-loop': 'off',
    // Disallow comparing against -0
    'no-compare-neg-zero': 'error',
    // Disallow assignments in test conditions except in parentheses
    'no-cond-assign': 'error',
    // Disallow the use of console
    'no-console': 'warn',
    // Disallow constant expressions in conditions
    'no-constant-condition': 'error',
    // Disallow control characters in regular expressions
    'no-control-regex': 'error',
    // Disallow the use of debugger
    'no-debugger': 'error',
    // Disallow duplicate arguments in function definitions
    'no-dupe-args': 'error',
    // Disallow duplicate keys in object literals
    'no-dupe-keys': 'error',
    // Disallow duplicate cases in case statements
    'no-duplicate-case': 'error',
    // Disallow empty block statements
    'no-empty': 'error',
    // Disallow empty character classes in regular expressions
    'no-empty-character-class': 'error',
    // Disallow reassigning exceptions in catch clauses
    'no-ex-assign': 'error',
    // Disallow unnecessary boolean casts
    'no-extra-boolean-cast': 'error',
    // disallow unnecessary parentheses
    'no-extra-parens': 'error',
    // disallow unnecessary semicolons
    'no-extra-semi': 'error',
    // disallow reassigning function declarations
    'no-func-assign': 'error',
    // disallow variable or function declarations in nested blocks
    'no-inner-declarations': 'error',
    // disallow invalid regular expression strings in RegExp constructors
    'no-invalid-regexp': 'error',
    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 'error',
    // disallow calling global object properties as functions
    'no-obj-calls': 'error',
    // disallow calling some Object.prototype methods directly on objects
    'no-prototype-builtins': 'error',
    // disallow multiple spaces in regular expressions
    'no-regex-spaces': 'error',
    // disallow sparse arrays
    'no-sparse-arrays': 'error',
    // disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'error',
    // disallow confusing multiline expressions
    'no-unexpected-multiline': 'error',
    // disallow unreachable code after return, throw, continue, and break statements
    'no-unreachable': 'error',
    // disallow control flow statements in finally blocks
    'no-unsafe-finally': 'error',
    // disallow negating the left operand of relational operators
    'no-unsafe-negation': 'error',
    // require calls to isNaN() when checking for NaN
    'use-isnan': 'error',
    // enforce valid JSDoc comments
    'valid-jsdoc': 'off',
    // enforce comparing typeof expressions against valid strings
    'valid-typeof': 'error',

    /*
     * Best Practices
     */

    /*
     * Variables
     */

    /*
     * Node.js and CommonJS
     */

    /*
     * Stylistic Issues
     */

    /*
     * ECMAScript 6
     */
  }
}