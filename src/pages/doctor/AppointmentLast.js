import axios from "axios";
import { useState, useEffect } from "react";
import useAuth from "../../Auth/useAuth";
import AppointmentDocLastList from "../../Components/Appointment/AppointmentDocLastList";
import Button from "../../Components/Button";
import api from "../../Helpers/api.json";
import Input from "../../Components/Input";
import getDates from "../../Functions/getDates";
import Back from "../../Components/Back";

const AppointmentLast = () => {
  const [Date, setDate] = useState("");
  const [List, setList] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    axios.get(api.url + "/appointment/doctor/" + user.ci)
      .then(res => setList(res.data))
  }, [user])

  const updateList = () =>{
    if(Date !== ""){
      setList(List.filter((obj) => {
        if (obj.day === Date)
          return true;
        return false;
      }));
    } 
  }

  const updateToday = () =>{
      setList(List.filter((obj) => {
        if (obj.day === getDates())
          return true;
        return false;
      }));
  }

  const reset = () =>{
    axios.get(api.url + "/appointment/doctor/" + user.ci)
      .then(res => setList(res.data))
  }

  return (
    <div className="content">
      <Back/>
      <div className="container">
        <h2>History</h2>
        <div>
          <Input type={"date"} onChange={(e) => setDate(e.target.value)}/>
          <Button onClick={updateList} title="Buscar" />
          <Button onClick={updateToday} title={"Hoy"}/>
          <Button onClick={reset} title="Reset" />
        </div>
        <div>
          {(List !== null && List.length !== 0) ?
            <ul>
              {List.map((i, index) => <AppointmentDocLastList key={index} data={i} />)}
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
