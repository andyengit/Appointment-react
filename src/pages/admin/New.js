import Back from "../../Components/Back"
import Panel from "../../Components/Panel"
import {FaStethoscope, FaNotesMedical} from "react-icons/fa"

const New = () => {
  return (
    <div className="content">
      <Back/>
      <div className="container">
        <div className="panels">
          <Panel to="/new/account"  content={<>
            <FaStethoscope size="2rem"/>
            <h3>Doctor</h3>
          </>}/>
          <Panel to="/new/speciality" content={<>
            <FaNotesMedical size="2rem"/>
            <h3>Especialidad</h3>
          </>}/>
        </div>
      </div>
    </div>
  )
}

export default New
