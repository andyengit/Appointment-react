import { useHistory } from "react-router";
import useAuth from "../../Auth/useAuth";
import { useState } from "react";
import Alert from "../../Components/Alert";
import axios from "axios";
import api from "../../Helpers/api.json";
import Input from "../../Components/Input";

const LogIn = () => {
  const auth = useAuth();
  const history = useHistory();
  const [data, setdata] = useState({role : "patient"});
  const [error, seterror] = useState(false);
  
  const handleLogin = () => {

    axios.post(api.url+"/user/login",data)
    .then(res => {
      if(res.statusText === "OK" && !res.data.message){
        auth.login("P", {
          "logIn": true,
          "role": "patient",
          "jw": res.data.jw,
          "firstname": res.data.firstname,
          "lastname": res.data.lastname,
          "ci": res.data.ci,
          "email": res.data.email,
          "user_id" : res.data.user_id,
          "city_id" : res.data.city_id
        })
        history.push("/dashboard")
      }
    })
    .catch(seterror(true)) 
  }

  return (
    <div className="content-session">
      {error && <Alert title="Error" message="Datos erroneos" close={seterror}/>}
      <div className="container-session">
        <h3>Create una cuenta</h3>
        <div className="form">
          <Input onChange={(e) => setdata({...data, email : e.target.value})} type="email" autocomplete="on" placeholder="Correo" />
          <Input onEnter={handleLogin} onChange={(e) => setdata({...data, password : e.target.value})} type="password" placeholder="Contraseña" />
          <button onClick={handleLogin}>Enviar</button>
          <button onClick={() => auth.login("D")}>Doctor</button>
          <button onClick={() => auth.login("A")}>ADMIN</button>
        </div>
      </div>
    </div> 
  )
}

export default LogIn
