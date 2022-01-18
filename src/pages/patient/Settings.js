import Back from "../../Components/Back"
import Input from "../../Components/Input"
import useAuth from "../../Auth/useAuth"
import Button from "../../Components/Button"
import "../user/Session.css"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import api from "../../Helpers/api.json"

const Settings = () => {

  const {user,setUser} = useAuth();
  const [inputs, setinputs] = useState(null)
  const [initialData, setinitialData] = useState(null)

  useEffect(() => {
    axios.get(api.url+"/patient/"+user.ci)
    .then(res => setinitialData(res.data[0]))
  }, [user])

  const handleUpdate = () => {
    if (inputs.firstname !== "" && inputs.lastname !== "") {
      axios.put(api.url + "/patient/" + user.ci, {...initialData, firstname: inputs.firstname, lastname: inputs.lastname})
        .then(() => {
          setUser({ ...user, firstname: inputs.firstname, lastname: inputs.lastname })
        })
    }
  }

  return (
    <div className="content-session">
      <Back />
      <div className="container-session">
        <h4>Datos personales</h4>
        <div>
          <Input onChange={(e) => setinputs({...inputs, firstname: e.target.value.trim()})} placeholder={!!user && user.firstname} />
          <Input onChange={(e) => setinputs({...inputs, lastname: e.target.value.trim()})} placeholder={!!user && user.lastname} />
          <Input disabled placeholder={!!user && user.ci} />
          <Input disabled placeholder={user.email} />
          <Button onClick={handleUpdate} title="Guardar cambios"/>
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
