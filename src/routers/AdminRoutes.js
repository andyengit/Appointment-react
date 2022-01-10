import { Route, Switch, Redirect } from "react-router";
import AdminDashboard from "../pages/admin/AdminDashboard";
import NewAccount from "../pages/admin/NewAccount";
import Reports from "../pages/admin/Reports";
import Settings from "../pages/admin/Settings";
import New from "../pages/admin/New";
import NewSpeciality from "../pages/admin/NewSpeciality";
import Edit from "../pages/admin/Edit";
import AdmDoc from "../pages/admin/AdmDoc";
import AdmAppointment from "../pages/admin/AdmAppointment";

const AdminRoutes = () => {
    return (<Switch>
      <Route exact path="/">
        <Redirect to="/dashboard"/>
      </Route>
      <Route exact path="/dashboard" children={<AdminDashboard/>}/>
      <Route exact path="/reports" component={Reports}/>
      <Route exact path="/settings" component={Settings}/>
      <Route path="/new" component={NewPage} />
      <Route path="/edit" component={EditPage}/>
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
  return(
    <Switch>
      <Route exact path="/edit/doc" component={AdmDoc}/>
      <Route exact path={"/edit/appointment"} component={AdmAppointment}/>
      <Route exact path="/edit" component={Edit} />
      <Route path="/edit/*">
        <Redirect to="/oops" />
      </Route>
    </Switch>
  )
}

export default AdminRoutes