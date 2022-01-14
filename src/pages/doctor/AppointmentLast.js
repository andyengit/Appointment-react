import axios from "axios";
import { useState, useEffect } from "react";
import useAuth from "../../Auth/useAuth";
import AppointmentDocLastList from "../../Components/Appointment/AppointmentDocLastList";
import api from "../../Helpers/api.json";
import Back from "../../Components/Back";
import UpdateList from "../../Components/History/UpdateList";

const AppointmentLast = () => {

  const [List, setList] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    axios.get(api.url + "/appointment/doctor/" + user.ci)
      .then(res => setList(res.data.filter(el => el.status !== "cancelled" )))
  }, [user])


  return (
    <div className="content">
      <Back />
      <div className="container">
        <h2>History</h2>
        <UpdateList setList={setList} List={List} role={user.role}/>
        <div>
          {(List !== null && List.length !== 0) ?
            <ul>
              {List.map((i, index) => <AppointmentDocLastList key={index} data={i} />)}
            </ul>

            :
            <ul>
              <li><h2>No hay citas pasadas</h2></li>
            </ul>}
        </div>
      </div>
    </div>
  )
}

export default AppointmentLast
