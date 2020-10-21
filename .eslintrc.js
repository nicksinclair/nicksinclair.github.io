module.exports = {
  extends: ['airbnb', 'react-app', 'plugin:prettier/recommended', 'prettier/react'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    mocha: true,
    node: true,
  },
  globals: {
    brokers: true,
    log: true,
    database: true,
    cursor: true,
    auditTrail: true,
    pronghornProps: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'max-len': [
      'warn',
      {
        code: 100,
        tabWidth: 2,
        comments: 100,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'react/prop-types': 0,
  },
};
