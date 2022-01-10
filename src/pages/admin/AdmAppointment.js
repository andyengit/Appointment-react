import axios from "axios"
import { useEffect, useState } from "react"
import AppointmentAdm from "../../Components/Appointment/AppointmentAdm"
import Input from "../../Components/Input"
import api from  "../../Helpers/api.json"

const AdmAppointment = () => {

  const [appointments, setappointments] = useState(null)
  const [check, setcheck] = useState(false)

  useEffect(() => {
    axios.get(api.url+"/appointment/") 
    .then(res => setappointments(res.data))  
  }, [])

  useEffect(() => {
    setcheck(false)
    axios.get(api.url+"/appointment/") 
    .then(res => setappointments(res.data))  
  }, [check])


  return (
    <div className="content">
      <div className="container">
        <div>
          <Input type="date"/>
          <Input placeholder={"Cedula del doctor"} type="number"/>
        </div>
        {!!appointments && appointments.map((el) => <AppointmentAdm key={el.id} check={setcheck} data={el}/>)}
      </div>
    </div>
  )
}

export default AdmAppointment
