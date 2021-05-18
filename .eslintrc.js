const rules = {
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "lf",
        tabWidth: 2,
        printWidth: 100,
      },
    ],
    "linebreak-style": ["warn", "unix"],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", "json", ".jsx", "ts", "tsx"],
      },
    ],
    "no-console": 0,
    "max-classes-per-file": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "no-alert": 0,
    "react/jsx-props-no-spreading": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "lines-between-class-members": 0,
    "react/require-default-props": 0,
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
  };
  
  module.exports = {
    parser: "babel-eslint",
    extends: ["airbnb", "plugin:prettier/recommended", "plugin:json/recommended", "prettier"],
    parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
        experimentalObjectRestSpread: true,
      },
    },
    // plugins: ["prettier"],
    env: {
      browser: true,
    },
  
    rules,
    overrides: [
      {
        files: ["*.ts", "*.tsx"],
        extends: [
          "airbnb-typescript-prettier",
          "plugin:prettier/recommended",
          "prettier",
          "plugin:json/recommended",
        ],
        parser: "@typescript-eslint/parser",
        plugins: ["prettier"],
        parserOptions: {
          project: "tsconfig.json",
          // tsconfigRootDir: __dirname,
          sourceType: "module",
        },
        rules,
      },
    ],
  };
  