import axios from "axios"
import api from "../../Helpers/api.json";
import { useState, useEffect } from "react";
import "./HistoryList.css";

const HistoryList = ({doctor,date,time}) => {

  const [doc, setdoc] = useState(null)

  useEffect(() => {
    axios.get(api.url+'/doctor/'+doctor)
    .then(res => setdoc(res.data[0]))
    .catch()
  }, [doctor])

  return (
    <tr className="tr-table">
      <td> Dr. {!!doc && doc.firstname} {!!doc && doc.lastname}</td>
      <td>{date}</td>
      <td>Especialidad</td>
    </tr>
  )
}

export default HistoryList

