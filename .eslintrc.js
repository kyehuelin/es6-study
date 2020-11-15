module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        es2020: true,
        jest: true,
        node: true
    },
    parser: 'babel-eslint',
    ecmaFeatures: {
        jsx: true // Allows for the parsing of JSX
    },
    extends: ['plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': [
            'warn',
            {
                semi: true,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'none'
            }
        ],
        'jsx-a11y/href-no-hash': ['off'],
        'no-underscore-dangle': ['off'],
        'max-len': [
            'warn',
            {
                code: 120,
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
