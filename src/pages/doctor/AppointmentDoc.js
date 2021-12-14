import { useState, useEffect } from "react";
import AppointmentDocList from "../../Components/Appointment/AppointmentDocList";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import list from "../../Helpers/appointmentDocList.json";


const AppointmentDoc = () => {
  const [Date, setDate] = useState("2021-10-14");
  const [List, setList] = useState(list);
 

  useEffect(() => {
    const SearchByDate = (obj) => {
      if(obj.date === Date)
        return true;
      return false;
    }

    setList(list.filter(SearchByDate));
  }, [Date])

  return (
    <div className="content">
      <div className="container">
        <div className="slideOption">
          <Button onClick={() => setDate("2021-10-14")} title="Hoy"/>
          <Button onClick={() => setDate("2021-10-15")} title="Mañana"/>
          <Input  onChange={(e) => setDate(e.target.value)} type="date" />
        </div>
        <div>
          {
            !(List.length === null || List.length === 0) ? (
              <ul className="ul">
                {List.map((a) => <AppointmentDocList key={a.id} state={a.state} name={a.name} date={a.date} position={a.position} />)}
              </ul>)
              :
              <ul className="ul">
                <li className="li">No hay para mostrar</li>
              </ul>
          }
        </div>
      </div>
      

    </div>
  )
}

export default AppointmentDoc
