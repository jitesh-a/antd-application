import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ApplicationScreen from './screens/ApplicationScreen';
import SignIn from './screens/SignIn';


function Routes() {
  return (
    <Switch>
      <Route path="/application">
        <ApplicationScreen />
      </Route>
      <Route path="/">
        <SignIn />
      </Route>
    </Switch>
  )
}

export default Routes;