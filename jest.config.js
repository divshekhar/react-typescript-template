module.export = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
