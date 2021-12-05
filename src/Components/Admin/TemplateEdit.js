import axios from "axios"
import api from "../../Helpers/api.json"
import { useState, useEffect } from "react"

const TemplateEdit = (el) => {
  
  const [specialities, setspecialities] = useState(null)
  const [optionDelete, setoptionDelete] = useState(null)
  const [option, setoption] = useState(null)
  const [personalS, setpersonalS] = useState(null)

  useEffect(() => {
    axios.get(api.url+'/speciality')
    .then(res => {
      setspecialities(res.data);
    })
    .catch(e => console.log(e))

    axios.get(api.url+'/specialization/doctor/'+el.ci)
    .then(res => setpersonalS(res.data))
    .catch(e => console.log(e));
  }, [el])

  const InsertSpeciality = () => {
    axios.post(api.url+'/specialization',{doctor_ci: el.ci,speciality_name: option})
    .then(
      axios.get(api.url+'/specialization/doctor/'+el.ci)
      .then(res => setpersonalS(res.data))
      .catch(e => console.log(e))
    ).catch(e => console.log(e))
  }

  const DeleteSpeciality = () => {
    axios.delete(api.url+'/specialization/'+optionDelete)
    .then( axios.get(api.url+'/specialization/doctor/'+el.ci)
      .then(res => res.data.lenth > 0 ? setpersonalS(res.data) : setpersonalS(null))
      .catch(setpersonalS(null))
    )
  }

  return(
    <div>
      <div>
        <h3>Especialidades</h3>
        <div>
          <div>
            <h2>Agregar</h2>
            <select onChange={(e) => setoption(e.target.value)}>
              <option>Seleccionar</option>
              {!!specialities && specialities.map((e,i) => <option key={i} value={e.name}>{e.name}</option>) }
            </select>
            <button onClick={InsertSpeciality}>Añadir</button>
          </div>
          <h2>Eliminar</h2>
          {personalS !== null ? <select onChange={(e) => setoptionDelete(e.target.value)}>
          <option>Seleccionar</option>
          {personalS.map((e,i) => <option key={e.id} value={e.id}>{e.speciality_name}</option>)}
           </select> : <h3>No se encuentran especialidades</h3>}
          {personalS !== null  && <button onClick={DeleteSpeciality}>Eliminar</button>}
        </div>

      </div>
    </div>
    )
}

export default TemplateEdit
