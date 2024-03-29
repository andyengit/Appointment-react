import axios from "axios";
import { useState } from "react";
import Input from "../../Components/Input";
import api from "../../Helpers/api.json";
import Back from "../../Components/Back";
import Message from "../../Components/Message";
import formatHour from "../../Functions/formatHour"

const NewAccount = () => {
  const [inputs, setInputs] = useState({});
  const [correct, setcorrect] = useState(false);
  const [error, seterror] = useState(false);

  const verify = () => {
    if (Object.keys(inputs).length === 9) {
      if (Object.keys(inputs).find(e => e !== "")) {
        return true;
      }
    }
    seterror({
      message: "Datos incompletos",
      status: true
    })
    return false;
  }

  const onSubmit = (e) => {
    seterror({ message: undefined, status: false });
    setcorrect(false);
    e.preventDefault();

    if (verify()) {
      axios
        .post(api.url + "/doctor", {
          role: "doctor",
          ...inputs,
          starts_at: formatHour(inputs.starts_at),
          ends_at : formatHour(inputs.ends_at)
        })
        .then((res) => {
          res.status !== 422 && setcorrect(true);
          setInputs(null)
        })
        .catch((er) =>
          seterror({
            message: er.response.data.error + " : " + er.response.statusText,
            status: true,
          })
        );
    }
  };

  const handle64 = (e) => {
    if (!!e.target.files[0]) {
      let render = new FileReader();
      render.readAsDataURL(e.target.files[0]);
      render.onloadend = () => {
        setInputs({ ...inputs, image: render.result });
      }
    }
  }

  return (
    <div className="content">
      <Back />
      <div className="container">
        <form onSubmit={onSubmit} className="form">
          {!!correct && (
            <Message type={"m-done"} content={"Doctor creado exitosamente"} />
          )}
          {error.message !== undefined && (
            <Message type={"m-error"} content={error.message.toString()} />
          )}
          <Input
            placeholder="Nombre"
            onChange={(e) =>
              setInputs({ ...inputs, firstname: e.target.value.trim() })
            }
          />
          <Input
            placeholder="Apellido"
            onChange={(e) => setInputs({ ...inputs, lastname: e.target.value.trim() })}
          />
          <Input
            placeholder="Correo"
            type="email"
            onChange={(e) => setInputs({ ...inputs, email: e.target.value.trim() })}
          />
          <Input
            placeholder="Contraseña"
            type="password"
            onChange={(e) => setInputs({ ...inputs, password: e.target.value.trim() })}
          />
          <Input
            placeholder="CI"
            onChange={(e) => setInputs({ ...inputs, ci: e.target.value.trim() })}
          />
          <Input
            placeholder="Inicia"
            type="time"
            onChange={(e) =>
              setInputs({ ...inputs, starts_at: e.target.value.trim() })
            }
          />
          <Input
            placeholder="Termina"
            type="time"
            onChange={(e) => setInputs({ ...inputs, ends_at: e.target.value.trim() })}
          />
          <Input
            placeholder="Precio de consulta"
            type="number"
            onChange={(e) => setInputs({ ...inputs, cost: e.target.value.trim() })}
          />
          <input type="file" onChange={handle64} />
          <button type="submit">Registrar Doctor</button>
        </form>
      </div>
    </div>
  );
};

export default NewAccount;
