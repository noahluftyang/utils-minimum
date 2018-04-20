module.exports = {
  rules: {
    // Avoid Chai assertions that invoke indexOf and compare for a -1 result.
    'chai-prefer-contains-to-index-of': true,
    // Avoid Chai assertions that result in vague errors.
    'chai-vague-errors': true,
    // Do not invoke Mocha's describe.only, it.only or context.only functions.
    'mocha-avoid-only': true,
    // All test logic in a Mocha test case should be within Mocha lifecycle method and not defined statically to execute when the module loads.
    'mocha-no-side-effect-code': true,
    // A function declares a MochaDone parameter but only resolves it synchronously in the main function.
    'mocha-unneeded-done': true
  }
};
