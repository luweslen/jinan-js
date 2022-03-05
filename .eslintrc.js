module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'import/named': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'no-shadow': 'off',
    'vue/no-multiple-template-root': 'off',
    'no-eval': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
