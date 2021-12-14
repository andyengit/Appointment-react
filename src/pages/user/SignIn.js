import Input from "../../Components/Input"
import "./Session.css"
import { useState, useEffect } from "react"
import axios from "axios"
import api from "../../Helpers/api.json"
import Alert from "../../Components/Alert"
import { useHistory } from "react-router-dom"
import useAuth from "../../Auth/useAuth"
import Loader from "../../Components/Loader"
import Button from "../../Components/Button"



const SignIn = () => {

  const [data, setdata] = useState({role: "patient"})
  const [address, setaddress] = useState(null)
  const [state, setstate] = useState(null)
  const [city, setcity] = useState(null)
  const [select, setselect] = useState(null)
  const [error, seterror] = useState(false)
  const history = useHistory();
  const auth = useAuth();
  const [loader, setloader] = useState(false)

  useEffect(() => {

    axios.get(api.url+"/address")
    .then(res => {
      setaddress(res.data);
      let array = res.data.map(el => el.state_name )
      let result = array.filter((item,index)=>{
        return array.indexOf(item) === index;
      })
      setstate(result)
    })
    .catch(e => console.log(e))    
  }, [])

  useEffect(() => {
    if(address !== null){
      let array = address.filter(el => {
        if(select === el.state_name) return true;
        return false;
      })
      setcity(array)
    }
    
  }, [select,address])

  const register = () => {
    setloader(true);
    axios.post(api.url+"/patient", data)
      .then(res => {
      if(res.status === 201){
      auth.login('P', {
        "logIn": true,
        "role" : data.role,
        "jw": "123456789",
        "firstname": data.firstname,
        "lastname": data.lastname,
        "ci": data.ci,
        "email": data.email
      })
      setloader(false);
      history.push("/dashboard");
      }
    }).catch(() => {
      seterror(true);
      setloader(false);
    })
  }

  return (
    <div className="content-session">
      {(loader || (!loader && error)) && <Alert title={error ? "ERROR" : "CARGANDO..."} message={error ? "Datos erroneos" : <Loader/>} close={seterror}/>}
      <div className="container-session">
        <h3>Create una cuenta</h3>
        <div className="form">
          <Input onChange={(e) => setdata({...data, firstname : e.target.value})} placeholder="Nombre" />
          <Input onChange={(e) => setdata({...data, lastname : e.target.value})} placeholder="Apellido" />
          <Input onChange={(e) => setdata({...data, ci : e.target.value})} placeholder="Cedula" />
          <Input type="password" onChange={(e) => setdata({...data, password : e.target.value})} placeholder="Contraseña" />
          <Input type="email "onChange={(e) => setdata({...data, email : e.target.value})} placeholder="Correo electronico" />
          <select onChange={(e) => setselect(e.target.value)}>
            <option value=''>Selecciona el estado</option>
            {!!state && state.map((el,key) => <option key={key} value={el}>{el}</option>)}
          </select>
            {!!select &&
             <select onChange={(e)=> setdata({...data, city_id : e.target.value})}> 
                <option value=''>Selecciona la ciudad</option>
               {city.map((el,key) => <option key={key} value={el.city_id}>{el.city_name}</option>)}
            </select>}
          <Button onClick={register} title="Enviar"/>
        </div>
      </div>
    </div>
  )
}

export default SignIn
