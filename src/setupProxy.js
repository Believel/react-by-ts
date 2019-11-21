const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  // 代理本地模拟的数据
  app.use('/api/**', proxy({
    target: 'http://118.31.22.60:3000',
    pathRewrite(path) {
      // path.replace('/api', '/').replace('.action', '.json');
      return path;
    }
  }))
}