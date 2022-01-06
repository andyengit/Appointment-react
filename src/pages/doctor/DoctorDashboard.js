import useAuth from "../../Auth/useAuth"
import Panel from "../../Components/Panel";
import {FaNotesMedical} from "react-icons/fa"
import {BsCalendarDate} from "react-icons/bs"


const DoctorDashboard = () => {

  const { user } = useAuth();

  return (
    <div className="content">
      <div className="container">
        <h2>
          Bienvenido Dr/a {user.firstname} {user.lastname}
        </h2>
        <div className="panels">
          <Panel to="/appointment" content={<>
            <BsCalendarDate size="2rem"/>
            <h3>Citas</h3>
          </>}/>
          <Panel to="/history" content={<>
            <FaNotesMedical size="2rem"/>
            <h3>Historial</h3>
          </>} />
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard
