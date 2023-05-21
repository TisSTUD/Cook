const stricter1 = 'off';
const stricter2 = 'warn';

module.exports = {
  root: true,
  env: {
    commonjs: true,
    node: true,
    jest: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:markdown/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import',
    'json-format',
    '@typescript-eslint/eslint-plugin',
    'unused-imports',
    'jest',
    'unicorn',
    'markdown',
  ],
  parserOptions: {
    sourceType: 'module',
    project: ['./tsconfig.eslint.json', '*/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: [
    '*.lock',
    '*.code-workspace',
    'tmp/',
    'coverage/',
    'scripts/',
    'node_modules/',
    'settings/insomnia/',
    'web', // FIXME remove later
    '**/.*',
    '**/.*/',
    '**/node_modules/',
    '**/.eslintrc*.js',
    '**/dist/',
    '**/.next/',
    '**/android/',
    '**/ios/',
    '**/*.http',
    '**/*.secret',
  ],
  rules: {
    // Base
    semi: 'error',
    camelcase: ["error", { properties: "never" }],
    'prettier/prettier': ['error', { trailingComma: 'all' }],
    'no-undef': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-self-compare': 'error',
    'arrow-parens': 'off',
    'linebreak-style': 'off',
    'no-shadow': 'off', // replaced with @typescript-eslint/no-shadow

    // Import
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@nearvibz/**',
            group: 'internal',
          },
          {
            pattern: '@web/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@mobile/**',
            group: 'parent',
            position: 'before',
          },
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'type',
        ],
        "newlines-between": "always",
      },
    ],
    "import/no-default-export": 'error',
    "import/no-cycle": ["error", { maxDepth: 1 }],
    "import/no-deprecated": "warn",
    'import/no-extraneous-dependencies': 'error',
    'import/default': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/exports-last': stricter1,
    'import/namespace': stricter1,
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    // typescript
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          "{}": false,
        },
        extendDefaults: true,
      }
    ],
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/require-await': stricter1,
    '@typescript-eslint/ban-ts-comment': ['error', { minimumDescriptionLength: 6 }],
    '@typescript-eslint/restrict-template-expressions': stricter1,
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    "@typescript-eslint/consistent-type-imports": 'error',
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/unbound-method": ['error', { ignoreStatic: true }],

    // Jest
    'jest/expect-expect': 'off',
    'jest/no-standalone-expect': 'off',
    'jest/no-conditional-expect': 'warn',
    'jest/no-done-callback': 'warn',
    'jest/no-conditional-expect': 'off',

    // Unicorn
    'unicorn/catch-error-name': 'warn',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/consistent-function-scoping': stricter2,
    'unicorn/error-message': 'warn',
    'unicorn/escape-case': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-empty-file': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-negated-condition': 'warn',
    'unicorn/no-nested-ternary': stricter2,
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-unused-properties': 'warn',
    'unicorn/numeric-separators-style': 'error',
    'unicorn/filename-case': ['error', { 'case': 'kebabCase' }],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: [
          '*/tsconfig.json', 'packages/*/tsconfig.json',
        ],
      },
    },
    'json/json-with-comments-files': ['**/tsconfig*.json', '.vscode/**'],
    jest: {
      version: require('jest/package.json').version,
    },
  },
  overrides: [
    {
      files: ['**/index.ts'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['off'],
      },
    },
  ],
};