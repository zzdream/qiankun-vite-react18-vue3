module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          android: '4.4' // 根据你的需求设置最低支持的安卓版本
        },
        useBuiltIns: 'usage',
        corejs: '3.31.0'
      }
    ]
  ]
}
