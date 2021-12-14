import useAuth from "../../Auth/useAuth"
import Panel from "../../Components/Panel";

const PatientDashboard = () => {

  const {user} = useAuth();

  return (
    <div className="content">
      <div className="container">
        <div className="card">
          <h2>Bienvenido: {user.firstname} {user.lastname} </h2>
        </div>
        <div className="panels">
          <Panel to="/appointment" content="Reservar Cita"/>
          <Panel to="/history" content="Historial" />
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard
