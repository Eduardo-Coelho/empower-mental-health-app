module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'react-native'],
  env: {
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
  ],
  parserOptions: {
    sourceType: 'module', // Use 'module' instead of 'script'
  },
};
