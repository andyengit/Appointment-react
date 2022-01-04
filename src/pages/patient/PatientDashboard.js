import useAuth from "../../Auth/useAuth"
import Panel from "../../Components/Panel";
import {BsCalendarDate, BsClockHistory} from "react-icons/bs"

const PatientDashboard = () => {

  const {user} = useAuth();

  return (
    <div className="content">
      <div className="container">
        <div className="card">
          <h2>Bienvenido: {user.firstname} {user.lastname} </h2>
        </div>
        <div className="panels">
          <Panel to="/search" content={<>
            <BsCalendarDate size="2rem"/>
            <h3>Reservar citas</h3>
          </>}/>
          <Panel to="/history" content={<>
            <BsClockHistory size="2rem"/>
            <h3>Historial</h3>
          </>} />
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard
