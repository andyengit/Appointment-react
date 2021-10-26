import { useState } from "react"
import { useParams } from "react-router";
import DoctorList from "../../Components/Appointment/DoctorList";
import Autocomplete from "../../Components/Home/Autocomplete"
import doctors from  "../../Helpers/doctor.json"
import "./Search.css"

const Search = () => {

  const { speciality } = useParams();
  const [list, setlist] = useState(doctors)
  const [search, setsearch] = useState()


  return (
    <div className="content-s">
      <div className="mini-header">
        <Autocomplete type="search" initial={speciality} setVar={setsearch} />
        <div className="container-list">
          {list && list.map(d =><DoctorList id={d.id} name={d.name} recomend={5} speciality={d.speciality} /> )}
          
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
