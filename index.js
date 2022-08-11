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
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        "groups": [
          [
            "external",
            "builtin"
          ]
        ],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    "import/prefer-default-export": "off",
    "no-underscore-dangle": "off",
    "no-trailing-spaces": "error",
    "object-curly-newline": [
      "error",
      {
        "multiline": true,
        "consistent": true,
      }
    ],
    "eol-last": "error",
    "max-len": [
      "error",
      {
        "code": 120,
        "ignoreComments": true
      }
    ]
  }
}