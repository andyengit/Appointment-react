import "./DoctorList.css";
import ButtonLink from "../ButtonLink"
import useAuth from "../../Auth/useAuth";
import { useState,useEffect } from "react";
import axios from "axios";
import api from "../../Helpers/api.json"
import Input from "../Input";
import {BsPersonCircle} from "react-icons/bs"

const DoctorList = ({ci}) => {

  const [Doc, setDoc] = useState(null)
  const [inputs, setinputs] = useState(null)
  const {isLogged} = useAuth();
 

  useEffect(() => {
    axios.get(api.url+'/doctor/'+ci)
    .then(res =>  res.data.length > 0 ? setDoc(res.data[0]) : setDoc(null))
    .catch(e => console.log(e))
  }, [ci])

  const getDate = () => {
    let date = new Date();
    let month = parseInt(date.getMonth()) + 1;
    let day = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
    let dateShow = date.getFullYear()+'-'+month.toString()+'-'+day;
    return dateShow;
  }

  const dataCheckout = {
     ...inputs,
      doctor_ci: ci
  }

  const toCheckout = () => {

    if(isLogged()){
      if (!!dataCheckout.day && !!dataCheckout.hour && (inputs.hour >= Doc.starts_at && inputs.hour <= Doc.ends_at)) {
        return {pathname: "/checkout", state: {dataCheckout}};
      }else{
        return "#";
      }
      
    }else{
      return "/login"
    }
  }

  return ( Doc && 
    <li className="container-items">
      <div className="doc-info">
        <BsPersonCircle size="3rem"/> 
        <span>{Doc.firstname+' '+Doc.lastname}</span>
        <p>{Doc.speciality}</p>
      </div>
      <div className="extra">
        <p>Precio: <b>${Doc.cost}</b></p>
        <p>Horario: <b>{Doc.starts_at}</b> a <b>{Doc.ends_at}</b> </p>

      </div>
      <div className="check">
        <Input type="date" min={getDate()} onChange={(e) => setinputs({...inputs, day: e.target.value})}/>
        <Input type="time" value={!!Doc && Doc.starts_at.substring(0,5)+":00"} min={!!Doc && Doc.starts_at.substring(0,5)} max={!!Doc && Doc.ends_at.substring(0,5)} onChange={(e) => setinputs({...inputs, hour: e.target.value})}/>
        <ButtonLink to={toCheckout} title="RESERVAR" />
        <ButtonLink color="orange" to={`/profile/${ci}`} title="VER PERFIL" />
      </div>
    </li>
  )
}

export default DoctorList
