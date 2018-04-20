module.exports = {
  extends: 'tslint-eslint-rules',
  rules: {
    /**
     * Possible Errors
     */
    // Disallow constant expressions in conditions
    'no-constant-condition': 'error',
    // Disallow control characters in regular expressions
    'no-control-regex': 'error',
    // Disallow duplicate cases in case statements
    'no-duplicate-case': 'error',
    // Disallow empty character classes in regular expressions
    'no-empty-character-class': 'error',
    // Disallow reassigning exceptions in catch clauses
    'no-ex-assign': 'error',
    // Disallow unnecessary boolean casts
    'no-extra-boolean-cast': 'error',

    /**
     * Stylistic Issues
     */
    // Enforce consistent spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],
    // Enforce consistent spacing inside single-line blocks
    'block-spacing': 'error',
    // Enforce consistent brace style for blocks
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // Enforce consistent spacing inside computed property brackets
    'ter-computed-property-spacing': 'error',
    // Disallow spacing between function identifiers and their invocations
    'ter-func-call-spacing': ['error', 'never'],
    // Enforce consistent indentation
    // TODO: Apply more options
    'ter-indent': [
      'error',
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
    // Disallow all tabs
    'ter-no-tabs': 'error',
    // Enforce consistent spacing inside braces
    'object-curly-spacing': ['error', 'always'],
    // Disallow padding within blocks
    'ter-padded-blocks': ['error', 'never']
  }
};
