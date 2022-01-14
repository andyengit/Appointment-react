import axios from "axios"
import { useState, useEffect } from "react"
import Back from "../../Components/Back"
import api from "../../Helpers/api.json"
import Button from "../../Components/Button"
import Input from "../../Components/Input"

const AdmEspecialty = () => {

  const [list, setlist] = useState(null)

  useEffect(() => {
    axios.get(api.url +"/speciality/")
    .then(res => setlist(res.data))
  },[])

  const deleteSpeciality = (speciality) => {
    axios.delete(api.url+"/speciality/"+speciality)
      .then(e=> console.log(e))
  } 
  
  return (
    <div className="content">
      <Back/>
      <div className="container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {!!list && list.map((el) => <tr key={el.id}>
              <td><Input placeholder={el.name}/></td>
              <td>
                <Button title="Actualizar"/>
                <Button onClick={() => deleteSpeciality(el.name)} color="#C0392B" title="Eliminar"/>
              </td>
              </tr>)}            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdmEspecialty
