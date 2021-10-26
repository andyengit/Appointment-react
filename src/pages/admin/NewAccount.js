import { useEffect, useState } from "react"
import RegisterDoctor from "../../Components/New/RegisterDoctor";

const NewAccount = () => {

  const [Option, setOption] = useState("");


  useEffect(() => {
    console.log(Option);
  }, [Option])
  
  const handleSelection = (e) =>{
    setOption(e.target.value)
  }

  return (
    <div className="content">
      <div className="container">
        <div>
        <select name="" id="" onChange={handleSelection}>
            <option value="">Seleccione</option>
            <option value="P">Paciente</option>
            <option value="D">Doctor</option>
        </select>
        </div>
        <div>
          {Option === "D" && <RegisterDoctor />}
        </div>
      </div>
    </div>
  )
}

export default NewAccount
