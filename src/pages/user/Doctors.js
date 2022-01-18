import { BiSearchAlt } from "react-icons/bi"
import "../user/Home.css"
import { useState, useEffect } from 'react'
import DoctorList from "../../Components/Appointment/DoctorList"
import api from "../../Helpers/api.json"
import axios from "axios";
import formatStr from "../../Components/Function/formatStr"
import Back from "../../Components/Back"

const Doctors = () => {

  const [list, setlist] = useState(null)
  const [Docs, setDocs] = useState(null)
  const [input, setinput] = useState("");

  useEffect(() => {
    axios.get(api.url + "/doctor")
      .then(res => {
        setDocs(res.data);
        setlist(res.data)
      })
  }, [])

  const handleSearch = () => {
    if (input !== "" || input !== null) {
      setlist(Docs.filter(el => {
        let name = el.firstname + " " + el.lastname;
        return formatStr(name).includes(formatStr(input))
      }))
    } else {
      setlist([])
    }
  }

  const handleEnter = (e) => {
    if (e.code === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="content">
      <Back />
      <div className="mini-header">
        <div className="search">
          <div className="autocomplete">
            <input onKeyDownCapture={handleEnter} onChange={e => setinput(e.target.value.trim())} autoComplete="off" className="search-main" type="text" placeholder="Escriba el nombre del doctor" />
          </div>
          <button onClick={handleSearch} className="search-btn">
            <BiSearchAlt color="white" size="2rem" />
          </button>
        </div>
        {!!list &&
          <div className="container-list">
            {list.length > 0 ? list.map(d => <DoctorList key={d.ci} ci={d.ci} />) : <h2>No se encuentran doctores disponibles</h2>}
          </div>
        }
      </div>
    </div>
  )
}

export default Doctors
