import axios from 'axios';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import useAuth from '../../Auth/useAuth';
import Back from '../../Components/Back';
import api from "../../Helpers/api.json";
import {AiFillCheckCircle} from "react-icons/ai"
import {BsCircle} from "react-icons/bs"

const CheckOut = () => {
  const {user} = useAuth()
  const [check, setcheck] = useState(false);
  const [doc, setdoc] = useState(null)
  const [error, seterror] = useState(false)
  const {state} = useLocation();

  useEffect(() => {
    !!state && axios.get(api.url+"/doctor/"+state.dataCheckout.doctor_ci)
                .then(res => setdoc(res.data[0]))
  }, [state])

  const CreateAppointment = () => {

    state.dataCheckout.hour = state.dataCheckout.hour+":00";
    !!state && axios.post(api.url+'/appointment',{...state.dataCheckout,patient_ci: user.ci,status: "active" })
      .then(res => res.statusText === "Created" && setcheck(true))
      .catch(seterror(true))
  }


  return (
    <div className="content">
      <Back/>
      {check ?
        <div className="container">
          <AiFillCheckCircle size="4rem" color='#2ECC71'/>
          <p>Id Cita: 879347928934892</p>
          <p>Direccion: Hospital Central</p>
          <p>Av Libertador</p> 
          <p>Hora <b>{!!state && state.dataCheckout.hour}</b></p>

          <h2>CONFIRMADO</h2>
        </div>
        :
        <div className="container">
          {error && <h3>Error: No se ha podido crear la cita</h3>}
          <h3>Haga click en el circulo para cofirmar</h3>
          <BsCircle size="4rem" onClick={CreateAppointment} />
          <p>Doctor: {!!doc && doc.firstname+" "+doc.lastname}</p>
          <p>Fecha: {!!state && state.dataCheckout.day+" Hora:"+state.dataCheckout.hour}</p> 
          <p>Precio: <b>${!!doc && doc.cost}</b></p>
        </div>
      }

    </div>

  )
}

export default CheckOut
