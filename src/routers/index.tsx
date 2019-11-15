import React from 'react';
import { HashRouter, Route} from 'react-router-dom';
import App from '../components/App';
const Root = () => (
  <HashRouter>
    <Route path="/*" component={App}/>
  </HashRouter>
)
export default Root
