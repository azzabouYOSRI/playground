
export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      parser: '@typescript-eslint/parser', // Use the TypeScript parser
      parserOptions: {
        project: ['./tsconfig.json'], // Path to your tsconfig
      },
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint'], // Add @typescript-eslint plugin
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'warn', // Example TypeScript rule
      'no-console': 'warn',
      'react/prop-types': 'off',
    },
  },
]
