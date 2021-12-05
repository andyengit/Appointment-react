import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Footer from "../Layouts/Footer"
import Header from "../Layouts/Header"
import Oops from "../pages/Oops"
import ShowComponent from "../Auth/ShowComponent"

const AppRouter = () => {

  const showComponent = ShowComponent();
 
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/oops" component={Oops}/> 
          <Route path="/" children={showComponent}/>
          <Route path="*">
            <Redirect to="/oops"/>
          </Route>  
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default AppRouter
