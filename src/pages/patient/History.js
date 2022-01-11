import HistoryList from "../../Components/History/HistoryList";
import api from "../../Helpers/api.json";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../Auth/useAuth";
import UpdateList from "../../Components/History/UpdateList";

const History = () => {

  const { user } = useAuth();
  const [histories, sethistories] = useState(null);

  useEffect(() => {
    axios.get(api.url + "/appointment/patient/" + user.ci)
      .then((res) => {
        sethistories(res.data.filter(el => el.status === "done" ))
      })
  }, [user])

  return (<div className="content">
    <div className="container">
      <UpdateList setList={sethistories} List={histories} role={user.role}/>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Fecha</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
          {!!histories && histories.map((h, i) => <HistoryList key={i} doctor={h.doctor_ci} date={h.day} time={h.hour} />) }
        </tbody>
      </table>
      {(!!histories && histories.length === 0) && <h3>No hay citas pasadas</h3>}
    </div>
  </div>)
}

export default History
