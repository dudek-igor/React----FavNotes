import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Twiiters from 'views/Twitters';
import Article from 'views/Articles';
import DetailsPage from 'views/DetailsPage';

function Root() {
  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="notes" />} />
          <Route exact path="/notes" component={Notes} />
          <Route path="/notes/:id" component={DetailsPage} />
          <Route exact path="/twitters" component={Twiiters} />
          <Route path="/twitters/:id" component={DetailsPage} />
          <Route exact path="/articles" component={Article} />
          <Route path="/articles/:id" component={DetailsPage} />
          <Route path="*">
            <h1>Bad Gateway</h1>
          </Route>
        </Switch>
      </MainTemplate>
    </Router>
  );
}

export default Root;
