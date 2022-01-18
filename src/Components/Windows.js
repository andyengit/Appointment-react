import "./windows.css";
import Button from "./Button";
import axios from "axios";
import api from "../Helpers/api.json"
import Input from "./Input";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai"

const Windows = ({ close, check, update }) => {

  const [input, setinput] = useState(null)


  const reshedule = () => {
    if (!!input) {
      axios.put(api.url + "/appointment/" + update.id, {
        doctor_ci: update.doctor_ci,
        patient_ci: update.patient_ci,
        day: input,
        hour: update.hour,
        status: "active"
      })
        .then(() => {
          check();
          close();
        })
    }
  }

  return (
    <div className="background">
      <div className="windowAlert">
        <AiOutlineCloseCircle className="closeWindow" size={"2rem"} onClick={close} />
        <h2>Reprogramar</h2>
        <Input type={"date"} onChange={(e) => setinput(e.target.value.trim())} />
        <Button onClick={reshedule} title="Aceptar" />
      </div>
    </div>
  )
}

export default Windows
