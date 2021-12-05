import { useState, useEffect } from "react";
import DoctorList from "../../Components/Appointment/DoctorList";
import api from "../../Helpers/api.json";
import axios from "axios";
import Back from "../../Components/Back";

const Appointment = () => {


  const [specialities, setspecialities] = useState(null)
  const [Speciality, setSpeciality] = useState("");
  const [DocLi, setDocLi] = useState(null)

  useEffect(() => {
    axios.get(api.url+"/speciality")
    .then(res => setspecialities(res.data))
    .catch(e => console.log(e))
  }, [])

  useEffect(() => {

    !!Speciality && axios.get(api.url+"/specialization/speciality/"+Speciality)
    .then(res => setDocLi(res.data))
    .catch(setDocLi(null));

  }, [Speciality])

  return (
    <div className="content">
      <Back/>
      <div className="container">
        <div className="input">
          <label htmlFor="">Especialidad</label>
          <select onChange={(e) => setSpeciality(e.target.value)}>\
            <option>Seleccione:</option>
            {!!specialities && specialities.map((e,i) => <option key={i} value={e.name}>{e.name}</option>)}
          </select>
        </div>
        <div>
        {(!!Speciality && !!DocLi) &&
            <ul className="ul">
              {DocLi.map((doc, index) => <DoctorList key={index} ci={doc.doctor_ci}/>)} 
            </ul>
          }
          {(!!Speciality && !DocLi) && <h2>No hay doctores disponibles</h2>}
        </div>
          
      </div>
    </div>
  )
}

export default Appointment
