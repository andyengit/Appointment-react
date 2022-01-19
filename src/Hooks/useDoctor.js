import { useState ,useEffect } from "react"
import api from "../Helpers/api.json"
import axios from "axios"

const useDoctor = (ci) => {

  const [Doctor, setDoctor] = useState(null)
  const [specialities, setSpecialities] = useState(null)

  useEffect(() => {
    axios
      .get(api.url + "/doctor/" + ci)
      .then((res) => (res.data.length > 0 ? setDoctor(res.data[0]) : setDoctor(null)))

    axios
      .get(api.url+"/specialization/doctor/"+ci)
      .then(res => setSpecialities(res.data.map((el,i) => <p key={i}>{el.speciality_name}</p>)))
  }, [ci]);

  return {
    Doctor,
    specialities
  }
  
}

export default useDoctor
