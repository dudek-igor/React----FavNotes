import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Twiiters from 'views/Twitters';
import Article from 'views/Articles';
import DetailsPage from 'views/DetailsPage';
import { routes } from 'routes';
import { Provider } from 'react-redux';
import configureStore from 'data/store';

function Root() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Router>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} render={() => <Redirect to={routes.notes} />} />
            <Route exact path={routes.notes} component={Notes} />
            <Route path={routes.note} component={DetailsPage} />
            <Route exact path={routes.twitters} component={Twiiters} />
            <Route path={routes.twitter} component={DetailsPage} />
            <Route exact path={routes.articles} component={Article} />
            <Route path={routes.article} component={DetailsPage} />
            <Route path="*">
              <h1>Bad Gateway</h1>
            </Route>
          </Switch>
        </MainTemplate>
      </Router>
    </Provider>
  );
}

export default Root;
