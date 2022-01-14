import axios from "axios"
import api from "../../Helpers/api.json";
import { useState, useEffect } from "react";
import "./HistoryList.css";
import Button from "../Button";

const HistoryList = ({data, update}) => {

  const [doc, setdoc] = useState(null)

  useEffect(() => {
    axios.get(api.url + '/doctor/' + data.doctor_ci)
      .then(res => setdoc(res.data[0]))
      .catch()
  }, [data])

  const cancelAppointment = () => {
    axios
      .put(api.url + "/appointment/" + data.id, { ...data, status: "cancelled" })
      .then(() => update())
  }

  return (
    <tr className="tr-table">
      <td> Dr. {!!doc && doc.firstname} {!!doc && doc.lastname}</td>
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

