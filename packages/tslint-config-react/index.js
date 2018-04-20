module.exports = {
  extends: ['tslint-react', 'tslint-microsoft-contrib', '@codemakebros/tslint-config'],
  rules: {
    /**
     * tslint-react
     */
    // Enforces a consistent style for multiline JSX elements which promotes ease of editing via line-wise manipulations as well as maintainabilty via small diffs when changes are made.
    'jsx-alignment': true,
    // Allows blacklisting of JSX elements with an optional explanatory message in the reported failure.
    'jsx-ban-elements': true,
    // Allows blacklisting of props in JSX with an optional explanatory message in the reported failure.
    'jsx-ban-props': true,
    // When using a boolean attribute in JSX, you can set the attribute value to true or omit the value.
    'jsx-boolean-value': [true, 'never'],
    // Requires or bans spaces between curly brace characters in JSX.
    'jsx-curly-spacing': [true, 'never'],
    // Requires or bans spaces before and after the = token in JSX element attributes.
    'jsx-equals-spacing': [true, 'never'],
    // Warns for missing key props in JSX element array literals and inside return statements of Array.prototype.map callbacks.
    'jsx-key': [
      true,
      {
        severity: 'warning'
      }
    ],
    // Forbids function binding in JSX attributes.
    'jsx-no-bind': false,
    // Creating new anonymous functions (with either the function syntax or ES2015 arrow syntax) inside the render call stack works against pure component rendering.
    'jsx-no-lambda': false,
    // Disallows multiline JS expressions inside JSX blocks to promote readability
    'jsx-no-multiline-js': false,
    // Passing strings to the ref prop of React elements is considered a legacy feature and will soon be deprecated.
    'jsx-no-string-ref': true,
    // Enforces use of a translation function.
    'jsx-use-translation-function': false,
    // Enforces that JSX elements with no children are self-closing.
    'jsx-self-close': true,
    // Enforces that multiline JSX expressions are wrapped with parentheses.
    'jsx-wrap-multiline': true,

    /**
     * tslint-microsoft-contrib
     */
    // For accessibility of your website, anchor element link text should be at least 4 characters long.
    'react-a11y-anchors': true,
    // For accessibility of your website, enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
    'react-a11y-aria-unsupported-elements': true,
    // For accessibility of your website, Elements with event handlers must have explicit role or implicit role.
    'react-a11y-event-has-role': true,
    // For accessibility of your website, enforce that inputs element with type="image" must have non-empty alt attribute.
    'react-a11y-image-button-has-alt': true,
    // Enforce that an img element contains the alt attribute or role='presentation' for a decorative image.
    'react-a11y-img-has-alt': true,
    // For accessibility of your website, HTML elements must have a lang attribute and the attribute must be a valid language code.
    'react-a11y-lang': true,
    // For accessibility of your website, HTML meta elements must not have http-equiv="refresh".
    'react-a11y-meta': true,
    // For accessibility of your website, enforce all aria-* attributes are valid. Elements cannot use an invalid aria-* attribute.
    'react-a11y-props': true,
    // For accessibility of your website, enforce the type of aria state and property values are correct.
    'react-a11y-proptypes': true,
    // For accessibility of your website, elements with aria roles must have all required attributes according to the role.
    'react-a11y-role-has-required-aria-props': true,
    // For accessibility of your website, enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
    'react-a11y-role-supports-aria-props': true,
    // For accessibility of your website, elements with aria roles must use a valid, non-abstract aria role.
    'react-a11y-role': true,
    // For accessibility of your website, enforce tabindex value is not greater than zero.
    'react-a11y-tabindex-no-positive': true,
    // For accessibility of your website, HTML title elements must not be empty, must be more than one word, and must not be more than 60 characters long.
    'react-a11y-titles': true,
    // For security reasons, anchor tags with target="_blank" should also include rel="noopener noreferrer".
    'react-anchor-blank-noopener': true,
    // React iframes must specify a sandbox attribute.
    'react-iframe-missing-sandbox': true,
    // Do not use React's dangerouslySetInnerHTML API.
    'react-no-dangerous-html': true,
    // Several errors can occur when using React and React.Component subclasses.
    'react-this-binding-issue': [
      true,
      {
        'allow-anonymous-listeners': true
      }
    ],
    // Consistently use spaces around the brace characters of JSX attributes.
    'react-tsx-curly-spacing': [
      true,
      'never',
      {
        allowMultiline: true
      }
    ],
    // Remove unneeded properties defined in React Props and State interfaces.
    'react-unused-props-and-state': true
  }
};
