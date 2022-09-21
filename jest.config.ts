export default {
    clearMocks: true,
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    roots: ['<rootDir>/tests'],
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    // testRegex: './src/.*\\.(test|spec)?\\.(ts|ts)$',
};
