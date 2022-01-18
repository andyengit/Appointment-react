import Back from "../../Components/Back";
import Input from "../../Components/Input";
import useAuth from "../../Auth/useAuth";
import Button from "../../Components/Button";
import "../user/Session.css";
import axios from "axios";
import api from "../../Helpers/api.json";
import { useState, useEffect } from "react";
import formatHour from "../../Functions/formatHour"

const Settings = () => {

  const { user, setUser } = useAuth();
  const [initialData, setinitialData] = useState(null)
  const [inputs, setinputs] = useState(null)

  useEffect(() => {
    axios.get(api.url + "/doctor/" + user.ci)
      .then(res => { setinputs(res.data[0]); setinitialData(res.data[0]) })
  }, [user])

  const updateData = () => {
    if (inputs.firstname !== "" && inputs.lastname !== "") {
      axios.put(api.url + "/doctor/" + user.ci, { ...initialData, firstname: inputs.firstname, lastname: inputs.lastname })
        .then(() => {
          setUser({ ...user, firstname: inputs.firstname, lastname: inputs.lastname })
        })
    }
  }


  const updateImage = (e) => {
    if (inputs.image !== "" || !!inputs.image) {
      let render = new FileReader();
      render.readAsDataURL(e.target.files[0]);
      render.onloadend = () => {
        axios.put(api.url + "/doctor/" + user.ci, { ...initialData, image: render.result })
      }
    }
  }

  const updateAppointment = () => {
    if (inputs.starts_at !== "" && inputs.ends_at !== "" && inputs.cost !== "" && (inputs.starts_at !== initialData.starts_at || inputs.ends_at !== initialData.ends_at || inputs.cost !== initialData.cost)) {
      axios.put(api.url + "/doctor/" + user.ci, { ...inputs, starts_at: formatHour(inputs.starts_at), ends_at: formatHour(inputs.ends_at), firstname: initialData.firstname, lastname: initialData.lastname })
        .then(() => {
          axios.get(api.url + "/doctor/" + user.ci)
            .then(res => { setinitialData(res.data[0]) })
        })
    }
  }

  return (
    <div className="content-session">
      <Back />
      <div className="container-session">

        <h4>Datos personales</h4>
        <div>
          <Input onChange={(e) => setinputs({ ...inputs, firstname: e.target.value.trim() })} placeholder={!!user && user.firstname} />
          <Input onChange={(e) => setinputs({ ...inputs, lastname: e.target.value.trim() })} placeholder={!!user && user.lastname} />
          <Input disabled placeholder={!!user && user.ci} />
          <Input disabled placeholder={user.email} />
          <Button onClick={updateData} title="Guardar cambios" />
        </div>
        <h4>Foto</h4>
        <div>
          <input type="file" onChange={updateImage} />
          <Button title="Guardar cambios" />
        </div>

        <h4>Consultas</h4>
        <div>
          <p>Entrada</p>
          <Input type={"time"} onChange={(e) => setinputs({ ...inputs, starts_at: e.target.value.trim() })} title="Entrada" />
          <p>Salida</p>
          <Input type={"time"} onChange={(e) => setinputs({ ...inputs, ends_at: e.target.value.trim() })} title="Salida" />
          <Input type={"number"} onChange={(e) => setinputs({ ...inputs, cost: e.target.value.trim() })} placeholder={"Costo: "} />
          <Button onClick={updateAppointment} title="Guardar cambios" />
        </div>

        <h4>Seguridad</h4>
        <div>
          <Input placeholder="Nueva contraseña" />
          <Input placeholder="Contraseña actual" />
          <Button title="Guardar cambios" />
        </div>
      </div>
    </div>
  )
}

export default Settings
