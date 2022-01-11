import { useParams } from "react-router"
import { useState, useEffect } from "react"
import axios from "axios"
import api from "../../Helpers/api.json"
import Back from "../../Components/Back"
import "./Profile.css"

const DocProfile = () => {

  const [Doc, setDoc] = useState(null)
  const [especiality, setespeciality] = useState(null)
  const { ci } = useParams();

  useEffect(() => {
    axios.get(api.url + "/doctor/" + ci)
      .then(res => setDoc(res.data[0]))

    axios.get(api.url + "/specialization/doctor/" + ci)
      .then(res => setespeciality(res.data))
      .catch(setespeciality([]))
  }, [ci])

  return (
    <div className="content-session">
      <Back />
      <div className="container-session">
        {!!Doc &&
          <div className="id">
            <img src={!!Doc && Doc.image} className="photo-perfil" alt="Perfil"/>
            <h2>Perfil del Dr. {Doc.firstname} {Doc.lastname}</h2>
          </div>}
        <h5>Especialidades</h5>
        <ul>
          {(!!especiality && especiality.length > 0) ? especiality.map((el, i) => <li key={i}>{el.speciality_name}</li>) : <h3>No tiene especialidades</h3>}

        </ul>
      </div>
    </div>
  )
}

export default DocProfile
