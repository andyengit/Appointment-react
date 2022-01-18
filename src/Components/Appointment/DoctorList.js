import "./DoctorList.css";
import ButtonLink from "../ButtonLink";
import useAuth from "../../Auth/useAuth";
import { useState, useEffect } from "react";
import axios from "axios";
import api from "../../Helpers/api.json";
import Input from "../Input";
import getDates from "../../Functions/getDates";
import { useLocation } from "react-router-dom";

const DoctorList = ({ ci, speciality }) => {
  
  const {pathname} = useLocation();
  const [Doc, setDoc] = useState(null);
  const [dataCheckout, setdataCheckout] = useState({
    speciality: speciality,
    doctor_ci: ci,
    day: getDates()
  });
  const { isLogged } = useAuth();
  const [specialities, setspecialities] = useState(null)

  useEffect(() => {
    axios
      .get(api.url + "/doctor/" + ci)
      .then((res) => (res.data.length > 0 ? setDoc(res.data[0]) : setDoc(null)))

    axios
      .get(api.url+"/specialization/doctor/"+ci)
      .then(res => setspecialities(res.data.map((el,i) => <p key={i}>{el.speciality_name}</p>)))
  }, [ci]);



  const toCheckout = () => {
    if (isLogged()) {
      return { pathname: "/checkout", state: { dataCheckout } };
    } else {
      return { pathname: "/login", state: { dataCheckout } };
    }
  };

  return (
    Doc && (
      <li className="container-items">
        <div className="doc-info">
          <img src={!!Doc && Doc.image} className="photo-perfil" alt="Perfil" />
          <span>{Doc.firstname + " " + Doc.lastname}</span>
        </div>
        <div className="extra">
          <p>
            Precio: <b>${Doc.cost}</b>
          </p>
          <p>
            Horario: <b>{Doc.starts_at}</b> a <b>{Doc.ends_at}</b>
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
    )
  );
};

export default DoctorList;
