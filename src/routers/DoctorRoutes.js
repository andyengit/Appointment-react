import { Route, Switch, Redirect } from "react-router";
import DoctorDashboard from "../pages/doctor/DoctorDashboard";
import AppointmentDoc from "../pages/doctor/AppointmentDoc";
import AppointmentLast from "../pages/doctor/AppointmentLast";
import Settings from "../pages/doctor/Settings";
import CheckOut from "../pages/patient/CheckOut";
import Appointment from "../pages/patient/Appointment";
import DocProfile from "../pages/admin/DocProfile";

const PatientRoutes = () => {
    return (<Switch>
      <Route exact path="/">
        <Redirect to="/dashboard"/>
      </Route>
      <Route exact path="/dashboard" component={DoctorDashboard} />
      <Route exact path="/Appointment" component={AppointmentDoc}/>
      <Route exact path="/history" component={AppointmentLast} />
      <Route exact path="/CheckOut" component={CheckOut} />
      <Route path="/profile/:ci" component={DocProfile}/>
      <Route path="/search/:speciality" component={Appointment} />
      <Route path="/search/" component={Appointment} />
      <Route exact path="/settings" component={Settings} />
      <Route path="*">
        <Redirect to="/oops" />
      </Route>
    </Switch>)
}

export default PatientRoutes