import "./DoctorList.css";
import ButtonLink from "../ButtonLink";
import useAuth from "../../Auth/useAuth";
import { useState } from "react";
import Input from "../Input";
import getDates from "../../Functions/getDates";
import { useLocation } from "react-router-dom";
import useDoctor from "../../Hooks/useDoctor";

const DoctorList = ({ ci, speciality }) => {

  const { pathname } = useLocation();
  const { Doctor, specialities } = useDoctor(ci);
  const [dataCheckout, setdataCheckout] = useState({
    speciality: speciality,
    doctor_ci: ci,
    day: getDates()
  });
  const { isLogged } = useAuth();

  const toCheckout = () => {
    if (isLogged()) {
      return { pathname: "/checkout", state: { dataCheckout } };
    } else {
      return { pathname: "/login", state: { dataCheckout } };
    }
  };

  return (
    Doctor ? (
      <li className="container-items">
        <div className="doc-info">
          <img src={!!Doctor && Doctor.image} className="photo-perfil" alt="Perfil" />
          <span>{Doctor.firstname + " " + Doctor.lastname}</span>
        </div>
        <div className="extra">
          <p>
            Precio: <b>${Doctor.cost}</b>
          </p>
          <p>
            Horario: <b>{Doctor.starts_at}</b> a <b>{Doctor.ends_at}</b>
          </p>
          {pathname === "/doctors" &&
            <p>
              <b>Especialidad/es:</b>  {specialities}
            </p>}
        </div>
        <div className="check">
          <Input
            type="date"
            value={getDates()}
            min={getDates()}
            onChange={(e) =>
              setdataCheckout({ ...dataCheckout, day: e.target.value.trim() })
            }
          />
          <ButtonLink to={toCheckout} border={"white"} title="RESERVAR" />
          <ButtonLink color="orange" to={`/profile/${ci}`} title="VER PERFIL" />
        </div>
      </li>
    ) : <li>No hay</li>
  );
};


export default DoctorList;
