import "./AppointmentDocList.css";
import Windows from "../../Components/Windows";
import Button from "../Button";
import { useState, useEffect } from "react";
import axios from "axios";
import api from "../../Helpers/api.json";
import getDates from "../../Functions/getDates";

const AppointmentDocList = ({ appointment , funcUpdate }) => {
  const [states, setStates] = useState(appointment.status);
  const [window, setWindow] = useState(false);
  const [data, setdata] = useState(null);
  const update = {
    doctor_ci: appointment.doctor_ci,
    patient_ci: appointment.patient_ci,
    day: appointment.day,
    hour: appointment.hour
  }

  useEffect(() => {
    axios
      .get(api.url + "/patient/" + appointment.patient_ci)
      .then((res) => setdata(res.data[0]));
  }, [appointment]);

  const handleWindow = () => {
    setWindow(!window);
  };

  const confirmAppointment = () => {
    axios
      .put(api.url + "/appointment/" + appointment.id, {...update, status: "done"})
      .then(setStates("done"));
  };

  const cancelAppointment = () => {
    axios
      .put(api.url + "/appointment/" + appointment.id, {...update, status: "cancelled"})
      .then(setStates("cancelled"));
  }

  const reshedule = () => {
    setStates("reshedule");
    funcUpdate();
  };

  return (
    <li className={`${states} li static`}>
      <div>{!!data && `${data.firstname} ${data.lastname}`}</div>
      <div>{appointment.day}</div>
      <div>
        {(states === "active" && appointment.day === getDates()) && (
          <Button
            color="#27AE60"
            onClick={confirmAppointment}
            title="Confirmar"
          />
        )}
        {(states === "active" ||
          states === "reshedule") && (
          <Button
            color="#C0392B"
            onClick={cancelAppointment}
            title="Cancelar"
          />
        )}
        {(states === "active" || states === "cancelled") && (
          <Button
            onClick={() => {
              handleWindow();
            }}
            title="Reprogramar"
          />
        )}
      </div>
      {window && <Windows check={reshedule} update={appointment} close={handleWindow} />}
    </li>
  );
};

export default AppointmentDocList;
