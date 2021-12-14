import { useState } from "react";
import "./AppointmentDocList.css";
import Windows from "../../Components/Windows";
import Button from "../Button";

const AppointmentDocList = (props) => {
 
  const [states, setStates] = useState(props.state);
  const [window, setWindow] = useState(false);

  const handleWindow = () => {
    setWindow(!window);
  }

  const reshedule = () => {
    setStates("reshedule");
  }

  

  return (<li className={`${states} li static`}>
    <div>
      {props.name}
    </div>
    <div>
      {props.position}
    </div>
    <div>
      {(states === "waiting" || states === "checked") && <Button color="#27AE60" onClick={() => setStates("Checked")} title="Confirmar"/>}
      {(states === "waiting" || states === "checked") && <Button color="#C0392B" onClick={() => setStates("out")} title="Cancelar"/>}
      {(states === "waiting" || states === "out") && <Button onClick={() => {handleWindow()}} title="Reprogramar" />}
    </div>
    {window && <Windows check={reshedule} close={handleWindow}/>}
  </li>)
}

export default AppointmentDocList
