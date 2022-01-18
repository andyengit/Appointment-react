import "../windows.css";
import api from "../../Helpers/api.json"
import { useState } from "react";
import Input from "../Input";
import axios from "axios";
import Button from "../Button";
import {AiOutlineCloseCircle} from "react-icons/ai"

const AdmAppointmentWindow = ({ close, check, update }) => {

  const [input, setinput] = useState(null)

  const cancelAppointment = () => {
    axios
      .put(api.url + "/appointment/" + update.id, { ...update, status: "cancelled" })
      .then(() => { check(true); close() });
  }

  const confirmAppointment = () => {
    axios
      .put(api.url + "/appointment/" + update.id, { ...update, status: "done" })
      .then(() => { check(true); close() }
      );
  };

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
          close();
          check(true)
        })
    }
  }

  const waitingAppointment = () => {
    axios
      .put(api.url + "/appointment/" + update.id, { ...update, status: "active" })
      .then(() => { check(true); close() });
  }


  return (
    <div className="background">
      <div className="windowAlert">
        <AiOutlineCloseCircle className="closeWindow" size={"2rem"} onClick={close} /> 

        <h2>Administrar</h2>
        {(!!update.status && (update.status !== "done" && update.status !== "cancelled")) &&
          <div>
            <Input onChange={(e) => setinput(e.target.value.trim())} type={"date"} />
            <Button onClick={reshedule} title={"Reprogramar"} />
          </div>
        }
        <div>
          <h3>Cambiar estado:</h3>
          {(!!update.status && update.status !== "active") && <Button color="#ABB2B9 " onClick={waitingAppointment} title={"Espera"} />}
          {(!!update.status && update.status !== "cancelled") && <Button color="#C0392B" onClick={cancelAppointment} title={"Cancelar"} />}
          {(!!update.status && update.status !== "done") && <Button color="#27AE60" onClick={confirmAppointment} title={"Confirmar"} />}
        </div>
      </div>
    </div>
  )
}

export default AdmAppointmentWindow