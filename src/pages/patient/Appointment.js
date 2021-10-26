import { useState, useEffect } from "react";
import speciality from "../../Helpers/especiality.json";
import Doctors from "../../Helpers/doctor.json";
import DoctorList from "../../Components/Appointment/DoctorList";

const Appointment = () => {


  const [Speciality, setSpeciality] = useState(null);
  const [SpecialityName, setSpecialityName] = useState(null)
  const [DocLi, setDocLi] = useState(null)

  const handleSpeciality = (e) => {
    try {
      let speciality = e.target.value;
      let specialityName = e.target[speciality].textContent;
      speciality && setSpeciality(speciality);
      specialityName && setSpecialityName(specialityName);
    } catch (e) {
      setSpeciality(null);
      setSpecialityName(null);
    }
  }



  useEffect(() => {
    const searchSpeciality = (obj) => {
      if (obj.speciality === Speciality)
        return true;
      return false;
    }
    setDocLi(Doctors.filter(searchSpeciality))
  }, [Speciality])

  return (
    <div className="content">
      <div className="container">
        <div className="input">
          <label htmlFor="">Especialidad</label>
          <select onChange={handleSpeciality} name="" id="">\
            <option value="">Seleccione:</option>
            {speciality.map(id => <option key={id.id} value={id.id}>{id.name}</option>)}
          </select>
          <ul className="ul">
            {Speciality && (
              DocLi.map((doc, index) => <DoctorList key={index} name={doc.name} speciality={SpecialityName} />)
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Appointment
