import axios from "axios";
import { useState, useEffect } from "react";
import AppointmentDocList from "../../Components/Appointment/AppointmentDocList";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import api from "../../Helpers/api.json"
import useAuth from "../../Auth/useAuth";
import getDates from "../../Functions/getDates";
import Back from "../../Components/Back";

const AppointmentDoc = () => {

  const [input, setinput] = useState(null)
  const [List, setList] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    axios.get(api.url + '/appointment/doctor/' + user.ci)
      .then(res => {
        let list = res.data.filter((el) => {
          return ((el.status === "active" || el.status === "done" ) && el.day === getDates())  ? true : false;
        })
        setList(list);
      })
  }, [user])

  const Today = () => {
    axios.get(api.url + '/appointment/doctor/' + user.ci)
    .then(res => {
      setList(res.data.filter((el) => {
        return ((el.status === "active" || el.status === "done" ) && el.day === getDates())  ? true : false;
      }));
    })
  }

  const update = () => {
    !!input && axios.get(api.url + '/appointment/doctor/' + user.ci)
    .then(res => {
      setList(res.data.filter((el) => el.day === input))
    })
  }


  return (
    <div className="content">
      <Back/>
      <div className="container">
        <div className="slideOption">
          <Input type="date" onChange={(e) => setinput(e.target.value.trim())} />
          <Button onClick={update} title="Buscar"/>
          <Button onClick={Today} title="Hoy" />
        </div>
        <div>
          {
            !(List === null || List.length === 0) ? (
              <ul className="ul">
                {List && List.map((a) => <AppointmentDocList key={a.id} appointment={a} funcUpdate={update}/>)}
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
