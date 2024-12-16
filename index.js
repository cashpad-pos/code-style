
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettierConfig = require('eslint-config-prettier');
const globals = require('globals');
const perfectionist = require('eslint-plugin-perfectionist');

const baseESlintConfig = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {ignores: ['dist', 'sequelize']},
  {files: ['src/**/*.ts','test/**/*.ts']},
  { 
    languageOptions: {
    globals: {
      ...globals.node,
      ...globals.mocha,
      ...globals.commonjs,
    },
  }},
  {
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-imports': 'error',
      'perfectionist/sort-exports': 'error',
    },
  },
  prettierConfig
);

const basePrettierConfig = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'always',
}

module.exports = {
  baseESlintConfig,
  basePrettierConfig
};