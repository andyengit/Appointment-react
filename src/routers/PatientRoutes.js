import { Route, Switch, Redirect } from "react-router";
import PatientDashboard from "../pages/patient/PatientDashboard";
import Appointment from "../pages/patient/Appointment";
import CheckOut from "../pages/patient/CheckOut";
import History from "../pages/patient/History";

const PatientRoutes = () => {
    return (<Switch>
      <Route exact path="/">
        <Redirect to="/dashboard"/>
      </Route>
      <Route exact path="/dashboard" component={PatientDashboard} />
      <Route path="/Appointment" component={AppointmentCase} />
      <Route path="/History" component={History}/>
      <Route path="*">
        <Redirect to="/oops" />
      </Route>
    </Switch>)
}

const AppointmentCase = () => {
  return (
    <Switch>
      <Route exact path="/Appointment/CheckOut" component={CheckOut} />
      <Route exact path="/Appointment" component={Appointment} />
      <Route path="*">
        <Redirect to="/oops" />
      </Route>
    </Switch>)
}

export default PatientRoutes
