import { Route, Switch, Redirect } from "react-router";
import useAuth from "../Auth/useAuth"
import Home from "../pages/user/Home";
import LogIn from "../pages/user/LogIn";
import SignIn from "../pages/user/SignIn";
import Search from "../pages/user/Search";
import DocProfile from "../pages/admin/DocProfile";
import Contact from "../pages/user/Contact";
import AboutUs from "../pages/user/AboutUs";
import DocInfo from "../pages/user/DocInfo";
import LogInDoc from "../pages/user/LogInDoc";
import LoginAdm from "../pages/user/LoginAdm";
import ForgotPassword from "../pages/user/ForgotPassword";
import Doctors from "../pages/user/Doctors"

const PublicRoutes = () => {

  const auth = useAuth();
  if (auth.user === null) {
    return (<Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/aboutUs" component={AboutUs}/>
      <Route exact path="/doc-info" component={DocInfo}/>
      <Route exact path="/Forgot" component={ForgotPassword}/>
      <Route exact path="/doctors" component={Doctors}/>
      <Route path="/login/doctor" component={LogInDoc}/>
      <Route path="/login/admin" component={LoginAdm}/>
      <Route path="/login" component={LogIn}/>
      <Route path="/search/:speciality" component={Search}/>
      <Route path="/search/" component={Search}/>
      <Route path="/profile/:ci" component={DocProfile}/>
      <Route path="*">
        <Redirect to="/oops"/>
      </Route>
    </Switch>)
  } else {
    return <Redirect to="/oops"/>
  }
}

export default PublicRoutes;