import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
/*Login Authentication*/
import Login  from './Login/Login';
import ResetPassword from './Login/ResetPassword';
import ResetInstructions from './Login/ResetInstructions';
/*Set1 Dashboard components*/
import Dashboard from './components/Set1/Dashboard/Dashboard';
import Project from './components/Set1/Project/Project';
import Report from './components/Set1/Report/Report';
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
import UserManage from './components/Set2/Users/UserManage';

import Role from './components/Set2/Profile/Role';
import SupervisorSettings from './components/Set2/Profile/Settings';

import SuperProject from './components/Set2/Dashboard/SuperProject';
import Supervisor from './components/Set2/Dashboard/Supervisor';
import Agent from './components/Set2/Dashboard/Agent';
import Reviewer from './components/Set2/Dashboard/Reviewer'
import Supervisorx from './components/Set2/Dashboard/Supervisorx';
import Agentx from './components/Set2/Dashboard/Agentx';
import Reviewerx from './components/Set2/Dashboard/Reviewerx';

import Overview from './components/Set2/Project/Overview';
import SupervisorOverview from './components/Set2/Project/SupervisorOverview';
import AgentOverview from './components/Set2/Project/AgentOverview';
import ReviewerOverview from './components/Set2/Project/ReviewerOverview';

import Tasks from './components/Set2/Project/Tasks';

import DashboardThree from './components/Set3/Dashboard/DashboardThree';
import ProjectPM from './components/Set3/Project/Project';
import UsersPM from './components/Set3/Users/User';
import CreateUserPM from './components/Set3/Users/CreateUserPM';

import './App.css';



function App() {
  return (
    <div className="container-fluid">
      <HashRouter>
            <Switch>
              <Route exact path="/" name="Agent login" component={Login} />
              <Route exact path="/login/resetpassword" name="Reset Password" component={ResetPassword} />
              <Route exact path="/resetpassword/instructions" name="Reset Instructions" component={ResetInstructions} />
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
              <Route exact path="/usermanage" name="UserManage" component={UserManage} />

              <Route exact path="/superproject" name="SuperProject" component={SuperProject} />
              <Route exact path="/projectx/supervisor" name="Supervisor" component={Supervisor} />
              <Route exact path="/agent" name="Agent" component={Agent} />
              <Route exact path="/reviewer" name="Reviewer" component={Reviewer} />
              <Route exact path="/supervisorx" name="Supervisorx" component={Supervisorx} />
              <Route exact path="/agentx" name="Agentx" component={Agentx} />
              <Route exact path="/reviewerx" name="Reviewerx" component={Reviewerx} />

              <Route exact path="/role" name="Role" component={Role} />
              <Route exact path="/supervisor/settings" name="SupervisorSettings" component={SupervisorSettings} />

              <Route exact path="/overview" name="Overview" component={Overview} />
              <Route exact path="/overview/supervisor" name="SupervisorOverview" component={SupervisorOverview} />
              <Route exact path="/overview/agent" name="AgentOverview" component={AgentOverview} />
              <Route exact path="/overview/reviewer" name="ReviewerOverview" component={ReviewerOverview} />
              <Route exact path="/tasks" name="Tasks" component={Tasks} />

              <Route exact path="/projectmanager" name="DashboardThree" component={DashboardThree} />
              <Route exact path="/pmadmin/project" name="ProjectPM" component={ProjectPM} />
              <Route exact path="/pm/users" name="UsersPM"  component={UsersPM} />
              <Route exact path="/pm/create" name="CreateUserPM" component={CreateUserPM} />
            </Switch>
      </HashRouter>
    </div>
       
  );
}

export default App;
