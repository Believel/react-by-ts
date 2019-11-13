// !这个文件会删除，因为存在和服务器存在耦合性。只需要服务器端做反向代理即可解决
let baseURL = ''
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = ''
    break;
  case 'production':
    baseURL = 'http://localhost:4000/'
    break;
  default:
    break;
}
export default {
  baseURL
}