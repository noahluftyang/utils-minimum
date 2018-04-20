module.exports = {
  rules: {
    /**
     * Possible Errors
     */
    // Disallow constant expressions in conditions
    'no-constant-condition': true,
    // Disallow control characters in regular expressions
    'no-control-regex': true,
    // NOTE: deprecated
    // 'no-duplicate-case': true,
    // Disallow empty character classes in regular expressions
    'no-empty-character-class': true,
    // Disallow reassigning exceptions in catch clauses
    'no-ex-assign': true,
    // Disallow unnecessary boolean casts
    'no-extra-boolean-cast': true,
    // disallow unnecessary semicolons
    'no-extra-semi': true,
    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': [true, 'functions'],
    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': true,
    // NOTE: deprecated
    // 'ter-no-irregular-whitespace': true,
    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': true,
    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': true,
    // enforce valid JSDoc comments
    'valid-jsdoc': null,
    // NOTE: deprecated
    // 'valid-typeof': true,

    /**
     * Best Practices
     */
    // disallow use of multiple spaces
    'no-multi-spaces': true,
    // disallow the use of __proto__ property
    // 'ter-no-proto': true,
    // disallow use of javascript: urls.
    // 'ter-no-script-url': true,
    // disallow comparisons where both sides are exactly the same
    // 'ter-no-self-compare': true,

    /**
     * Strict Mode
     */

    /**
     * Variables
     */

    /**
     * Node.js and CommonJS
     */
    // enforce error handling in callbacks
    'handle-callback-err': true,

    /**
     * Stylistic Issues
     */
    // Enforce consistent spacing inside array brackets
    'array-bracket-spacing': [true, 'never'],
    // Enforce consistent spacing inside single-line blocks
    'block-spacing': [true, 'always'],
    // Enforce consistent brace style for blocks
    'brace-style': [true, '1tbs', { allowSingleLine: true }],
    // Enforce consistent spacing inside computed property brackets
    'ter-computed-property-spacing': [true, 'always'],
    // Disallow spacing between function identifiers and their invocations
    'ter-func-call-spacing': [true, 'never'],
    // Enforce consistent indentation
    'ter-indent': [
      true,
      2,
      {
        SwitchCase: 1,
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1
      }
    ],
    // Disallow mixed spaces and tabs for indentation
    'ter-no-mixed-spaces-and-tabs': 'error',
    // enforce a maximum line length
    'ter-max-len': null,
    // require or disallow an empty newline after variable declarations
    'ter-newline-after-var': null,
    // disallow mixed spaces and tabs for indentation
    'ter-no-mixed-spaces-and-tabs': [true, { type: 'spaces' }],
    // Enforce consistent spacing inside braces
    'object-curly-spacing': [true, 'always'],
    // enforce padding within blocks
    'ter-padded-blocks': true,
    // enforce sorting import declarations within module
    'sort-imports': null,
    // require or disallow spaces inside parentheses
    'space-in-parens': [true, 'never'],
    // Disallow all tabs
    'ter-no-tabs': true,

    /**
     * ECMAScript 6
     */
    // require braces in arrow function body
    'ter-arrow-body-style': [true, 'as-needed', { requireReturnForObjectLiteral: true }],
    // require parens in arrow function arguments
    'ter-arrow-parens': [true, 'as-needed'],
    // require space before/after arrow function's arrow
    'ter-arrow-spacing': [true, { before: true, after: true }],
    // require arrow functions as callbacks
    'ter-prefer-arrow-callback': true
  }
};
