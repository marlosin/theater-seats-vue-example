module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api:3000',
        secure: false
      }
    }
  }
}
