import React from 'react';
import ReactDOM from 'react-dom';
// import HelloHooks from './components/demo/HelloHooks';
// import HelloClass from './components/demo/HelloClass';
// import HelloHOC from './components/demo/HelloHOC';
import Root from './routers';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
