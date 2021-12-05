import axios from "axios";
import { useState } from "react";
import Input from "../../Components/Input";
import api from "../../Helpers/api.json"
import Back from "../../Components/Back";

const NewAccount = () => {
  const [inputs, setInputs] = useState({})
  const [correct, setcorrect] = useState(false)
  const [send, setsend] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();
    setsend(true);
    axios.post(api.url+"/doctor", {
      role: "doctor",
      ...inputs
    })
    .then(res=> res.status !== 422 && setcorrect(true))
    .catch()
  }

  return (
    <div className="content">
       <Back/>
       
      <div className="container">
        <form onSubmit={onSubmit} className="form">
          {!!correct && <h2>Registro Exitoso</h2>  }
          {(send && !correct) && <h2>Datos erroneos</h2> }
          <Input placeholder="Nombre" onChange={(e) => setInputs({ ...inputs, firstname: e.target.value })}/>
          <Input placeholder="Apellido" onChange={(e) => setInputs({ ...inputs, lastname: e.target.value})}/>
          <Input placeholder="Correo" type="email" onChange={(e) => setInputs({ ...inputs, email: e.target.value })}/>
          <Input placeholder="Contraseña" type="password" onChange={(e) => setInputs({ ...inputs, password: e.target.value })}/>
          <Input placeholder="CI" onChange={(e) => setInputs({ ...inputs, ci: e.target.value })}/>
          <Input placeholder="Inicia" type="time" onChange={(e) => setInputs({ ...inputs, starts_at: e.target.value })}/>
          <Input placeholder="Termina" type="time" onChange={(e) => setInputs({ ...inputs, ends_at: e.target.value })}/>
          <Input placeholder="Precio de consulta" type="number" onChange={(e) => setInputs({ ...inputs, cost: e.target.value })}/>
          <button type="submit">Registrar Doctor</button>
        </form>
      </div>
    </div>
  )
}

export default NewAccount
