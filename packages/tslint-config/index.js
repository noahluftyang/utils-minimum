module.exports = {
  extends: [
    './rules/angular', 
    './rules/eslint', 
    './rules/react'
  ],
  rules: {
    /**
     * TypeScript-specific
    */
    // Enforces function overloads to be consecutive.
    'adjacent-overload-signatures': true
  }
}