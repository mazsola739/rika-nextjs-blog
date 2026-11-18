import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
  // next/core-web-vitals already includes next, react-hooks and the TS parser;
  // next/typescript already includes @typescript-eslint/recommended.
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:react/recommended', 'plugin:prettier/recommended'),
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      // Props are typed with TypeScript, runtime prop-types are redundant.
      'react/prop-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];

export default eslintConfig;
