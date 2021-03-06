module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true
  },
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: "2018",
    sourceType: "module"
  },
  plugins: ["react", "jest"],
  settings: {
    react: {
      version: "16.5",
      pragma: "createElement"
    }
  },
  rules: {
    "prefer-template": "error",
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/prop-types": [0],
    "react/no-deprecated": [0]
  }
};