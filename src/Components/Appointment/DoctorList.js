import "./DoctorList.css";
import ButtonLink from "../ButtonLink";
import useAuth from "../../Auth/useAuth";
import { useState, useEffect } from "react";
import axios from "axios";
import api from "../../Helpers/api.json";
import Input from "../Input";
import { BsPersonCircle } from "react-icons/bs";
import getDates from "../../Functions/getDates";

const DoctorList = ({ ci, speciality }) => {

  const [Doc, setDoc] = useState(null);
  const [dataCheckout, setdataCheckout] = useState({
    speciality: speciality,
    doctor_ci: ci,
    day: getDates()
  });
  const { isLogged } = useAuth();

  useEffect(() => {
    axios
      .get(api.url + "/doctor/" + ci)
      .then((res) => (res.data.length > 0 ? setDoc(res.data[0]) : setDoc(null)))
      .catch((e) => console.log(e));
  }, [ci]);

  

  const toCheckout = () => {
    if (isLogged()) {
      return { pathname: "/checkout", state: { dataCheckout } };
    } else {
      return {pathname: "/login", state: { dataCheckout }};
    }
  };

  return (
    Doc && (
      <li className="container-items">
        <div className="doc-info">
          <BsPersonCircle size="3rem" />
          <span>{Doc.firstname + " " + Doc.lastname}</span>
          <p>{Doc.speciality}</p>
        </div>
        <div className="extra">
          <p>
            Precio: <b>${Doc.cost}</b>
          </p>
          <p>
            Horario: <b>{Doc.starts_at}</b> a <b>{Doc.ends_at}</b>
          </p>
        </div>
        <div className="check">
          <Input
            type="date"
            value={getDates()}
            min={getDates()}
            onChange={(e) =>
              setdataCheckout({ ...dataCheckout, day: e.target.value })
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
