const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  // 代理本地模拟的数据
  app.use('/api/**/*.action', proxy({
    target: 'http://localhost:4000',
    pathRewrite(path) {
      return path.replace('/api', '/').replace('.action', '.json');
    }
  }))
}