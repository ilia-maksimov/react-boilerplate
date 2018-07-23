import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Test } from './../../components/test/test.component';
import { hot } from 'react-hot-loader';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={Test} />
  </Switch>
));
