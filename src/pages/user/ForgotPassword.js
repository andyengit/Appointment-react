import "./Session.css"
import Back from "../../Components/Back"
import Input from "../../Components/Input"
import { useState } from "react"
import Button from "../../Components/Button"
import Message from "../../Components/Message"

const ForgotPassword = () => {
  const [message, setmessage] = useState(false);

  const handleSubmit = () => {
    setmessage(true);
  }

  return (
    <div className="content-session">
      <Back />
      <div className="container-session">
        {message && <Message type={"m-error"} contentL={"No se ha podido establecer conexion."} />}
        <h4>Restablecer contraseña</h4>
        <p>Se le enviara un codigo al correo para que pueda restablecer su contraseña. Escriba abajo
          su correo electronico.
        </p>
        <Input placeholder={"Correo"} type={"email"}/>
        <Button onClick={handleSubmit} title={"Enviar"}/>
      </div>
    </div>

  )
}

export default ForgotPassword
