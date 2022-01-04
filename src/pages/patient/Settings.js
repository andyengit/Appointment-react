import Back from "../../Components/Back"
import Input from "../../Components/Input"
import { useEffect, useState } from "react"
import axios from "axios"
import api from "../../Helpers/api.json"
import useAuth from "../../Auth/useAuth"
import Button from "../../Components/Button"
import "../user/Session.css"


const Settings = () => {

  const {user} = useAuth();
  const [data, setdata] = useState(null)

  useEffect(() => {
    axios.get(api.url+"/patient/"+user.ci)
    .then(res => setdata(res.data[0]))
    .catch();
  }, [user])

  return (
    <div className="content-session">
      <Back />
      <div className="container-session">
        <h4>Datos personales</h4>
        <div>
          <Input placeholder={!!data && data.firstname} />
          <Input placeholder={!!data && data.lastname} />
          <Input disabled placeholder={!!data && data.ci} />
          <Input disabled placeholder={user.email} />
          <Button title="Guardar cambios"/>
        </div>
        <h4>Seguridad</h4>
        <div>
          <Input placeholder="Nueva contraseña" />
          <Input placeholder="Contraseña actual" />
          <Button title="Guardar cambios"/>
        </div>
      </div>
    </div>
  )
}

export default Settings
