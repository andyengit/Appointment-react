import { useState } from "react";
import "./AppointmentDocList.css";
import Windows from "../../Components/Windows";

const AppointmentDocList = (props) => {
 
  const [states, setStates] = useState(props.state);
  const [window, setWindow] = useState(false);

  const handleWindow = () => {
    setWindow(!window);
  }

  const reshedule = () => {
    setStates("reshedule");
  }

  

  return (<li className={`${states} li`}>
    <div>
      {props.name}
    </div>
    <div>
      {props.position}
    </div>
    <div>
      {(states === "waiting" || states === "checked") && <button onClick={() => setStates("Checked")}>Confrimar</button>}
      {(states === "waiting" || states === "checked") && <button onClick={() => setStates("out")}>Cancelar</button>}
      {(states === "waiting" || states === "out") && <button onClick={() => {handleWindow()}}>Reprogramar</button>}
    </div>
    {window && <Windows check={reshedule} close={handleWindow}/>}
  </li>)
}

export default AppointmentDocList
