module.exports = {
  "root": true,
  "env": {
    "es6": true,
    "node": true,
    "mocha": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": [
      "./tsconfig.json",
      "./tsconfig.test.json"
    ]
  },
  "plugins": [
    "@typescript-eslint",
    "sonarjs",
    "import"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript/base",
    "plugin:sonarjs/recommended"
  ],
  "rules": {
    "key-spacing": [
      "error",
      {
        "beforeColon": false, 
        "afterColon": true,
      },
    ],
    "import/order": ["warn", {
        "newlines-between": "always",
        "groups": [["external", "builtin"]],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }],
    "import/prefer-default-export": "off",
    "no-underscore-dangle": "off",
    "no-trailing-spaces": "error",
    "object-curly-newline": ["error", { "multiline": true, "consistent": true }],
    "eol-last": "error",
    "max-len": ["error", { "code": 120, "ignoreComments": true }],
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": "error",
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "no-multi-spaces": ["error", { "exceptions": { "Property": true }  }],
    "space-in-parens": ["error", "never"],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1, "maxBOF": 1 }],
    "block-spacing": "off",
    "@typescript-eslint/block-spacing": "error",
    "array-bracket-spacing": ["error", "always", { "objectsInArrays": false, "arraysInArrays": false }],
    "newline-before-return": "error",
    "no-var": "error",
    "@typescript-eslint/explicit-member-accessibility": ["error", {
      "accessibility": "explicit",
      "overrides": {
        "constructors": "no-public"
      }
    }]
  }
}