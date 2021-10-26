import { Route, Switch, Redirect } from "react-router";
import useAuth from "../Auth/useAuth"
import Home from "../pages/user/Home";
import LogIn from "../pages/user/LogIn";
import SignIn from "../pages/user/SignIn";
import Search from "../pages/user/Search";
import DocProfile from "../pages/admin/DocProfile";

const PublicRoutes = () => {

  const auth = useAuth();
  if (auth.user === null) {
    return (<Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/login" component={LogIn}/>
      <Route exact path="/signin" component={SignIn}/>
      <Route path="/search/:speciality" component={Search}/>
      <Route path="/search/" component={Search}/>
      <Route path="/profile/:id" component={DocProfile}/>
      <Route path="*">
        <Redirect to="/oops"/>
      </Route>
    </Switch>)
  } else {
    return <Redirect to="/oops"/>
  }
}

export default PublicRoutes;