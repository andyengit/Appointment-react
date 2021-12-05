import axios from "axios"
import api from "../../Helpers/api.json";
import { useState, useEffect } from "react";

const HistoryList = (props) => {

  const [doc, setdoc] = useState(null)

  useEffect(() => {
    axios.get(api.url+'/doctor/'+props.doctor)
    .then(res => setdoc(res.data[0]))
    .catch()
  }, [props])

  return (
    <tr>
      <td>{!!doc && doc.firstname}</td>
      <td>{props.date} {props.time}</td>
      <td><button>x</button><button>E</button></td>
    </tr>
  )
}

export default HistoryList

