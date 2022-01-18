import Input from "../../Components/Input";
import "./Session.css";
import { useState, useEffect } from "react";
import axios from "axios";
import api from "../../Helpers/api.json";
import { useHistory } from "react-router-dom";
import useAuth from "../../Auth/useAuth";
import Button from "../../Components/Button";
import Back from "../../Components/Back";
import Message from "../../Components/Message";

const SignIn = () => {
  const [data, setdata] = useState({ role: "patient" });
  const [address, setaddress] = useState(null);
  const [state, setstate] = useState(null);
  const [city, setcity] = useState(null);
  const [select, setselect] = useState(null);
  const [error, seterror] = useState(false);
  const history = useHistory();
  const auth = useAuth();

  useEffect(() => {
    axios
      .get(api.url + "/address")
      .then((res) => {
        setaddress(res.data);
        let array = res.data.map((el) => el.state_name);
        let result = array.filter((item, index) => {
          return array.indexOf(item) === index;
        });
        setstate(result);
      })
  }, []);

  useEffect(() => {
    if (address !== null) {
      let array = address.filter((el) => {
        if (select === el.state_name) return true;
        return false;
      });
      setcity(array);
    }
  }, [select, address]);

  const register = () => {
    seterror({message: undefined, status: false})
    axios
      .post(api.url + "/patient", data)
      .then((res) => {
        if (res.status === 201) {
          auth.login("P", {
            logIn: true,
            role: data.role,
            jw: "123456789",
            firstname: data.firstname,
            lastname: data.lastname,
            ci: data.ci,
            email: data.email,
          });
          history.push("/dashboard");
        }
      })
      .catch(er => seterror({message: er.response.data.error+" : "+er.response.statusText, status: true}));
  };

  return (
    <div className="content-session">
      <Back />
      <div className="container-session">
        <h3>Create una cuenta</h3>
        {error.message !== undefined && <Message type={"m-error"} content={error.message.toString()}/>}
        <div className="form">
          <Input
            onChange={(e) => setdata({ ...data, firstname: e.target.value.trim() })}
            placeholder="Nombre"
          />
          <Input
            onChange={(e) => setdata({ ...data, lastname: e.target.value.trim() })}
            placeholder="Apellido"
          />
          <Input
            onChange={(e) => setdata({ ...data, ci: e.target.value.trim() })}
            placeholder="Cedula"
          />
          <Input
            type="password"
            onChange={(e) => setdata({ ...data, password: e.target.value.trim() })}
            placeholder="Contraseña"
          />
          <Input
            type="email "
            onChange={(e) => setdata({ ...data, email: e.target.value.trim() })}
            placeholder="Correo electronico"
          />
          <select onChange={(e) => setselect(e.target.value.trim())}>
            <option value="">Selecciona el estado</option>
            {!!state &&
              state.map((el, key) => (
                <option key={key} value={el}>
                  {el}
                </option>
              ))}
          </select>
          {!!select && (
            <select
              onChange={(e) => setdata({ ...data, city_id: e.target.value })}
            >
              <option value="">Selecciona la ciudad</option>
              {city.map((el, key) => (
                <option key={key} value={el.city_id}>
                  {el.city_name}
                </option>
              ))}
            </select>
          )}
          <Button onClick={register} title="Enviar" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
