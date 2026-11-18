import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

/**
 * ESLint flat config.
 *
 * - next/core-web-vitals: Next.js, React, React Hooks (incl. React Compiler rules) and accessibility rules
 * - next/typescript: typescript-eslint recommended rules
 * - prettier: reports formatting issues and turns off rules that conflict with Prettier
 */
export default defineConfig([...nextVitals, ...nextTs, prettierRecommended, globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts'])]);
