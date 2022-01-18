import "./DocInfo.css"
import Input from "../../Components/Input"
import Button from "../../Components/Button"
import Back from "../../Components/Back"

const DocInfo = () => {
  return (
    <div className="content">
      <Back/>
      <div className="content">
      <div className="container-box">
        <h3>¿Eres Doctor?</h3>
        <p>Si estas interesado en pertenecer a nuestro centro medico, puedes enviar aca tus informaciones y prontamente estaremos en contacto contigo.</p>
        <Input placeholder="Nombre y Apellido" />
        <Input placeholder="Correo" />
        <Input placeholder="Telefono" />
        <Input placeholder="Especialidad/es" />
        <textarea className="textarea" rows="3" placeholder="Acerca de ti" />
        <Button title="Enviar Correo"/>
      </div>
    </div>
    </div>
  )
}

export default DocInfo
