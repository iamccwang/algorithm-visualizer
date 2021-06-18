module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 1,
    'prettier/prettier': [
      2,
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 150,
        tabWidth: 2,
        semi: true,
      },
    ],
  },
};
