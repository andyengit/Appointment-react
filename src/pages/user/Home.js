import "./Home.css"
import Autocomplete from "../../Components/Home/Autocomplete";
import ButtonLink from "../../Components/ButtonLink";
import hospital from "../../img/hospital.svg"
import doc from "./../../img/doctor.svg"
import Logo from "../../img/MEDTIME-blanco.svg";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="principal">
      <div className="start">
        <div className="mid-main">
          <img src={Logo} className="present" alt="medtime principal" />
          <h3 className="text-question">¿Que Especialidad desea buscar?</h3>
          <Autocomplete type="main" />
          <BsFillArrowDownCircleFill className="margin-arrow" color="white" size="3rem"/>
        </div>
      </div >
      <div className="mid">
        <div className="info-1">
          <h2>Bienvenidos de Medtime</h2>
          <p>Es su lugar para reservar citas medicas con sus doctores de preferencia en ¡un centro medico!</p>
        </div>
        <img className="img-hos" src={hospital} alt="" />
      </div>
      <div className="mid">
        <img className="img-hos" src={doc} alt="" />
        <div className="info-1">
          <h2>¿Eres Doctor?</h2>
          <p>Si quieres afiliarte al centro medico, llena el siguiente formulario!</p>
          <ButtonLink to="/doc-info" title="Entra aca" />
        </div>
      </div>
      
    </div >
  );
}


export default Home;