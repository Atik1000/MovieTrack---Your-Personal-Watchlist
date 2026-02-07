import type { Config } from 'jest'
import nextJest from 'next/jest.js'
const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
const config: Config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    // Add more setup options before each test is run
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
    testMatch: [
        '**/__tests__/**/*.{js,jsx,ts,tsx}',
        '**/*.{spec,test}.{js,jsx,ts,tsx}',
    ],
    collectCoverageFrom: [
        // Focus on business logic, not UI rendering
        'lib/**/*.{js,jsx,ts,tsx}',           // ✅ High priority - business logic
        'hooks/**/*.{js,jsx,ts,tsx}',         // ✅ High priority - custom hooks

        // UI components (optional coverage)
        'components/navigation.tsx',           // Test critical navigation
        'components/movie-card.tsx',          // Test movie card logic

        // Exclude UI-heavy files
        '!components/ui/**',                  // Exclude shadcn/ui components
        '!components/theme-provider.tsx',     // Exclude theme provider
        '!components/movie-skeleton.tsx',     // Exclude loading skeleton
        '!components/error-alert.tsx',        // Simple display component
        '!components/movies-grid.tsx',        // Simple wrapper component
        '!app/**/layout.tsx',                 // Exclude layouts
        '!app/providers.tsx',                 // Exclude providers

        // Exclude config/types
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!**/.next/**',
        '!**/coverage/**',
        '!**/jest.config.ts',
    ],
    coverageThreshold: {
        global: {
            branches: 20,
            functions: 20,
            lines: 20,
            statements: 20,
        },
    },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
