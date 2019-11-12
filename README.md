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