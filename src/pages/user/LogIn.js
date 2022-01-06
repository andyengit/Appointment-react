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

const LogIn = () => {
  const auth = useAuth();
  const history = useHistory();
  const [data, setdata] = useState({ role: "patient" });
  const [error, seterror] = useState(false);

  const handleLogin = () => {
    seterror({ message: undefined, status: false });

    axios
      .post(api.url + "/user/login", data)
      .then((res) => {
        if (res.statusText === "OK" && !res.data.message) {
          auth.login("P", {
            logIn: true,
            role: "patient",
            jw: res.data.jw,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            ci: res.data.ci,
            email: res.data.email,
            user_id: res.data.user_id,
            city_id: res.data.city_id,
          });
          history.push("/dashboard");
        }
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
        <h3>Iniciar sesion</h3>\
        {error.message !== undefined && (
          <Message type={"m-error"} content={error.message.toString()} />
        )}
        <div className="form">
          <Input
            onChange={(e) => setdata({ ...data, email: e.target.value })}
            type="email"
            autocomplete="on"
            placeholder="Correo"
          />
          <Input
            onEnter={handleLogin}
            onChange={(e) => setdata({ ...data, password: e.target.value })}
            type="password"
            placeholder="Contraseña"
          />
          <Button onClick={handleLogin} title="Enviar" />
          <div className="links">
            <Link to={"/login/doctor"} className="link">¿Eres doctor?</Link>
            <Link to={"#"} className="link">¿Olvidaste tu contraseña?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
