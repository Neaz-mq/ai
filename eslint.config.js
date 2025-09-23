import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // Ignore unused variables that start with uppercase letters (like React components or motion)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]|^motion$' }],

      // Optional: you can also ignore variables named 'motion' explicitly
      // 'no-unused-vars': ['error', { varsIgnorePattern: '^(motion)$' }],
    },
  },
])