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