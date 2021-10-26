import { Route, Switch, Redirect } from "react-router";
import DoctorDashboard from "../pages/doctor/DoctorDashboard";
import AppointmentDoc from "../pages/doctor/AppointmentDoc";
import AppointmentLast from "../pages/doctor/AppointmentLast";

const PatientRoutes = () => {
    return (<Switch>
      <Route exact path="/">
        <Redirect to="/dashboard"/>
      </Route>
      <Route exact path="/dashboard" component={DoctorDashboard} />
      <Route exact path="/Appointment" component={AppointmentDoc}/>
      <Route exact path="/history" component={AppointmentLast} />
      <Route path="*">
        <Redirect to="/oops" />
      </Route>
    </Switch>)
}

export default PatientRoutes