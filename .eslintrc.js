module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parser: "babel-eslint",
  ecmaFeatures: {
    jsx: true // Allows for the parsing of JSX
  },
  extends: [
    "react-app",
    "plugin:react/recommended",
    "airbnb",
    "prettier/react",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        semi: false,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "none"
      }
    ],
    "jsx-a11y/href-no-hash": ["off"],
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "react/forbid-prop-types": ["off"],
    "no-underscore-dangle": ["off"],
    "react-hooks/exhaustive-deps": ["off"],
    "max-len": [
      "warn",
      {
        code: 120,
        tabWidth: 2,
        comments: 120,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ]
  }
};
