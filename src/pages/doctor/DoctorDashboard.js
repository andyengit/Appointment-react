import useAuth from "../../Auth/useAuth"
import Panel from "../../Components/Panel";
import {FaNotesMedical, FaSearch} from "react-icons/fa"
import {BsCalendarDate} from "react-icons/bs"
import api from "../../Helpers/api.json"
import axios from "axios";
import { useState, useEffect} from "react";
import "./DoctorDashboard.css"

const DoctorDashboard = () => {

  const { user } = useAuth();
  const [img, setimg] = useState(null);

  useEffect(() => {
    axios.get(api.url + "/doctor/"+ user.ci)
    .then(res => setimg(res.data[0].image))
  },[user])

  return (
    <div className="content">
      <div className="container">
        {!!img && <img alt="Perfil" className="dash-photo" src={img}></img>}
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
          <Panel to="/search" content={<>
            <FaSearch size="2rem"/>
            <h3>Obtener Cita</h3>
          </>} />
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard
