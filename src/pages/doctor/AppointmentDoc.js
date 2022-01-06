import axios from "axios";
import { useState, useEffect } from "react";
import AppointmentDocList from "../../Components/Appointment/AppointmentDocList";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import api from "../../Helpers/api.json"
import useAuth from "../../Auth/useAuth";


const AppointmentDoc = () => {

  const [List, setList] = useState(null);
  const { user } = useAuth();
 
  useEffect(() => {
    axios.get(api.url+'/appointment/doctor/'+user.ci)
    .then(res => setList(res.data))
  }, [user])

  console.log(List)  

  return (
    <div className="content">
      <div className="container">
        <div className="slideOption">
          <Button title="Hoy"/>
          <Button title="Mañana"/>
          <Input type="date" />
        </div>
        <div>
          {
            !(List === null || List.length === 0) ? (
              <ul className="ul">
                {List && List.map((a) => <AppointmentDocList key={a.id} appointment={a}/>)}
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
