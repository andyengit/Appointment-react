import { useHistory } from "react-router";
import useAuth from "../../Auth/useAuth";
import { useState } from "react";
import axios from "axios";
import api from "../../Helpers/api.json";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Back from "../../Components/Back";
import Message from "../../Components/Message";
import { Link } from "react-router-dom";

const LogInDoc = () => {
  const auth = useAuth();
  const history = useHistory();
  const [data, setdata] = useState({ role: "patient" });
  const [error, seterror] = useState(false);

  const handleLogin = () => {
    seterror({ message: undefined, status: false });

    axios.get(api.url+"/doctor/28493779")
    .then((res) => {
      auth.login("D", {
        logIn: true,
        role: "doctor",
        firstname: res.data[0].firstname,
        lastname: res.data[0].lastname,
        ci: res.data[0].ci,
        user_id: res.data[0].user_id,
        email: "doc@medtime.com"
      });
      history.push("/dashboard");
    })
    .catch((er) =>
        seterror({
          message: er.response.data.error + " : " + er.response.statusText,
          status: true,
        })
      );
  };

  return (
    <div className="content-session">
      <Back />
      <div className="container-session">
        <h3>Iniciar sesion como Doctor</h3>\
        {error.message !== undefined && (
          <Message type={"m-error"} content={error.message.toString()} />
        )}
        <div className="form">
          <Input
            onChange={(e) => setdata({ ...data, email: e.target.value.trim() })}
            type="email"
            autocomplete="on"
            placeholder="Correo"
          />
          <Input
            onEnter={handleLogin}
            onChange={(e) => setdata({ ...data, password: e.target.value.trim() })}
            type="password"
            placeholder="Contraseña"
          />
          <Button onClick={handleLogin} title="Enviar" />
          <div className="links">
            <Link to="/login" className="link">¿Eres usuario?</Link>
            <Link to="/forgot" className="link">¿Olvidaste tu contraseña?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInDoc;
