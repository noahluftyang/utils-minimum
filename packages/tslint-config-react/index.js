module.exports = {
  extends: [
    '@codemakebros/tslint-config',
    'tslint-react',
    'tslint-microsoft-contrib'
  ],
  rules: {
    /*
     * tslint-react
     */
    /*
     * Enforces a consistent style for multiline JSX elements which promotes ease of editing via
     * line-wise manipulations as well as maintainabilty via small diffs when changes are made.
     */
    'jsx-alignment': true,
    // Allows blacklisting of JSX elements with an optional explanatory message in the reported failure.
    'jsx-ban-elements': true,
    // Allows blacklisting of props in JSX with an optional explanatory message in the reported failure.
    'jsx-ban-props': true,
    /*
     * When using a boolean attribute in JSX, you can set the attribute value to true or omit the value.
     * This rule will enforce one or the other to keep consistency in your code.
     */
    'jsx-boolean-value': [true, 'never'],
    // Requires or bans spaces between curly brace characters in JSX.
    'jsx-curly-spacing': [true, 'never'],
    // Requires or bans spaces before and after the = token in JSX element attributes.
    'jsx-equals-spacing': [true, 'never'],
    // Warns for missing key props in JSX element array literals and inside return statements of Array.prototype.map callbacks.
    'jsx-key': [true, {
      severity: 'warning'
    }],
    /*
     * Forbids function binding in JSX attributes. This has the same intent as jsx-no-lambda in helping you avoid excessive re-rendres.
     * Note that this currently only does a simple syntactic check, not a semantic one (it doesn't use the type checker). So it may have some rare false positives if you define your own .bind function and supply this as a parameter.
     */
    'jsx-no-bind': false,
    // Creating new anonymous functions (with either the function syntax or ES2015 arrow syntax) inside the render call stack works against pure component rendering. When doing an equality check between two lambdas, React will always consider them unequal values and force the component to re-render more often than necessary.
    'jsx-no-lambda': false,
    // Disallows multiline JS expressions inside JSX blocks to promote readability
    'jsx-no-multiline-js': false,
    // Passing strings to the ref prop of React elements is considered a legacy feature and will soon be deprecated. Instead, use a callback.
    'jsx-no-string-ref': true,
    // Enforces use of a translation function. Plain string literals are disallowed in JSX when enabled.
    'jsx-use-translation-function': false,
    // Enforces that JSX elements with no children are self-closing.
    'jsx-self-close': true,
    /*
     * Enforces that multiline JSX expressions are wrapped with parentheses.
     * Opening parenthesis must be followed by a newline.
     * Closing parenthesis must be preceded by a newline.
     */
    'jsx-wrap-multiline': true,

    /*
     * tslint-microsoft-contrib
     */
    // For accessibility of your website, anchor element link text should be at least 4 characters long. Links with the same HREF should have the same link text. Links that point to different HREFs should have different link text. Links with images and text content, the alt attribute should be unique to the text content or empty.
    'react-a11y-anchors': true,
    // For accessibility of your website, enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
    'react-a11y-aria-unsupported-elements': true,
    // For accessibility of your website, Elements with event handlers must have explicit role or implicit role.
    'react-a11y-event-has-role': true,
    // For accessibility of your website, enforce that inputs element with type="image" must have non-empty alt attribute.
    'react-a11y-image-button-has-alt': true,
    // Enforce that an img element contains the alt attribute or role='presentation' for a decorative image. All images must have alt text to convey their purpose and meaning to screen reader users. Besides, the alt attribute specifies an alternate text for an image, if the image cannot be displayed. This rule accepts as a parameter a string array for tag names other than img to also check.
    'react-a11y-img-has-alt': true,
    // For accessibility of your website, HTML elements must have a lang attribute and the attribute must be a valid language code.
    'react-a11y-lang': true,
    // For accessibility of your website, HTML meta elements must not have http-equiv="refresh".
    'react-a11y-meta': true,
    // For accessibility of your website, enforce all aria-* attributes are valid. Elements cannot use an invalid aria-* attribute. This rule will fail if it finds an aria-* attribute that is not listed in WAI-ARIA states and properties.
    'react-a11y-props': true,
    // For accessibility of your website, enforce the type of aria state and property values are correct.
    'react-a11y-proptypes': true,
    // For accessibility of your website, elements with aria roles must have all required attributes according to the role.
    'react-a11y-role-has-required-aria-props': true,
    // For accessibility of your website, enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role. Many aria attributes (states and properties) can only be used on elements with particular roles. Some elements have implicit roles, such as <a href='hrefValue' />, which will be resolved to role='link'. A reference for the implicit roles can be found at Default Implicit ARIA Semantics.
    'react-a11y-role-supports-aria-props': true,
    // For accessibility of your website, elements with aria roles must use a valid, non-abstract aria role. A reference to role defintions can be found at WAI-ARIA roles.
    'react-a11y-role': true,
    // For accessibility of your website, enforce tabindex value is not greater than zero. Avoid positive tabindex attribute values to synchronize the flow of the page with keyboard tab order.
    'react-a11y-tabindex-no-positive': true,
    // For accessibility of your website, HTML title elements must not be empty, must be more than one word, and must not be more than 60 characters long.
    'react-a11y-titles': true,
    // For security reasons, anchor tags with target="_blank" should also include rel="noopener noreferrer". In order to restrict the behavior window.opener access, the original page needs to add a rel="noopener" attribute to any link that has target="_blank". However, Firefox does not support that tag, so you should actually use rel="noopener noreferrer" for full coverage.
    'react-anchor-blank-noopener': true,
    // React iframes must specify a sandbox attribute. If specified as an empty string, this attribute enables extra restrictions on the content that can appear in the inline frame. The value of the attribute can either be an empty string (all the restrictions are applied), or a space-separated list of tokens that lift particular restrictions. You many not use both allow-scripts and allow-same-origin at the same time, as that allows the embedded document to programmatically remove the sandbox attribute in some scenarios.
    'react-iframe-missing-sandbox': true,
    // Do not use React's dangerouslySetInnerHTML API. This rule finds usages of the dangerouslySetInnerHTML API (but not any JSX references).
    'react-no-dangerous-html': true,
    // Several errors can occur when using React and React.Component subclasses. When using React components you must be careful to correctly bind the 'this' reference on any methods that you pass off to child components as callbacks. For example, it is common to define a private method called 'onClick' and then specify onClick={this.onClick} as a JSX attribute. If you do this then the 'this' reference will be undefined when your private method is invoked. The React documentation suggests that you bind the 'this' reference on all of your methods within the constructor: this.onClick = this.onClick.bind(this);. This rule will create a violation if 1) a method reference is passed to a JSX attribute without being bound in the constructor. And 2) a method is bound multiple times in the constructor. Another issue that can occur is binding the 'this' reference to a function within the render() method. For example, many people will create an anonymous lambda within the JSX attribute to avoid the 'this' binding issue: onClick={() => { this.onClick(); }}. The problem with this is that a new instance of an anonymous function is created every time render() is invoked. When React compares virutal DOM properties within shouldComponentUpdate() then the onClick property will look like a new property and force a re-render. You should avoid this pattern because creating function instances within render methods breaks any logic within shouldComponentUpdate() methods. This rule creates violations if 1) an anonymous function is passed as a JSX attribute. And 2) if a function instantiated in local scope is passed as a JSX attribute. This rule can be configured via the "allow-anonymous-listeners" parameter. If you want to suppress violations for the anonymous listener scenarios then configure that rule like this: "react-this-binding-issue": [ true, { 'allow-anonymous-listeners': true } ]
    'react-this-binding-issue': [true, {
      'allow-anonymous-listeners': true
    }],
    // Consistently use spaces around the brace characters of JSX attributes. You can either allow or ban spaces between the braces and the values they enclose.
    'react-tsx-curly-spacing': [true, 'never', {
      allowMultiline: true
    }],
    // Remove unneeded properties defined in React Props and State interfaces. Any interface named Props or State is defined as a React interface. All fields in these interfaces must be referenced. This rule can be configured with regexes to match custom Props and State interface names.
    'react-unused-props-and-state': true
  }
};
