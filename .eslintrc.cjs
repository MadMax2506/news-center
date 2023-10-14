module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'prettier', '@tanstack/query'],
  rules: {
    eqeqeq: 2,
    'import/prefer-default-export': 0,
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    'prettier/prettier': 2,
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
};
