import axios from "axios"
import { useEffect, useState } from "react"
import Back from "../../Components/Back"
import Button from "../../Components/Button"
import Input from "../../Components/Input"
import api from "./../../Helpers/api.json"

const NewSpeciality = () => {

  const [input, setinput] = useState({})
  const [specialities, setspecialities] = useState(null)

  useEffect(() => {
    axios.get(api.url+'/speciality')
    .then(res => setspecialities(res.data))
    .catch(e => console.log(e))
  }, [])

  const handlerSub = () => {

    if(input.name !== "" && input.name !== null && input.name !== undefined){
      axios.post(api.url+"/speciality",input)
      .then(res => {
        if(res.statusText === "Created"){
          axios.get(api.url+'/speciality')
          .then(resa => setspecialities(resa.data))
          .catch(e => console.log(e))
        }
      })
      .catch(e => console.log(e))
    }
  }

  return (
    <div className="content">
      <Back/>
      <div className="container">
        <div className="form">
          <Input onChange={(e) => setinput({name: e.target.value})} placeholder="Nombre de la especialidad"/>
          <Button onClick={handlerSub} type="submit" title="Crear Especialidad" />
          
        </div>
        <h2>Lista de especialidades</h2>
        <div>
          
          
          <ul>
            
           {!!specialities > 0 && specialities.map((e,i) =><li key={i}>{e.name}</li> )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NewSpeciality
