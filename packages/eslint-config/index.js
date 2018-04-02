module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
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