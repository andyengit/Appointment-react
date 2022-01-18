import axios from "axios"
import { useEffect, useState } from "react"
import Back from "../../Components/Back"
import Button from "../../Components/Button"
import Input from "../../Components/Input"
import api from "./../../Helpers/api.json"
import Message from "../../Components/Message"

const NewSpeciality = () => {

  const [input, setinput] = useState({})
  const [specialities, setspecialities] = useState(null)
  const [correct, setcorrect] = useState(null)
  const [error, seterror] = useState({ message: undefined, status: false })

  useEffect(() => {
    axios.get(api.url + '/speciality')
      .then(res => setspecialities(res.data))
  }, [])

  const handlerSub = () => {
    setcorrect(null);
    seterror({ message: undefined, status: false });

    if (input.name !== "" && input.name !== null && input.name !== undefined) {
      axios.post(api.url + "/speciality", input)
        .then(res => {
          if (res.statusText === "Created") {
            setcorrect(true)
            axios.get(api.url + '/speciality')
              .then(resa => setspecialities(resa.data))
          }
        })
        .catch(e => seterror({ message: e.response.data.error + " : " + e.response.statusText, status: true }))
    }
  }

  return (
    <div className="content">
      <Back />
      <div className="container">
        {!!correct && (
          <Message type={"m-done"} content={"Doctor creado exitosamente"} />
        )}
        {error.message !== undefined && (
          <Message type={"m-error"} content={error.message.toString()} />
        )}
        <div className="form">
          <Input onChange={(e) => setinput({ name: e.target.value.trim() })} placeholder="Nombre de la especialidad" />
          <Button onClick={handlerSub} type="submit" title="Crear Especialidad" />
        </div>
        <h2>Lista de especialidades</h2>
        <div>
          <ul>

            {!!specialities > 0 && specialities.map((e, i) => <li key={i}>{e.name}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NewSpeciality
