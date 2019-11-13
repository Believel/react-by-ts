# Create an app called react-by-ts
```js
create-react-app react-by-ts --typescript
```
# How to rewire your create-react-app project
> 实现对默认配置自定义，例如扩展 Create React App 的webpack配置
1. Install package
```js
npm install react-app-rewired customize-cra --save-dev
```
2. Create a `config-overrides.js` in the root directory
```js
// config-overrides.js
const { override, fixBabelImports} = require('customize-cra');
module.exports = override(
  // 按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  })
)
```
3. 'Flip' the existing calls to `react-scripts` in `npm` script for start,build and test
```js
  /* package.json */

  "scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test --env=jsdom",
+   "test": "react-app-rewired test --env=jsdom",
    "eject": "react-scripts eject"
}
```
4. Start the Dev Server
```js
$ npm start
```
5. Build your app
```js
$ npm run build
```
# set proxy in development environment
1. install package
```js
npm install http-proxy-middleware http-server -D
```
2. create file `setupProxy.js` in the src directory
```js
// setupProxy.js
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  // 当请求 http://localhost:3000/api/employee/getEmployee.action 时 代理到 http://localhost:4000/employeee/getEmployee.json
  app.use('/api/**/*.action', proxy({
    target: 'http://localhost:4000',
    pathRewrite(path) {
      return path.replace('/api', '/').replace('.action', '.json')
    }
  }))
}
```
3. 添加一个命令在`package.json`
```js
// && 表示串行执行
// &  表示并行执行
"server": "cd mock && hs -p 4000 -a localhost"
```
# Environment Variables
1. Adding Environment Variables In `.env` in the root of your project
```js
REACT_APP_WEBSITE_TITLE = Typescript in Action By Typescript
# also works
# REACT_APP_VERSION = ${npm_package_version}
REACT_APP_VERSION = $npm_package_version
```
2. Referencing Environment Variables in the HTML
```js
<title>%REACT_APP_WEBSITE_TITLE%</title>
```
3. Referencing Environment Variables in the Javascript
```js
render() {
  return (
    <div>
      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_WEBSITE_TITLE} />
      </form>
    </div>
  );
}
```
# deploy my project
1. `npm run build`
2. 预览
  * 方式1
  ```js
  yarn global add serve
  serve -s build // 在当前目录下启动即可开启一个默认的5000端口的本地服务，如果说此命令不存在，则需要配置环境变量
  ```
  * 还有其他方式。。。暂时不研究
# 代码部署线上
