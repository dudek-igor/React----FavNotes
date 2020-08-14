import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Twiiters from 'views/Twitters';
import Article from 'views/Articles';

function Root() {
  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path="/">
            <Redirect to="notes" />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/twitters">
            <Twiiters />
          </Route>
          <Route path="/articles">
            <Article />
          </Route>
          <Route path="*">
            <h1>Bad Gateway</h1>
          </Route>
        </Switch>
      </MainTemplate>
    </Router>
  );
}

export default Root;
