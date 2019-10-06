module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:3000',
          ws: true,
          changeOrigin: true
        },
        '^/test': {
          target: 'http://localhost:8888',
          ws: true,
          changeOrigin: true
        }
      }
    }
  }
