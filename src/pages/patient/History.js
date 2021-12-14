import HistoryList from "../../Components/History/HistoryList";
import api from "../../Helpers/api.json";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../Auth/useAuth";

const History = () => {

  const {user} = useAuth();
  const [histories, sethistories] = useState(null);

  useEffect(() => {
    axios.get(api.url+"/appointment/patient/"+user.ci)
    .then(res => sethistories([res.data]))
    .catch(e => console.log(e))
  }, [user])

  return (<div className="content">
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Fecha</th>
            <th>Especialidad</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {!!histories && histories.map((h,i) => <HistoryList key={i} doctor={h.doctor_ci} date={h.day} time={h.hour}/>) }
        </tbody>
      </table>
    </div>
  </div>)
}

export default History
