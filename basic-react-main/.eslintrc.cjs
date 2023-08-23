module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  ignorePatterns: ['src/assets/iconfont/*'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/display-name': 'off',
    //关闭组件命名规则
    'vue/multi-word-component-names': 'off',
    // '@typescript-eslint/no-inferrable-types': 0, // 关闭ts类型推断
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/ban-types': 'off',
    // 禁止未使用的变量 https://typescript-eslint.io/rules/no-unused-vars
    '@typescript-eslint/no-unused-vars': 'error',
    // 带有默认值的函数参数在最后 https://typescript-eslint.io/rules/default-param-last
    '@typescript-eslint/default-param-last': 'error',
    'no-eval': 2, //不允许使用eval
    'no-var': 'error', // 禁止使用 var
    // 'react/jsx-uses-react': 'off',
    // 'react/react-in-jsx-scope': 'off',
    'at-rule-no-unknown': [
      'off',
      {
        ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin', 'extend']
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
