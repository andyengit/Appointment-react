import { useParams } from "react-router"
import { useState, useEffect } from "react"
import axios from "axios"
import api from "../../Helpers/api.json"
import Back from "../../Components/Back"
import "./Profile.css"
import getDates from "../../Functions/getDates"
import Input from "../../Components/Input"
import ButtonLink from "../../Components/ButtonLink"
import useAuth from "../../Auth/useAuth"

const DocProfile = () => {

  const { isLogged, user } = useAuth();
  const [Doc, setDoc] = useState(null)
  const [especiality, setespeciality] = useState(null)
  const { ci } = useParams();
  const [dataCheckout, setdataCheckout] = useState({});

  useEffect(() => {
    axios.get(api.url + "/doctor/" + ci)
      .then(res => {
        setDoc(res.data[0])
        setdataCheckout({ doctor_ci: res.data[0].ci, day: getDates() })
      })

    axios.get(api.url + "/specialization/doctor/" + ci)
      .then(res => setespeciality(res.data))
      .catch(setespeciality([]))
  }, [ci])

  const toCheckout = () => {
    if (isLogged()) {
      return { pathname: "/checkout", state: { dataCheckout } };
    } else {
      return { pathname: "/login", state: { dataCheckout } };
    }
  };

  return (
    <div className="content-session">
      <Back />
      <div className="container-session">
        {!!Doc &&
          <div className="id">
            <img src={!!Doc && Doc.image} className="photo-perfil" alt="Perfil" />
            <div>
              <h2>Perfil del Dr. {Doc.firstname} {Doc.lastname}</h2>
              <h5>Cedula: {Doc.ci}</h5>
            </div>
          </div>}
        <h5>Especialidades</h5>
        <select onChange={(e) => setdataCheckout({ ...dataCheckout, speciality: e.target.value.trim() })}>
          {!dataCheckout.speciality && <option>Seleccionar</option>}
          {(!!especiality && especiality.length > 0) && especiality.map((el, i) => <option key={i}>{el.speciality_name}</option>)}
        </select>
        {(!isLogged() || (user.role !== "doctor" && user.role !== "admin")) &&
          <div className="check">
            <Input
              type="date"
              value={getDates()}
              min={getDates()}
              onChange={(e) =>
                setdataCheckout({
                  ...dataCheckout,
                  day: e.target.value.trim()
                })
              }
            />
            <ButtonLink to={toCheckout} border={"white"} title="RESERVAR" />
          </div>
        }
      </div>

    </div>
  )
}

export default DocProfile
