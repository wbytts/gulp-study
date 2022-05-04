
module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "14",
          "chrome": "30",
        },
        "useBuiltIns": "usage", // 自动引入需要的垫片
        "corejs": 3
      }
    ]
  ]
}

