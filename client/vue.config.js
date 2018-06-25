module.exports = {
  lintOnSave: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api:3000',
        secure: false
      }
    }
  }
}
