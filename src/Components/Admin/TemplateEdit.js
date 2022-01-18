import axios from "axios"
import api from "../../Helpers/api.json"
import { useState, useEffect } from "react"
import Button from "../Button"

const TemplateEdit = (el) => {

  const [specialities, setspecialities] = useState(null)
  const [optionDelete, setoptionDelete] = useState(null)
  const [option, setoption] = useState(null)
  const [personalS, setpersonalS] = useState(null)

  useEffect(() => {
    axios.get(api.url + '/speciality')
      .then(res => {
        setspecialities(res.data);
      })

    axios.get(api.url + '/specialization/doctor/' + el.ci)
      .then(res => setpersonalS(res.data))
  }, [el])

  const InsertSpeciality = () => {
    
    if(!!option && (personalS === null || (personalS.length > 0 && !personalS.find(el => el.speciality_name === option)))){
      axios.post(api.url + '/specialization', { doctor_ci: el.ci, speciality_name: option })
      .then(
        axios.get(api.url + '/specialization/doctor/' + el.ci)
          .then(res => setpersonalS(res.data))
          .catch(setpersonalS(null))
      )
    }
  }

  const DeleteSpeciality = () => {
    (!!optionDelete) &&
      axios.delete(api.url + '/specialization/' + optionDelete)
        .then(() => {
          setoptionDelete(null);
          axios.get(api.url + '/specialization/doctor/' + el.ci)
            .then(res => res.data.length > 0 && setpersonalS(res.data))
            .catch(e => e.response.status === 404 && setpersonalS(null))
        }
        )
  }

  return (
    <div>
      <div>
        <h3>Especialidades</h3>
        <div>
          <div>
            <h2>Agregar</h2>
            <select onChange={(e) => setoption(e.target.value.trim())}>
              {!option && <option>Seleccionar</option>}
              {!!specialities && specialities.map((e, i) => <option key={i} value={e.name}>{e.name}</option>)}
            </select>
            <Button onClick={InsertSpeciality} title="Añadir" />
          </div>
          <h2>Eliminar</h2>
          {personalS !== null ? <select onChange={(e) => setoptionDelete(e.target.value.trim())}>
            {!optionDelete && <option value={null}>Seleccionar</option>}
            {personalS.map((e) => <option key={e.id} value={e.id}>{e.speciality_name}</option>)}
          </select> : <h3>No se encuentran especialidades</h3>}
          {personalS !== null && <Button onClick={DeleteSpeciality} color="#C0392B" title="Eliminar" />}
        </div>
      </div>
    </div>
  )
}

export default TemplateEdit
