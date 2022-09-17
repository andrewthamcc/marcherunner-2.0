'use strict'

module.exports = {
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
}
