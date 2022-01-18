import { BsCheck2Square } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import Button from "../Button";
import AdmAppointmentWindow from "../Windows/AdmAppointmentWindow";
import { useState } from "react";

const AppointmentAdm = ({ data, check }) => {

  const [window, setwindow] = useState(false)

  const handleWindow = () => {
    setwindow(!window);
  }

  let status = null;
  if (data.status === "done") {
    status = <BsCheck2Square color="#27AE60" />
  } else if (data.status === "cancelled") {
    status = <MdCancel color="#C0392B" />
  } else {
    status = <AiOutlineClockCircle />
  }

  return (
    <>
      <tr>
        <td>{data.patient_ci}</td>
        <td>{data.doctor_ci}</td>
        <td>{data.day}</td>
        <td>{status}</td>
        <td><Button onClick={handleWindow} title="Administrar" /></td>
      </tr>
      {window && <AdmAppointmentWindow update={data} check={check} close={handleWindow} />}
    </>
  )
}

export default AppointmentAdm
