import { useState, useEffect } from "react";
import DoctorList from "../../Components/Appointment/DoctorList";
import api from "../../Helpers/api.json";
import axios from "axios";
import Back from "../../Components/Back";
import Autocomplete from "../../Components/Home/Autocomplete";
import { useParams } from "react-router-dom";
import useAuth from "../../Auth/useAuth";

const Appointment = () => {

  const {user} = useAuth();
  let { speciality } = useParams();
  const [DocLi, setDocLi] = useState(null)

  useEffect(() => {
    if(!!speciality && speciality !== ""){
      axios.get(api.url+'/specialization/speciality/'+speciality)
      .then(res => res.data.length > 0 ? setDocLi(res.data) : setDocLi(null))
      .catch(setDocLi(null))
    }
  }, [speciality])

  return (
    <div className="content-s">
      <Back/>
      <div className="mini-header">
        <Autocomplete type="search" initial={speciality} />
        <div className="container-list">
          {DocLi ? DocLi.map(d =><DoctorList speciality={speciality} key={d.id} ci={d.doctor_ci} /> ) : speciality === undefined ? ( user.role !== "doctor" ? <h2>¿Que especialidad desea buscar?</h2>  : 
          <><h2>¿Que especialidad desea buscar?</h2><p>Recuerda: Para realizar citas debes registrate como paciente</p></> ) : <h2>No se encuentran doctores disponibles</h2> }
        </div>
      </div>
    </div>
  )
}

export default Appointment
