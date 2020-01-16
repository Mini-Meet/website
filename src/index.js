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
import About from './components/views/About/About';
import Privacy from './components/views/Privacy/Privacy';
import Legal from './components/views/Legal/Legal';
import Home from './components/views/Home/Home';
import Referral from './components/views/Referral/Referral';
import AcceptReferral from './components/views/Referral/AcceptReferral';

// Main App layout
import PageLayout from './components/layouts/PageLayout';

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
        <Route path="/statistics/:referralLink" exact component={Referral} />
        <Route
          path="/referrals/accept/:referralLink"
          exact
          component={AcceptReferral}
        />
      </Switch>
    </PageLayout>
  </Router>,

  document.getElementById('root')
);
serviceWorker.unregister();
