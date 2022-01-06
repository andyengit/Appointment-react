import "./windows.css";
import Button from "./Button";
import axios from "axios";
import api from "../Helpers/api.json"
import Input from "./Input";
import { useState } from "react";

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
        <h2>Reprogramar</h2>
        <Input type={"date"} onChange={(e) => setinput(e.target.value)} />
        <Button onClick={reshedule} title="Aceptar" />
        <Button onClick={close} title="Cerrar" />
      </div>
    </div>
  )
}

export default Windows
