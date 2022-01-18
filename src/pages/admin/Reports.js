import Back from "../../Components/Back"
import api from "../../Helpers/api.json"

const Reports = () => {

  return (
    <div className="content">
      <Back/>
      <div className="container">
        <h2>Generar reportes</h2>
        <select>
          <option>Doctores</option>
        </select>
          <a target="_blank" rel="noreferrer" style={{color: "#09F"}} href={api.url+"/admin/reports"}>Ver</a>
      </div>
    </div>
  )
}

export default Reports
