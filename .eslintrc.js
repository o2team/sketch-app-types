module.exports = {
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    'sketch',
    'o2team'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'project': './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'new-cap': 0,
    'class-methods-use-this': 0,
    'no-unused-vars': 1,
    'no-undef': 1,
    'eqeqeq': 0,
    'no-mixed-operators': 0,
  },
  globals: {
    // Mocha
    Mocha: false,
    __mocha__: false,
    // Objective-C
    nil: false,
    NSFileHandlingPanelOKButton: false,
    NSMomentaryChangeButton: false,
    NSClassFromString: false,
    NSModalResponseOK: false,
    NSItalicFontMask: false,
    NSTextAlignmentLeft: false,
    NSTextAlignmentRight: false,
    NSTextAlignmentCenter: false,
    NSTextAlignmentJustified: false,
    NSTextAlignmentNatural: false,
    NSUnderlineStyleSingle: false,
    NSUnderlineStyleSingle: false,
    NSTemporaryDirectory: false,
    NSSearchPathForDirectoriesInDomains: false,
    NSApplicationSupportDirectory: false,
    NSUserDomainMask: false,
    NSPointInRect: false,
    NSScrollElasticityNone: false,
    WebUndefined: false,
    // Sketch
    MOPointer: false,
    CGRectMake: false,
  }
}
