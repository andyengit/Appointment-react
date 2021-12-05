import "./DocInfo.css"
import Input from "../../Components/Input"

const DocInfo = () => {
  return (
    <div className="content">
      <div className="content">
      <div className="container-box">
        <h3>¿Eres Doctor?</h3>
        <p>Si estas interesado en pertenecer a nuestro centro medico, puedes enviar aca tus informaciones y prontamente estaremos en contacto contigo.</p>
        <Input placeholder="Nombre y Apellido" />
        <Input placeholder="Correo" />
        <Input placeholder="Telefono" />
        <Input placeholder="Especialidad" />
        <Input placeholder="Año de promocion" />
        <textarea className="textarea" rows="3" placeholder="Acerca de ti" />
        
        <button>Enviar correo</button>
      </div>
    </div>
    </div>
  )
}

export default DocInfo
