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
import ProductionReport from './components/Set2/Reports/ProductionReport';
import ReviewerReport from './components/Set2/Reports/ReviwerReport';
import User from './components/Set2/Users/User';
import CreateUser from './components/Set2/Users/CreateUser';
import UserManage from './components/Set2/Users/UserManage';
import ActivationLinkManage from './components/Set2/Users/ActivationLink';

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
import SupervisorAgentTask from './components/Set2/Project/SupervisorAgentTask';
import SupervisorReviewerTask from './components/Set2/Project/SupervisorReviewerTask';
import SupervisorSampling from './components/Set2/Project/Sampling/SupervisorSampling';
import SupervisorView from './components/Set2/Project/View/SupervisorView';

import DashboardThree from './components/Set3/Dashboard/DashboardThree';
import PmSupervisor from './components/Set3/Dashboard/Supervisor';
import PmAgent from './components/Set3/Dashboard/Agent';
import PmReviewer from './components/Set3/Dashboard/Reviewer';
import PmSupervisorx from './components/Set3/Dashboard/Supervisorx';
import PmAgentx from './components/Set3/Dashboard/Agentx';
import PmReviewerx from './components/Set3/Dashboard/Reviewerx';
import PmOverview from './components/Set3/Project/Overview';
import PmOverviewAgent from './components/Set3/Project/AgentOverview';
import PmOverviewReviewer from './components/Set3/Project/ReviewerOverview';
import PmTasks from './components/Set3/Project/Tasks';
import PmAgentTask from './components/Set3/Project/PmAgentTask';
import PmReviewerTask from './components/Set3/Project/PmReviewerTask';
import ProjectPM from './components/Set3/Project/Project';
import UsersPM from './components/Set3/Users/User';
import CreateUserPM from './components/Set3/Users/CreateUserPM';
import PMRole from './components/Set3/Profile/Role';
import PMSettings from './components/Set3/Profile/Settings';
import PMUserManage from './components/Set3/Users/UserManage';
import ActivationLink from './components/Set3/Users/ActivationLink';
import SetupProject from './components/Set3/SetupProject/SetupProject';
import ProjectSetupInput from './components/Set3/SetupProject/Input';
import Output from './components/Set3/SetupProject/Output';
import Api from './components/Set3/SetupProject/Api';
import SeedUpload from './components/Set3/SetupProject/SeedUpload';
import PmSampling from './components/Set3/Project/Sampling/PmSampling';
import PmView from './components/Set3/Project/View/View';

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
              <Route exact path="/production/reports" name="ProductionReport" component={ProductionReport} />
              <Route exact path="/reviews/reports" name="ReviewerReport" component={ReviewerReport} />
              <Route exact path="/users" name="User" component={User} />
              <Route exact path="/create/user" name="CreateUser" component={CreateUser} />
              <Route exact path="/usermanage" name="UserManage" component={UserManage} />
              <Route exact path="/activationlink" name="ActivationLinkManage" component={ActivationLinkManage} />

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
              <Route exact path="/supervisortasks" name="Tasks" component={Tasks} />
              <Route exact path="/supervisortasks/agent" name="SupervisorAgentTask" component={SupervisorAgentTask} />
              <Route eaxct path="/supervisortasks/reviewer" name="SupervisorReviewerTask" component={SupervisorReviewerTask} />
              <Route exact path="/supervisor/sampling" name="SupervisorSampling" component={SupervisorSampling} />
              <Route exact path="/supervisor/view" name="SupervisorView" component={SupervisorView} />


              <Route exact path="/projectmanager" name="DashboardThree" component={DashboardThree} />
              <Route exact path="/pmsupervisor" name="PmSupervisor" component={PmSupervisor} />
              <Route exact path="/pmagent" name="PmAgent" component={PmAgent} />
              <Route exact path="/pmreviewer" name="PmReviewer" component={PmReviewer} />
              <Route exact path="/pmsupervisorx" name="PmSupervisorx" component={PmSupervisorx} />
              <Route exact path="/pmagentx" name="PmAgentx" component={PmAgentx} />
              <Route exact path="/pmreviewerx" name="PmReviewerx" component={PmReviewerx} />
              <Route exact path="/pmoverview/supervisor" name="PmOverview" component={PmOverview} />
              <Route exact path="/pmoverview/agent" name="PmOverviewAgent" component={PmOverviewAgent} />
              <Route exact path="/pmoverview/reviewer" name="PmOverviewReviewer" component={PmOverviewReviewer} />
              <Route exact path="/pmtasks/supervisor" name="PmTasks" component={PmTasks} />
              <Route exact path="/pmtasks/agent" name="PmAgentTask" component={PmAgentTask} />
              <Route exact path="/pmtasks/reviewer" name="PmReviewerTask" component={PmReviewerTask} />
              <Route exact path="/pmadmin/project" name="ProjectPM" component={ProjectPM} />
              <Route exact path="/pm/users" name="UsersPM"  component={UsersPM} />
              <Route exact path="/pm/create" name="CreateUserPM" component={CreateUserPM} />
              <Route exact path="/pm/role" name="PMRole" component={PMRole} />
              <Route exact path="/pm/settings" name="PMSettings" component={PMSettings} />
              <Route exact path="/pm/usermanage" name="PMUserManage" component={PMUserManage} />
              <Route exact path="/activation/link" name="ActivationLink" component={ActivationLink} />
              <Route exact path="/clientinfo" name="SetupProject" component={SetupProject} />
              <Route exact path="/input" name="ProjectSetupInput" component={ProjectSetupInput} />
              <Route exact path="/output" name="Output" component={Output} />
              <Route exact path="/api" name="Api" component={Api} />
              <Route exact path="/seedupload" name="SeedUpload" component={SeedUpload} />
              <Route exact path="/pm/sampling" name="PmSampling" component={PmSampling} />
              <Route exact path="/pm/view" name="PmView" component={PmView} />
            </Switch>
      </HashRouter>
    </div>
       
  );
}

export default App;
