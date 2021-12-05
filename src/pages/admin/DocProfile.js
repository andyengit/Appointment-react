import { useParams } from "react-router"
import { useState, useEffect } from "react"
import axios from "axios"
import api from "../../Helpers/api.json"
import Back from "../../Components/Back"

const DocProfile = () => {

  const [Doc, setDoc] = useState(null)
  const { ci } = useParams();

  useEffect(() => {
    axios.get(api.url+"/doctor/"+ci)
    .then(res => setDoc(res.data[0]))
    .catch(e => console.log(e))
  }, [ci])

  return (
    <div className="content">
      <Back/>
      {Doc && 
      <div className="id">
        <box-icon name='user-circle' type='solid' size="lg"></box-icon>
        <h2>Profile of: {Doc.firstname} {Doc.lastname}</h2>
      </div>}
      
    </div>
  )
}

export default DocProfile
