{
  "env": {
    "node": true,
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": ["airbnb", "prettier", "plugin:sonarjs/recommended"],
  "plugins": ["prettier", "sonarjs"],
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "spaced-comment": "off",
    "no-console": "warn",
    "consistent-return": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "no-process-exit": "off",
    "no-param-reassign": "off",
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "no-unused-vars": [
      "error",
      { "argsIgnorePattern": "req|res|next|val|path" }
    ],
    "import/extensions": ["off"],
    "sonarjs/cognitive-complexity": "error",
    "sonarjs/no-identical-expressions": "error"
  }
}
