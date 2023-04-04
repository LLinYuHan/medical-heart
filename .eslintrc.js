module.exports = {
    env: {
        node: true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: require.resolve('@typescript-eslint/parser'),
        extraFileExtensions: ['.vue'],
        project: ['./tsconfig.json']
    },
    globals: {
        uni: true,
        swan: true
    },
    rules: {
        'comma-dangle': ['error', {
            'arrays': 'never',
            'objects': 'never',
            'imports': 'never',
            'exports': 'never',
            'functions': 'never'
        }],
        '@typescript-eslint/no-unused-vars': ['error', {
            'vars': 'all',
            'args': 'after-used',
            'ignoreRestSiblings': false
        }],
        'max-len': 'off'
    },
};