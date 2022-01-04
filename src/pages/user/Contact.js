import Input from "../../Components/Input"
import "./Contact.css"
import Button from "../../Components/Button"
import Back from "../../Components/Back"

function Contact() {
  return (
    <div className="content">
      <Back/>
      <div className="container-box">
        <h3>CONTACTANOS</h3>
        <Input placeholder="Nombre y Apellido" />
        <Input placeholder="Correo" />
        <Input placeholder="Telefono" />
        <textarea className="textarea" rows="3" placeholder="Asunto" />
        <p>Nosotros estaremos encantados de poder ayudarte en lo que necesites, para ello tienes esta pagina para hacernos alguna pregunta y podamos respondonderla prontamente.</p>
        <Button title="Enviar Correo"/>
      </div>
    </div>
  )
}

export default Contact
