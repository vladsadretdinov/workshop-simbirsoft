module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-prettier/recommended',
  ],
  rules: {
    "declaration-block-no-duplicate-properties": true,
    "max-nesting-depth": 6,
    "selector-pseudo-element-no-unknown": [true, {
      "ignorePseudoElements": ["ng-deep"],
    }],
  }
};
