module.exports = {
    // other Jest configurations
    testEnvironment: 'node',
    transform: {
      // '^.+\\.jsx?$': 'babel-jest'
         "^.+\\.[t|j]sx?$": "babel-jest"
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    // extensionsToTreatAsEsm: ['.js', '.jsx'],
    testEnvironment: "jsdom",
    roots: ["<rootDir>/src"],
  };
  