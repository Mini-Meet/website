import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './Components/About/About'
import Privacy from './Components/Privacy/Privacy'
import Legal from './Components/Legal/Legal'

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Redirect, Switch }
from 'react-router-dom';
import { createStore} from 'redux';
import history from "./history";
import { Provider } from 'react-redux';



ReactDOM.render(
   <Router history={history}>
     <Switch>
       <Route path="/" exact component={App} />
       <Route path="/home" exact component={App} />
       <Route path="/about" exact component={About} />
       <Route path="/privacy" exact component={Privacy} />
       <Route path="/legal" exact component={Legal} />

     </Switch>
   </Router>,

 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
