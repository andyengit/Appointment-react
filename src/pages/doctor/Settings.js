import Back from "../../Components/Back"
import Input from "../../Components/Input"
import useAuth from "../../Auth/useAuth"
import Button from "../../Components/Button"
import "../user/Session.css"


const Settings = () => {

  const {user} = useAuth();

  return (
    <div className="content-session">
      <Back />
      <div className="container-session">
        <h4>Datos personales</h4>
        <div>
          <Input placeholder={!!user && user.firstname} />
          <Input placeholder={!!user && user.lastname} />
          <Input disabled placeholder={!!user && user.ci} />
          <Input disabled placeholder={user.email} />
          <Button title="Guardar cambios"/>
        </div>
        <h4>Foto</h4>
        <div>
          <input type="file" />
          <Button title="Guardar cambios"/>
        </div>

        <h4>Consultas</h4>
        <div>
          <p>Entrada</p>
          <Input type={"time"} title="Entrada" placeholder="Nueva contraseña" />
          <p>Salida</p>
          <Input type={"time"} title="Salida" placeholder="Nueva contraseña" />
          <Input type={"number"} placeholder="Costo" />
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
