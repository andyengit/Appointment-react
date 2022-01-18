import { Route, Switch, Redirect } from "react-router";
import AdminDashboard from "../pages/admin/AdminDashboard";
import NewAccount from "../pages/admin/NewAccount";
import Reports from "../pages/admin/Reports";
import New from "../pages/admin/New";
import NewSpeciality from "../pages/admin/NewSpeciality";
import Edit from "../pages/admin/Edit";
import AdmDoc from "../pages/admin/AdmDoc";
import AdmAppointment from "../pages/admin/AdmAppointment";
import AdmEspecialty from "../pages/admin/AdmEspecialty";
import DocProfile from "../pages/admin/DocProfile";
import Tests from "../pages/admin/Tests";

const AdminRoutes = () => {
  return (<Switch>
    <Route exact path="/">
      <Redirect to="/dashboard" />
    </Route>
    <Route exact path="/dashboard" children={<AdminDashboard />} />
    <Route exact path="/reports" component={Reports} />
    <Route exact path="/test" component={Tests}/>
    <Route path="/profile/:ci" component={DocProfile} />
    <Route path="/new" component={NewPage} />
    <Route path="/edit" component={EditPage} />
    <Route path="*">
      <Redirect to="/oops" />
    </Route>
  </Switch>)
}

const NewPage = () => {
  return (
    <Switch>
      <Route exact path="/new/Account" component={NewAccount} />
      <Route exact path="/new/Speciality" component={NewSpeciality} />
      <Route exact path="/New" component={New} />
      <Route path="/New/*">
        <Redirect to="/oops" />
      </Route>
    </Switch>)
}

const EditPage = () => {
  return (
    <Switch>
      <Route exact path="/edit/doc" component={AdmDoc} />
      <Route exact path={"/edit/appointment"} component={AdmAppointment} />
      <Route exact path="/edit/especiality" component={AdmEspecialty} />
      <Route exact path="/edit" component={Edit} />
      <Route path="/edit/*">
        <Redirect to="/oops" />
      </Route>
    </Switch>
  )
}

export default AdminRoutes