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
import About from './components/views/About/About.js';
import Booking from './components/views/Booking/Booking';
import Casestudy from './components/views/Casestudy/Casestudy.js';
import Home from './components/views/Home/Home';
import Privacy from './components/views/Privacy/Privacy';
import Legal from './components/views/Legal/Legal';
// acquisiton experiment
import Mba from './components/views/Mba/Mba';
import MbaFelix from './components/views/MbaFelix/MbaFelix';
import Mentors from './components/views/Mentors/Mentors';
import Referee from './components/views/Referee/Referee';
import Referral from './components/views/Referral/Referral';
import Register from './components/views/Register/Register';
import AcceptReferral from './components/views/Referral/AcceptReferral';

// Main App layout
import { PageLayout } from './components/layouts';

const history = createBrowserHistory;

ReactDOM.render(
  <Router history={history}>
    <PageLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/book-session" exact component={Booking} />
        <Route path="/case-study" exact component={Casestudy} />
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/referee" exact component={Referee} />
        <Route path="/register" exact component={Register} />
        <Route path="/legal" exact component={Legal} />
        <Route path="/prod-mba" exact component={Mba} />
        <Route path="/prod-mba-2020" exact component={MbaFelix} />
        <Route path="/mentors" exact component={Mentors} />
        <Route path="/referrals/:referralLink" exact component={Referral} />
        <Route path="/register" exact component={Register} />
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
