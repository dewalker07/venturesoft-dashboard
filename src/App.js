import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login  from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import Project from './Project/Project';
import Report from './Report/Report';
import ResetPassword from './Login/ResetPassword';
import Profile from './Profile/Profile';
import Settings from './Settings/Settings';
import Production from './Project/Production';
import Review from './Project/Review';
import Productionx from './Project/Productionx';
import Reviewx from './Project/Reviewx';

import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
            <Switch>
              <Route exact path="/" name="Agent login" component={Login} />
              <Route exact path="/login/resetpassword" name="Reset Password" component={ResetPassword} />
              <Route exact path="/dashboard" name="Dashboard" component={Dashboard} />
              <Route exact path="/project" name="Project" component={Project} />
              <Route exact path="/report" name="Report" component={Report} />
              <Route exact path="/profile" name="Profile" component={Profile} />
              <Route exact path="/settings" name="Settings" component={Settings} />
              <Route exact path="/production" name="Production" component={Production} />
              <Route exact path="/review" name="Review" component={Review} />
              <Route exact path="/projectx" name="Productionx" component={Productionx} />
              <Route exact path="/reviewx" name="Reviewx" component={Reviewx} />
            </Switch>
      </BrowserRouter>
    </div>
       
  );
}

export default App;
