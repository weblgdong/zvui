const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  pages: {
    index: {
      entry: 'document/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    port: 3000
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/libs')
      .end()
      .use('babel')
      .loader('babel-loader')
    config.resolve.alias
      .set('@', resolve('document'))
      .set('&', resolve('libs'))
    config.resolve.extensions
      .values(['.js', '.vue', '.json', '.css'])
  }
}
