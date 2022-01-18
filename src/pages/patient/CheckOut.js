import axios from 'axios';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import useAuth from '../../Auth/useAuth';
import Back from '../../Components/Back';
import api from "../../Helpers/api.json";
import { AiFillCheckCircle } from "react-icons/ai"
import { BsCircle } from "react-icons/bs"
import Message from '../../Components/Message';
import getDates from "../../Functions/getDates";

const CheckOut = () => {
  const { user } = useAuth()
  const [check, setcheck] = useState(false);
  const [doc, setdoc] = useState(null)
  const [error, seterror] = useState({ status: false })
  const { state } = useLocation();
  const [turn, setturn] = useState(null)


  useEffect(() => {
    !!state && axios.get(api.url + "/doctor/" + state.dataCheckout.doctor_ci)
      .then(res => setdoc(res.data[0]))
  }, [state])

  const CreateAppointment = () => {
    state.dataCheckout.hour = state.dataCheckout.hour + "00:00:00";
    !!state && axios.post(api.url + '/appointment', { ...state.dataCheckout, patient_ci: user.ci, status: "active" })
      .then(res => res.statusText === "Created" && setcheck(true))
      .catch(e => seterror({ message: e.response.data.message, status: true }))
  }

  const getTurn = () => {
    axios.get(api.url + "/appointment/doctor/" + state.dataCheckout.doctor_ci)
      .then(res => {
        let list = res.data.filter(el => el.day === getDates() && el.status === "active")
        setturn(list.length);
      })
  }




  const verify = () => {
    axios.get(api.url + "/appointment/doctor/" + doc.ci)
      .then(res => {
        const start = parseInt(doc.starts_at.slice(0, 2));
        const end = parseInt(doc.ends_at.slice(0, 2));
        const list = res.data.filter(el => el.day === state.dataCheckout.day && el.status !== "cancelled")
        console.log(list.length)
        if ((end - start) >= list.length) {
          axios.get(api.url + "/appointment/patient/" + user.ci)
            .then(res => {
              let list = res.data.filter(el =>
                el.doctor_ci === state.dataCheckout.doctor_ci
                && el.patient_ci === user.ci
                && el.day === state.dataCheckout.day
                && el.status === "active")
              if (list.length > 0) {
                seterror({ message: "Ya tiene una cita con el doctor", status: true })
              } else {
                CreateAppointment();
                getTurn();
              }
            })
        } else {
          seterror({ message: "El Doctor ha alcanzado su limite diario", status: true })
        }
      }).catch(e => {
        if (e.response.status === 404) {
          axios.get(api.url + "/appointment/patient/" + user.ci)
            .then(res => {
              let list = res.data.filter(el =>
                el.doctor_ci === state.dataCheckout.doctor_ci
                && el.patient_ci === user.ci
                && el.day === state.dataCheckout.day
                && el.status === "active")
              if (list.length > 0) {
                seterror({ message: "Ya tiene una cita con el doctor", status: true })
              } else {
                CreateAppointment();
                getTurn();
              }
            })
        }
      })


  }

  return (
    <div className="content">
      <Back />
      {check ?
        <div className="container">
          <AiFillCheckCircle size="4rem" color='#2ECC71' />
          <p>Direccion: Hospital Central</p>
          <p>Av Libertador</p>
          <p>Fecha: {!!state && state.dataCheckout.day}</p>
          <p>Hora <b>{!!doc && doc.starts_at}</b></p>
          <p>Turno: {!!turn && turn}</p>
          <h2>CONFIRMADO</h2>
        </div>
        :
        <div className="container">
          {error.status === true && <Message type={"m-error"} content={error.message} />}
          <h3>Haga click en el circulo para cofirmar</h3>
          <BsCircle size="4rem" onClick={verify} />
          <p>Doctor: {!!doc && doc.firstname + " " + doc.lastname}</p>
          <p>Especialidad:{!!state && state.dataCheckout.speciality}</p>
          <p>Fecha: {!!state && state.dataCheckout.day}</p>
          <p>Precio: <b>${!!doc && doc.cost}</b></p>
        </div>
      }

    </div>

  )
}

export default CheckOut
