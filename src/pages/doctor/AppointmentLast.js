import history from "../../Helpers/appoinementLast.json";
import { useState, useEffect } from "react";
import AppointmentDocLastList from "../../Components/Appointment/AppointmentDocLastList";

const AppointmentLast = () => {
  const [Date, setDate] = useState("");

  const [List, setList] = useState(history);


  useEffect(() => {
    const SearchByDate = (obj) => {
      if (obj.date === Date)
        return true;
      return false;
    }
    if (Date === "" ) {
      setList(history);
    } else setList(history.filter(SearchByDate));
  }, [Date])

  return (
    <div className="content">
      <div className="container">
        <h2>History</h2>
        <div>
          <input onChange={(e) => setDate(e.target.value)} type="date" />
          <button onClick={()=> setDate("")}>Reset</button>
        </div>
        <div>
          {(List !== null || List.length !== 0 ) ?
            <ul>
              {List.map((i,index) => <AppointmentDocLastList key={index} name={i.name} date={i.date} speciality={i.speciality} />)}
            </ul>
            :
            <ul>
              <li><h2>NO hay para mostar</h2></li>
            </ul>}
        </div>
      </div>
    </div>
  )
}

export default AppointmentLast
