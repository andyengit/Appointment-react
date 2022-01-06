import "./AppointmentDocList.css";
import Windows from "../../Components/Windows";
import Button from "../Button";
import { useState , useEffect } from "react";
import axios from "axios";
import api from "../../Helpers/api.json"

const AppointmentDocList = ({appointment}) => {
 
  const [states, setStates] = useState(appointment.status);
  const [window, setWindow] = useState(false);
  const [data, setdata] = useState(null);
  const [put, setput] = useState(null)

  useEffect(() => {
    axios.get(api.url+"/patient/"+appointment.patient_ci)
    .then(res => setdata(res.data[0]))
  }, [appointment])

  const handleWindow = () => {
    setWindow(!window);
  }

  const confirmAppointment = () => {
    setStates("done");
  }

  const reshedule = () => {
    setStates("reshedule");
  }

  console.log(data)

  return (<li className={`${states} li static`}>
    <div>
      {!!data && `${data.firstname} ${data.lastname}`} 
    </div>
    <div>
      {appointment.day}
    </div>
    <div>
      {(states === "active") && <Button color="#27AE60" onClick={confirmAppointment} title="Confirmar"/>}
      {(states === "active" || states === "done" || states === "reshedule") && <Button color="#C0392B" onClick={() => setStates("cancelled")} title="Cancelar"/>}
      {(states === "active" || states === "cancelled") && <Button onClick={() => {handleWindow()}} title="Reprogramar" />}
    </div>
    {window && <Windows check={reshedule} close={handleWindow}/>}
  </li>)
}

export default AppointmentDocList
