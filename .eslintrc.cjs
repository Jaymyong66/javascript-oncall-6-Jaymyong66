module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    'operator-linebreak': ['warn', 'before'],
    'max-depth': ['warn', 2],
    'no-var': 2,
    'prefer-const': 2,
    'no-undef': 2,
    'no-unused-vars': 2,
    'max-lines-per-function': ['warn', 15],
    'import/extensions': [
      'off',
      'ignorePackages',
      {
        js: 'never',
      },
    ],
    'class-methods-use-this': ['off', { exceptMethods: [] }],
    // allowForLoopAfterthoughts: true,
    'eslint no-prototype-builtins': 'off',
    'no-prototype-builtins': 'off',
    'no-plusplus': 'warn',
    'import/prefer-default-export': 'warn',
    'no-param-reassign': 'warn',
    eqeqeq: 'warn',
    'guard-for-in': 'warn',
    'no-restricted-syntax': 'warn',
  },
};
