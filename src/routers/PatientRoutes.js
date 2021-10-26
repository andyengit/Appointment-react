import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import useAuth from "../Auth/useAuth"
import PatientDashboard from "../pages/patient/PatientDashboard";
import Appointment from "../pages/patient/Appointment";
import CheckOut from "../pages/patient/CheckOut";
import History from "../pages/patient/History";

const PatientRoutes = () => {

  const auth = useAuth();
  if (auth.user !== null && auth.user.role === "PATIENT") {
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
  } else {
    return <Redirect to="/oops" />
  }
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
