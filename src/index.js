import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import {
  BrowserRouter as Router,
  Route,
  Switch, // Redirect
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Components declaration
import About from './Components/views/About/About';
import Privacy from './Components/views/Privacy/Privacy';
import Legal from './Components/views/Legal/Legal';
import Home from './Components/views/Home/Home';

// Main App layout
import PageLayout from './Components/layouts/PageLayout';

const history = createBrowserHistory;

ReactDOM.render(
  <Router history={history}>
    <PageLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/legal" exact component={Legal} />
      </Switch>
    </PageLayout>
  </Router>,

  document.getElementById('root')
);
serviceWorker.unregister();
