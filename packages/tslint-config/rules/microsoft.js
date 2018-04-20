module.exports = {
  rules: {
    // The name of the exported module must match the filename of the source file.
    'export-name': false,
    // Applies a naming convention to function names and method names.
    'function-name': false,
    // The name of the imported module must match the name of the thing being imported.
    'import-name': false,
    // Do not use insecure sources for random bytes. Use a secure random number generator instead.
    'insecure-random': true,
    // When a JQuery Deferred instance is created, then either reject() or resolve() must be called on it within all code branches in the scope.
    'jquery-deferred-must-complete': true,
    // Avoid long functions.
    'max-func-body-length': false,
    // All files must have a top level JSDoc comment.
    'missing-jsdoc': false,
    // NOTE: deprecated
    // 'missing-optional-annotation': true,
    // Avoid using model.get('x') and model.set('x', value) Backbone accessors outside of the owning model.
    'no-backbone-get-set-outside-model': false,
    // Do not use banned terms: caller, callee, eval, arguments.
    'no-banned-terms': true,
    // Do not use constant expressions in conditions.
    'no-constant-condition': false,
    // Do not use control characters in regular expressions.
    'no-control-regex': true,
    // Do not use cookies
    'no-cookies': true,
    // Do not delete expressions.
    'no-delete-expression': true,
    // Do not disable auto-sanitization of HTML because this opens up your page to an XSS attack.
    'no-disable-auto-sanitization': true,
    // Do not write to document.domain.
    'no-document-domain': true,
    // Do not use document.write
    'no-document-write': true,
    // NOTE: deprecated
    // 'no-duplicate-case': true,
    // 'no-duplicate-parameter-names': true,
    // 'no-empty-interfaces': true,
    // Avoid an empty line after an opening brace.
    'no-empty-line-after-opening-brace': true,
    // Do not use the execScript functions
    'no-exec-script': true,
    // Avoid use of for-in statements.
    'no-for-in': true,
    // Do not use the version of the Function constructor that accepts a string argument to define the body of the function
    'no-function-constructor-with-string-args': true,
    // Do not use function expressions; use arrow functions (lambdas) instead.
    'no-function-expression': true,
    // Do not use strings that start with 'http:'. URL strings should start with 'https:'.
    'no-http-string': {
      options: true,
      severity: 'warning'
    },
    // Avoid use of increment and decrement operators particularly as part of complicated expressions
    'no-increment-decrement': true,
    // Do not write values to innerHTML, outerHTML, or set HTML using the JQuery html() function.
    'no-inner-html': true,
    // Do not use invalid regular expression strings in the RegExp constructor.
    'no-invalid-regexp': true,
    // Do not create HTML elements using JQuery and string concatenation.
    'no-jquery-raw-elements': true,
    // NOTE: deprecated
    // 'no-missing-visibility-modifiers': true,
    // Do not declare multiline strings
    'no-multiline-string': false,
    // NOTE: deprecated
    // 'no-multiple-var-decl': true,
    // Do not use octal literals or escaped octal sequences
    'no-octal-literal': true,
    // Do not use multiple spaces in a regular expression literal.
    'no-regex-spaces': true,
    // Do not use relative paths when importing external modules or ES6 import declarations.
    'no-relative-imports': false,
    // Do not use reserved keywords as names of local variables, fields, functions, or other identifiers.
    'no-reserved-keywords': false,
    // Avoid single line block comments and use single line comments instead.
    'no-single-line-block-comment': {
      options: true,
      severity: 'warning'
    },
    // NOTE: deprecated
    // 'no-stateless-class': true,
    // Do not use the version of setImmediate that accepts code as a string argument.
    'no-string-based-set-immediate': true,
    // Do not use the version of setInterval that accepts code as a string argument.
    'no-string-based-set-interval': true,
    // Do not use the version of setTimeout that accepts code as a string argument.
    'no-string-based-set-timeout': true,
    // Do not use suspicious comments, such as BUG, HACK, FIXME, LATER, LATER2, TODO.
    'no-suspicious-comment': false,
    // Do not use the idiom typeof x === 'undefined'.
    'no-typeof-undefined': true,
    // Ensures that double quoted strings are passed to a localize call to provide proper strings for different locales.
    'no-unexternalized-strings': true,
    // Do not bind 'this' as the context for a function literal or lambda expression.
    'no-unnecessary-bind': true,
    // Do not unnecessarily initialize the fields of a class to values they already have.
    'no-unnecessary-field-initialization': true,
    // Do not declare a variable only to return it from the function on the next line.
    'no-unnecessary-local-variable': true,
    // Do not write a method that only calls super() on the parent method with the same arguments.
    'no-unnecessary-override': true,
    // Remove unnecessary semicolons
    'no-unnecessary-semicolons': true,
    // Avoid writing browser-specific code for unsupported browser versions.
    'no-unsupported-browser-code': [true, '> 1%', 'last 2 versions'],
    // Avoid keeping files around that only contain commented out code, are completely empty, or only contain whitespace characters
    'no-useless-files': {
      options: true,
      severity: 'warning'
    },
    // NOTE: deprecated
    // 'no-var-self': true,
    // Do not use with statements.
    'no-with-statement': true,
    // Detect require() function calls for something that is not a string literal.
    'non-literal-require': true,
    // Avoid timing attacks by not making direct string comparisons to sensitive data.
    'possible-timing-attack': true,
    // Use array literal syntax when declaring or instantiating array types.
    'prefer-array-literal': [true, { 'allow-type-parameters': true }],
    // Prefer the tradition type casts instead of the new 'as-cast' syntax.
    'prefer-type-cast': false,
    // When a Promise instance is created, then either the reject() or resolve() parameter must be called on it within all code branches in the scope.
    'promise-must-complete': true,
    // Enforce a consistent usage of the _ functions.
    'underscore-consistent-invocation': true,
    // Do not reference the arguments object by numerical index; instead, use a named parameter.
    'use-named-parameter': true
    // NOTE: deprecated
    // 'valid-typeof': true
  }
};
