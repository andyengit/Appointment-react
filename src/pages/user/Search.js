import axios from "axios";
import { useState, useEffect } from "react"
import { useParams } from "react-router";
import DoctorList from "../../Components/Appointment/DoctorList";
import Back from "../../Components/Back";
import Autocomplete from "../../Components/Home/Autocomplete"
import "./Search.css"
import api from "../../Helpers/api.json"

const Search = () => {

  const { speciality } = useParams();
  const [list, setlist] = useState(null);

  useEffect(() => {
    axios.get(api.url+'/specialization/speciality/'+speciality)
    .then(res => res.data.length > 0 ? setlist(res.data) : setlist(null))
    .catch(e => console.log(e))
  }, [speciality])

  return (
    <div className="content-s">
      <Back/>
      <div className="mini-header">
        <Autocomplete type="search" initial={speciality} />
        <div className="container-list">
          {list && list.map(d =><DoctorList key={d.id} ci={d.doctor_ci} /> )}
          
        </div>
      </div>
      <div className="mini-footer">
        <div className="pagination">
          <button className="pages">1</button>
          <button className="pages">2</button>
          <button className="pages">3</button>
          <button className="pages">4</button>
          <button className="pages">...</button>
        </div>
      </div>
    </div>
  )
}

export default Search
