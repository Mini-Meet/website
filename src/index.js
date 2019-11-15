import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './Components/views/About/About'
import Privacy from './Components/views/Privacy/Privacy'
import Legal from './Components/views/Legal/Legal'

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } // Redirect
from 'react-router-dom';
import { createBrowserHistory } from "history";

const history = createBrowserHistory

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
serviceWorker.unregister();
