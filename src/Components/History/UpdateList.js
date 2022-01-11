import Input from "../../Components/Input";
import getDates from "../../Functions/getDates";
import Button from "../../Components/Button";
import { useState } from "react";
import api from "../../Helpers/api.json"
import axios from "axios";
import useAuth from "../../Auth/useAuth";

const UpdateList = ({ setList, List, role }) => {

  const { user } = useAuth();
  const [Date, setDate] = useState("");

  const updateList = () => {
    if (Date !== "") {
      setList(List.filter((obj) => {
        if (obj.day === Date)
          return true;
        return false;
      }));
    }
  }

  const updateToday = () => {
    setList(List.filter((obj) => {
      if (obj.day === getDates())
        return true;
      return false;
    }));
  }

  const reset = () => {
    axios.get(api.url + "/appointment/" + role + "/" + user.ci)
      .then(res => {
        role === "doctor" && setList(res.data.filter(el => el.status !== "cancelled" ));
        role === "patient" && setList(res.data.filter(el => el.status === "done"))
      })
  }

  return (
    <div>
      <Input type={"date"} onChange={(e) => setDate(e.target.value)} />
      <Button onClick={updateList} title="Buscar" />
      <Button onClick={updateToday} title={"Hoy"} />
      <Button onClick={reset} title="Reset" />
    </div>
  )
}

export default UpdateList
