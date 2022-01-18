import axios from "axios"
import { useEffect, useState } from "react"
import AppointmentAdm from "../../Components/Appointment/AppointmentAdm"
import Input from "../../Components/Input"
import api from "../../Helpers/api.json"
import UpdateList from "../../Components/History/UpdateList"
import Button from "../../Components/Button"

const AdmAppointment = () => {

  const [appointments, setappointments] = useState(null)
  const [check, setcheck] = useState(false);
  const [ci, setci] = useState(null);
  const [cancelled, setcancelled] = useState(true)

  useEffect(() => {
    axios.get(api.url + "/appointment/")
      .then(res => setappointments(res.data.filter(el => el.status !== "cancelled")))
  }, [])

  useEffect(() => {
    setcheck(false)
    axios.get(api.url + "/appointment/")
      .then(res => setappointments(res.data.filter(el => el.status !== "cancelled")))
  }, [check])

  const handleSearch = () => {
    if (!!ci && ci !== "") {
      axios.get(api.url + "/appointment/doctor/" + ci)
        .then(res => {
          if (cancelled) {
            setappointments(res.data.filter(el => el.status !== "cancelled"));
          } else {
            setappointments(res.data)
          }
        })
    }
  }

  const hiddeCancelled = () => {
    setcancelled(!cancelled);

    if (cancelled === true) {
      axios.get(api.url + "/appointment/")
        .then(res => setappointments(res.data))
    } else {
      setappointments(appointments.filter(el => el.status !== "cancelled"))
    }
  }

  return (
    <div className="content">
      <div className="container">
        <div>
          <UpdateList setList={setappointments} List={appointments} filter={cancelled} />
          <Input placeholder={"Cedula del doctor"} onChange={e => setci(e.target.value.trim())} type="number" />
          <Button onClick={handleSearch} title="Buscar" />
          <Button onClick={hiddeCancelled} border={cancelled ? "transparent" : "#2e86c1"} color={cancelled ? "#C0392B" : "transparent"} title={cancelled ? "Mostrar Cancelados" : "Ocultar Cancelados"} />
        </div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Doctor</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {!!appointments && appointments.map((el) => <AppointmentAdm key={el.id} check={setcheck} data={el} />)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdmAppointment
