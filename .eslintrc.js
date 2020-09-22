module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        semi: ["off"],
        quotes: ["off"],
        indent: ['error', 4],
        camelcase: ["off"],
        "no-use-before-define": ["off"],
        "react/style-prop-object": ["off"],
        "eol-last": ["off"],
        "linebreak-style": ["off"],
        "arrow-body-style": ["off"],
        "react/jsx-indent": ['error', 4],
        "react/jsx-indent-props": ['error', 4],
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".tsx"] }],
        "react/jsx-one-expression-per-line": ["off"],
        "import/no-unresolved": ["off"],
        "import/extensions": ["off"],
        "react/jsx-props-no-spreading": ["off"],
    },
}