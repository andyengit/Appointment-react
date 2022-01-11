import useAuth from "../../Auth/useAuth"
import Panel from "../../Components/Panel";
import { BsCalendarDate, BsClockHistory } from "react-icons/bs"
import { GiPlayerNext } from "react-icons/gi";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../Helpers/api.json";
import getDates from "../../Functions/getDates";
import Button from "../../Components/Button";


const PatientDashboard = () => {

  const { user } = useAuth();
  const [next, setnext] = useState(null);

  useEffect(() => {
    axios.get(api.url + "/appointment/patient/" + user.ci)
      .then(res => setnext(res.data.find(e => e.day === getDates()  && e.status === "active")))
  }, [user])

  console.log(next)

  const cancelAppointment = () => {
    axios
      .put(api.url + "/appointment/" + next.id, { ...next, status: "cancelled" })
      .then(() => {
        axios.get(api.url + "/appointment/patient/" + user.ci)
        .then(res => setnext(res.data.find(e => e.day === getDates() && e.status === "active")))
        .catch(() => setnext(null)) 
      });
  }

  return (
    <div className="content">
      <div className="container">
        <div className="card">
          <h2>Bienvenido: {user.firstname} {user.lastname} </h2>
        </div>
        <div className="panels">
          <Panel to="/search" content={<>
            <BsCalendarDate size="2rem" />
            <h3>Reservar citas</h3>
          </>} />
          <Panel to="/history" content={<>
            <BsClockHistory size="2rem" />
            <h3>Historial</h3>
          </>} />
          {!!next &&
            <div className="next-date">
              <header className="header-next">
                <GiPlayerNext size="2rem" color="white" />
                Proxima cita
              </header>
              <footer className="footer-next">
                <div className="data-next">
                  <p>{next.doctor_ci}</p>
                  <p>{next.day}</p>
                </div>
                <Button onClick={cancelAppointment} color="#C0392B" title="Cancelar" />
              </footer>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard
