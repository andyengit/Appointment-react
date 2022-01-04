import axios from "axios"
import api from "../../Helpers/api.json";
import { useState, useEffect } from "react";
import Button from "../Button";

const HistoryList = ({doctor,date,time}) => {

  const [doc, setdoc] = useState(null)

  useEffect(() => {
    axios.get(api.url+'/doctor/'+doctor)
    .then(res => setdoc(res.data[0]))
    .catch()
  }, [doctor])

  return (
    <tr>
      <td>{!!doc && doc.firstname}</td>
      <td>{date} {time}</td>
      <td>Especialidad</td>
      <td><Button title="Administrar"/></td>
    </tr>
  )
}

export default HistoryList

