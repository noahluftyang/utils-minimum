module.exports = {
  plugins: ['react'],
  rules: {
    /*
     * Stylistic Issues
     */
    'jsx-quotes': ['error', 'prefer-double'],

    /*
     * React rules
     */
    // Enforces consistent naming for boolean props
    // Allow is & has prefixes
    'react/boolean-prop-naming': ['warn', { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
    // Forbid "button" element without an explicit "type" attribute
    'react/button-has-type': 'off',
    // Prevent extraneous defaultProps on components
    'react/default-props-match-prop-types': 'off',
    // Rule enforces consistent usage of destructuring assignment in component
    'react/destructuring-assignment': 'off',
    // Prevent missing displayName in a React component definition
    'react/display-name': 'off',
    // Forbid certain props on Components
    'react/forbid-component-props': 'off',
    // Forbid certain elements
    'react/forbid-elements': 'off',
    // Forbid certain propTypes
    'react/forbid-prop-types': 'off',
    // Forbid foreign propTypes
    'react/forbid-foreign-prop-types': 'off',
    // Prevent using this.state inside this.setState
    'react/no-access-state-in-setstate': 'error',
    // Prevent using Array index in key props
    'react/no-array-index-key': 'off',
    // Prevent passing children as props
    'react/no-children-prop': 'error',
    // Prevent usage of dangerous JSX properties
    'react/no-danger': 'error',
    // Prevent problem with children and props.dangerouslySetInnerHTML
    'react/no-danger-with-children': 'error',
    // Prevent usage of deprecated methods
    'react/no-deprecated': 'error',
    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': ['error', 'disallow-in-func'],
    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': ['error', 'disallow-in-func'],
    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 'error',
    // Prevent usage of findDOMNode
    'react/no-find-dom-node': 'error',
    // Prevent usage of isMounted
    'react/no-is-mounted': 'error',
    // Prevent multiple component definition per file
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    'react/no-redundant-should-component-update': 'error',
    // Prevent usage of the return value of React.render
    'react/no-render-return-value': 'error',
    // Prevent usage of setState
    'react/no-set-state': 'off',
    // Prevent common casing typos
    'react/no-typos': 'error',
    // Prevent using string references in ref attribute
    'react/no-string-refs': 'error',
    // Prevent invalid characters from appearing in markup
    'react/no-unescaped-entities': 'error',
    // Prevent usage of unknown DOM property (fixable)
    'react/no-unknown-property': 'off',
    // Prevent definitions of unused prop types
    'react/no-unused-prop-types': 'off',
    // Prevent definitions of unused state properties
    'react/no-unused-state': 'error',
    // Prevent usage of setState in componentWillUpdate
    'react/no-will-update-set-state': ['error', 'disallow-in-func'],
    // Enforce ES6 class for React Components
    'react/prefer-es6-class': ['error', 'always'],
    // Enforce stateless React Components to be written as a pure function
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    // Prevent missing props validation in a React component definition
    'react/prop-types': 'off',
    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 'error',
    // Enforce a defaultProps definition for every prop that is not a required prop
    'react/require-default-props': 'off',
    // Enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': 'error',
    // Enforce ES6 class for returning value in render function
    'react/require-render-return': 'error',
    // Prevent extra closing tags for components without children (fixable)
    'react/self-closing-comp': 'error',
    // Enforce component methods order
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          'everything-else',
          '/^render.+$/',
          'render'
        ]
      }
    ],
    // Enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': 'off',
    // Enforce style prop value being an object
    'react/style-prop-object': 'error',
    // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
    'react/void-dom-elements-no-children': 'error',

    /*
     * JSX-specific rules
     */
    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': ['error', 'never'],
    // Validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    // Validate closing tag location in JSX
    'react/jsx-closing-tag-location': 'error',
    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
    // Enforce or disallow spaces around equal signs in JSX attributes
    'react/jsx-equals-spacing': ['error', 'never'],
    // Restrict file extensions that may contain JSX
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    // Enforce position of the first prop in JSX
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': 'off',
    // Validate JSX indentation (fixable)
    'react/jsx-indent': 'off',
    // Validate props indentation in JSX
    'react/jsx-indent-props': ['error', 2],
    // Validate JSX has key prop when in array or iterator
    'react/jsx-key': 'error',
    // Limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    // Prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-bind': [
      'error',
      { ignoreRefs: true, allowArrowFunctions: true, allowBind: false }
    ],
    // Prevent comments from being inserted as text nodes
    'react/jsx-no-comment-textnodes': 'error',
    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    // Prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': 'off',
    // Prevent usage of unsafe target='_blank'
    'react/jsx-no-target-blank': 'error',
    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': ['error', { allowGlobals: false }],
    // Limit to one expression per line in JSX
    'react/jsx-one-expression-per-line': 'off',
    // Enforce curly braces or disallow unnecessary curly braces in JSX
    'react/jsx-curly-brace-presence': 'off',
    // Enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
    // Enforce props alphabetical sorting (fixable)
    'react/jsx-sort-props': 'off',
    // Validate spacing before closing bracket in JSX (fixable)
    // Deprecation
    'react/jsx-space-before-closing': 'off',
    // Validate whitespace in and around the JSX opening and closing brackets
    'react/jsx-tag-spacing': [
      'error',
      { closingSlash: 'never', beforeSelfClosing: 'always', afterOpening: 'never' }
    ],
    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 'error',
    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 'error',
    // Prevent missing parentheses around multilines JSX
    'react/jsx-wrap-multilines': [
      'error',
      { declaration: true, assignment: true, return: true, arrow: true }
    ]
  }
};
