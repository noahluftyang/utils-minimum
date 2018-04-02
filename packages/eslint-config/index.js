module.exports = {
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'script',
    ecmaFeatures: {}
  },
  // parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  rules: {
    /** 
     * Possible Errors
    */
    // disallow the use of console
    'no-console': 'warn'
  }
}