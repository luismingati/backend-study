module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
		'quote-props': 'off',
		'indent': 'off',
		'no-tabs': 'off',
		'class-methods-use-this': 'off',
		'consistent-return': 'off',
		camelcase: 'off',
  },
};
