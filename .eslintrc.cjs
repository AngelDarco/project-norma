module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [ '.eslintrc.{js,cjs}' ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'arrow-spacing': [ 'error', { before: true, after: true } ],
    'no-plusplus': [ 'error', {
      allowForLoopAfterthoughts: true,
    } ],
    'import/extensions': [ 'error', 'always' ],
  },
};
