module.exports = {
  testEnvironment: 'node',
  resetMocks: true,
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '!<rootDir>/src/__mocks__/**/*.js',
  ],
};
