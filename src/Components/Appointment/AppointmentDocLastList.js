import {BsCheck2Square} from "react-icons/bs";
import {MdCancel} from "react-icons/md";
import {AiOutlineClockCircle} from "react-icons/ai";

const AppointmentDocLastList = ({ data }) => {

  let status = null;
  if (data.status === "done") {
    status = <BsCheck2Square color="#27AE60"/>
  } else if (data.status === "cancelled") {
    status = <MdCancel color="#C0392B"/>
  } else {
    status = <AiOutlineClockCircle/>
  }


  return (<li className="li">
    <div>{data.patient_ci}</div>
    <div>{data.day}</div>
    <div>{status}</div>
  </li>
  )
}

export default AppointmentDocLastList
