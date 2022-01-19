import axios from "axios";
import { useState , useEffect } from "react";
import api from "../Helpers/api.json";

const usePatientAppointment = (user) => {
  
  const [List, setList] = useState(null);

  useEffect(() => {
    axios.get(api.url + "/appointment/patient/" + user.ci)
      .then((res) => {
        setList(res.data.filter(el => el.status === "done"  || el.status === "active"))
      })
  }, [user])

  const updateList = () => {
    axios.get(api.url + "/appointment/patient/" + user.ci)
    .then((res) => {
      setList(res.data.filter(el => el.status === "done"  || el.status === "active"))
    })
  }
  
  return {
    List,
    updateList,
    setList 
  } 
}

export default usePatientAppointment
