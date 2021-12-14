import useAuth from "../../Auth/useAuth"
import Panel from "../../Components/Panel";

const DoctorDashboard = () => {

  const { user } = useAuth();

  return (
    <div className="content">
      <div className="container">
        <h2>
          Bienvenido Dr/a {user.name} {user.lastName}
        </h2>
        <div className="panels">
          <Panel to="/appointment" content="Ver Citas"/>
          <Panel to="/history" content="Historial" />
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard
