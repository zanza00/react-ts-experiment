// lib imports
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// app imports
import { MainLayout } from './layouts/main-layout';
import { HomeContainer } from './containers/home-container/index';
import { AboutContainer } from './containers/about-container/index';
import { HallFameContainer } from './containers/hall-fame-container/index';

import { store } from './store/index';
const history = syncHistoryWithStore(hashHistory, store) as any;

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route component={MainLayout}>
          <Route path="/" component={HomeContainer} />
          <Route path="/hall-of-fame" component={HallFameContainer} />
          <Route path="/about" component={AboutContainer} />
        </Route>
      </Router>
    </Provider>
  );
}

export const app = ReactDOM.render(
  <App />, document.getElementById('app-container'),
);
