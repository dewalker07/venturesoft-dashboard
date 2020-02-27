import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login  from './Login/Login';
import Dashboard from './components/Set1/Dashboard/Dashboard';
import Project from './components/Set1/Project/Project';
import Report from './components/Set1/Report/Report';
import ResetPassword from './Login/ResetPassword';
import Profile from './components/Set1/Profile/Profile';
import Settings from './components/Set1/Settings/Settings';
import Production from './components/Set1/Project/Production';
import Review from './components/Set1/Project/Review';
import Productionx from './components/Set1/Project/Productionx';
import Reviewx from './components/Set1/Project/Reviewx';

import DashboardTwo from './components/Set2/Dashboard/DashboardTwo';
import ProjectSupervisor from './components/Set2/Project/Project';
import ReportSupervisor from './components/Set2/Reports/Report';
import User from './components/Set2/Users/User';
import CreateUser from './components/Set2/Users/CreateUser';

import Role from './components/Set2/Profile/Role';
import SupervisorSettings from './components/Set2/Profile/Settings';

import './App.css';


function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
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

              <Route exact path="/supervisor" name="DashboardTwo" component={DashboardTwo} />
              <Route exact path="/project/supervisor" name="ProjectSupervisor" component={ProjectSupervisor} />
              <Route exact path="/report/supervisor" name="ReportSupervisor" component={ReportSupervisor} />
              <Route exact path="/users" name="User" component={User} />
              <Route exact path="/create/user" name="CreateUser" component={CreateUser} />

              <Route exact path="/role" name="Role" component={Role} />
              <Route exact path="/supervisor/settings" name="SupervisorSettings" component={SupervisorSettings} />

            </Switch>
      </BrowserRouter>
    </div>
       
  );
}

export default App;
