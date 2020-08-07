import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
// import Notes from 'views/Notes';
// import Twiiters from 'views/Twiiters';
// import Article from 'views/Articles';

function Root() {
  return (
    <MainTemplate>
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1>Notes</h1>
          </Route>
          <Route path="/twitters">
            <h1>Twitters</h1>
          </Route>
          <Route path="/articles">
            <h1>Articles</h1>
          </Route>
          <Route path="*">
            <h1>Bad Gateway</h1>
          </Route>
        </Switch>
      </Router>
    </MainTemplate>
  );
}

export default Root;
