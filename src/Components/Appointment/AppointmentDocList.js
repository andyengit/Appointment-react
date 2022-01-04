import "./AppointmentDocList.css";
import Windows from "../../Components/Windows";
import Button from "../Button";
import { useState , useEffect } from "react";
import axios from "axios";
import api from "../../Helpers/api.json"

const AppointmentDocList = (props) => {
 
  const [states, setStates] = useState(props.state);
  const [window, setWindow] = useState(false);
  const [data, setdata] = useState(null)

  useEffect(() => {
    axios.get(api.url+"/patient/"+props.ci)
    .then(res => setdata(res.data[0]))
  }, [props])

  const handleWindow = () => {
    setWindow(!window);
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
      {props.date}
    </div>
    <div>
      {(states === "active") && <Button color="#27AE60" onClick={() => setStates("done")} title="Confirmar"/>}
      {(states === "active" || states === "done" || states === "reshedule") && <Button color="#C0392B" onClick={() => setStates("cancelled")} title="Cancelar"/>}
      {(states === "active" || states === "cancelled") && <Button onClick={() => {handleWindow()}} title="Reprogramar" />}
    </div>
    {window && <Windows check={reshedule} close={handleWindow}/>}
  </li>)
}

export default AppointmentDocList
