// jest.config.js
import nextJest from "next/jest";

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
    // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
    moduleDirectories: ["node_modules", "<rootDir>/"],
    testEnvironment: "jest-environment-jsdom",
    preset: "ts-jest",
    transformIgnorePatterns: [
        "node_modules/(?!aggregate-error|clean-stack|escape-string-regexp|indent-string|p-map)",
    ],
    testPathIgnorePatterns: [
        "<rootDir>/src/__tests__/testHelpers/*",
        "<rootDir>/src/constants/*"
    ],
    coverageReporters: ["json-summary", "lcov", "text-summary", "text", "html"],
    collectCoverage: false,
    collectCoverageFrom: [
        "<rootDir>/src/**/*.{ts,tsx}",
        "<rootDir/pages/**/*.{ts,tsx}"
    ],
    coveragePathIgnorePatterns: [
        "<rootDir>/src/__tests__/testHelpers/*",
        "<rootDir>/src/constants/*"
    ]
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig);
