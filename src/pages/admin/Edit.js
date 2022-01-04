import Back from "../../Components/Back"
import Panel from "../../Components/Panel"
import {FaStethoscope, FaNotesMedical} from "react-icons/fa"
import {BsCalendarDate} from "react-icons/bs"

const Edit = () => {
  return (
    <div className="content">
      <Back/>
      <div className="container">
        <div className="panels">
          <Panel to="/edit/doc" content={<>
            <FaStethoscope size="2rem"/>
            <h3>Doctor</h3>
          </>}/>
          <Panel to="/edit/doc" content={<>
            <BsCalendarDate size="2rem"/>
            <h3>Citas</h3>
          </>}/>
          <Panel to="/edit/doc" content={<>
            <FaNotesMedical size="2rem"/>
            <h3>Especialidades</h3>
          </>}/>
        </div>
      </div>
    </div>
  )
}

export default Edit
