import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';


export default defineConfig([
  // Base JS config
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      import: importPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      'import/no-unresolved': 'error',
      'import/no-absolute-path': 'error',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: '@/components/**',
              group: 'internal',
              position: 'after'
            },
            {
              pattern: '@/features/**',
              group: 'internal',
              position: 'after'
            }
          ],
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ]
    },
    settings: {
      'import/resolver': {
          node: {
          extensions: ['.js', '.ts', '.vue']
        },
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.ts', '.vue']
        }
      }
    }
  },

  // TypeScript config
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      import: importPlugin
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',
      'import/no-unresolved': 'error',
      'import/no-absolute-path': 'error',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: '@/components/**',
              group: 'internal',
              position: 'after'
            },
            {
              pattern: '@/features/**',
              group: 'internal',
              position: 'after'
            }
          ],
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ]
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.ts', '.vue']
        }
      }
    }
  },

  // Vue config
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: (await import('vue-eslint-parser')).default,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue']
      }
    },
    plugins: {
      vue: pluginVue,
      import: importPlugin
    },
    rules: {
      ...pluginVue.configs['flat/essential'].rules,
      'import/no-unresolved': 'error',
      'import/no-absolute-path': 'error',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: '@/components/**',
              group: 'internal',
              position: 'after'
            },
            {
              pattern: '@/features/**',
              group: 'internal',
              position: 'after'
            }
          ],
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ]
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.ts', '.vue']
        }
      }
    }
  },

  // PostCSS config
  {
    files: ['postcss.config.js'],
    languageOptions: {
      globals: globals.node
    }
  },

  // Prettier config (applies globally)
  prettier
]);
