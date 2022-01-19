import axios from "axios"
import api from "../../Helpers/api.json";
import "./HistoryList.css";
import Button from "../Button";
import useDoctor from "../../Hooks/useDoctor";

const HistoryList = ({data, update}) => {

  const { Doctor } = useDoctor(data.doctor_ci)

  const cancelAppointment = () => {
    axios
      .put(api.url + "/appointment/" + data.id, { ...data, status: "cancelled" })
      .then(() => update())
  }

  return (
    <tr className="tr-table">
      <td> Dr. {!!Doctor && Doctor.firstname} {!!Doctor && Doctor.lastname}</td>
      <td>{data.day}</td>
      <td>Especialidad
        <Button
          color="#C0392B"
          onClick={cancelAppointment}
          title="Cancelar"
        />
      </td>
    </tr>
  )
}

export default HistoryList

