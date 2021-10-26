import "./DoctorList.css";
import ButtonLink from "../ButtonLink"
import Recomend from "../Recomend";
import useAuth from "../../Auth/useAuth";

const DoctorList = (props) => {

  const {isLogged} = useAuth();

  return (
    <li key={props.id} className="container-items">
      <div className="doc-info">
        <box-icon name='user' size="lg"></box-icon>
        <span>{props.name}</span>
        <p>{props.speciality}</p>
        <Recomend number={props.recomend}/>
      </div>
      <div className="extra">
        <p>extra</p>
        <p>extra</p>

      </div>
      <div className="check">
        <input type="date" name="dateApppointment" />
        <ButtonLink to={isLogged() ? "/appointment/checkout" : "/login"} title="RESERVAR" />
        <ButtonLink color="orange" to={`/profile/${props.id}`} title="VER PERFIL" />
      </div>
    </li>
  )
}

export default DoctorList
