import { Route, Switch, Redirect } from "react-router";
import AdminDashboard from "../pages/admin/AdminDashboard";
import NewAccount from "../pages/admin/NewAccount";
import Reports from "../pages/admin/Reports";
import Settings from "../pages/admin/Settings";

const AdminRoutes = () => {
    return (<Switch>
      <Route exact path="/">
        <Redirect to="/dashboard"/>
      </Route>
      <Route exact path="/dashboard" component={AdminDashboard} />
      <Route exact path="/newAccount" component={NewAccount}/>
      <Route exact path="/reports" component={Reports}/>
      <Route exact path="/settings" component={Settings}/>
      <Route path="*">
        <Redirect to="/oops" />
      </Route>
    </Switch>)
}

export default AdminRoutes