import Input from "../../Components/Input";
import getDates from "../../Functions/getDates";
import Button from "../../Components/Button";
import { useState } from "react";
import api from "../../Helpers/api.json"
import axios from "axios";
import useAuth from "../../Auth/useAuth";

const UpdateList = ({ setList, role, filter }) => {

  const { user } = useAuth();
  const [Date, setDate] = useState("");

  const updateList = () => {
    if (Date !== "") {
      if (user.role === "admin") {
        axios.get(api.url + "/appointment/")
          .then(res => {
            if (filter) {
              setList(res.data.filter(el => el.day === Date && el.status !== "cancelled"));
            } else {
              setList(res.data.filter(el => el.day === Date))
            }
          })
      } else {
        axios.get(api.url + "/appointment/" + role + "/" + user.ci)
          .then(res => {
            role === "doctor" && setList(res.data.filter(el => el.status !== "cancelled" && el.day === Date));
            role === "patient" && setList(res.data.filter(el => (el.status === "done" || el.status === "active") && el.day === Date))
          })
      }
    }
  }

  const updateToday = () => {

    if (user.role === "admin") {
      axios.get(api.url + "/appointment/")
        .then(res => {
          if (filter) {
            setList(res.data.filter(el => el.day === getDates() && el.status !== "cancelled"))
          } else {
            setList(res.data.filter(el => el.day === getDates()))
          }
        })
    } else {
      axios.get(api.url + "/appointment/" + role + "/" + user.ci)
        .then(res => {
          role === "doctor" && setList(res.data.filter(el => el.status !== "cancelled" && el.day === getDates()));
          role === "patient" && setList(res.data.filter(el => (el.status === "done" || el.status === "active") && el.day === getDates()))
        })
    }
  }

  const reset = () => {

    if (user.role === "admin") {
      axios.get(api.url + "/appointment/")
        .then(res => {
          if (filter) {
            setList(res.data.filter(el => el.status !== "cancelled"))
          } else {
            setList(res.data);
          }
        })
    } else {
      axios.get(api.url + "/appointment/" + role + "/" + user.ci)
        .then(res => {
          role === "doctor" && setList(res.data.filter(el => el.status !== "cancelled"));
          role === "patient" && setList(res.data.filter(el => (el.status === "done" || el.status === "active")))
        })
    }
  }

  return (
    <div>
      <Input type={"date"} onChange={(e) => setDate(e.target.value.trim())} />
      <Button onClick={updateList} title="Buscar" />
      <Button onClick={updateToday} title={"Hoy"} />
      <Button onClick={reset} title="Todos" />
    </div>
  )
}

export default UpdateList
