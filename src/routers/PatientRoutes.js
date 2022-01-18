import { Route, Switch, Redirect } from "react-router";
import PatientDashboard from "../pages/patient/PatientDashboard";
import Appointment from "../pages/patient/Appointment";
import CheckOut from "../pages/patient/CheckOut";
import History from "../pages/patient/History";
import Settings from "../pages/patient/Settings";
import DocProfile from "../pages/admin/DocProfile";
import Doctors from "../pages/user/Doctors";

const PatientRoutes = () => {
    return (<Switch>
      <Route exact path="/">
        <Redirect to="/dashboard"/>
      </Route>
      <Route exact path="/dashboard" component={PatientDashboard} />
      <Route exact path="/Settings" component={Settings}/>
      <Route exact path="/CheckOut" component={CheckOut} />
      <Route exact path="/doctors" component={Doctors}/>
      <Route path="/profile/:ci" component={DocProfile}/>
      <Route path="/search/:speciality" component={Appointment} />
      <Route path="/search/" component={Appointment} />
      <Route path="/History" component={History}/>
      <Route path="*">
        <Redirect to="/oops" />
      </Route>
    </Switch>)
}

export default PatientRoutes
