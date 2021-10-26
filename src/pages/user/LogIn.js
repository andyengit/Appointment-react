import { useHistory } from "react-router";
import useAuth from "../../Auth/useAuth";

const LogIn = () => {
  const auth = useAuth();
  const history = useHistory();
  
  const handleLoginD = () => {
    auth.login("D");
    history.push("/dashboard")
  }
  const handleLoginP = () => {
    auth.login("P");
    history.push("/dashboard")
  }
  const handleLoginA = () => {
    auth.login("A");
    history.push("/dashboard")
  }

  return (
    <div className="content">
        <form className="form">
          <button onClick={handleLoginD}>LogIn Doctor</button>
          <button onClick={handleLoginP}>Login Patient</button>
          <button onClick={handleLoginA}>Login Admin</button>        
        </form>
    </div>  
  )
}

export default LogIn
