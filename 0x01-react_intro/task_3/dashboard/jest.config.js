module.exports = {
  preset: 'react-native',
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transformIgnorePatterns: [
    "/node_modules/(?!undici/)"
  ]
};
