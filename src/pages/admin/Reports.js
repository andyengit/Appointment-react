import Back from "../../Components/Back"
import Button from "../../Components/Button"

const Reports = () => {
  return (
    <div className="content">
      <Back/>
      <div className="container">
        <h2>Generar reportes</h2>
        <select>
          <option>Citas</option>
          <option>Doctores</option>
        </select>
        <div>
        <Button title="Descargar"/>
        <Button title="Ver"/>
        </div>
        
      </div>
    </div>
  )
}

export default Reports
