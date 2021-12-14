import Back from "../../Components/Back"
import Panel from "../../Components/Panel"

const New = () => {
  return (
    <div className="content">
      <Back/>
      <div className="container">
        <div className="panels">
          <Panel to="/new/account"  content="Nuevo Doctor"/>
          <Panel to="/new/speciality" content="Nueva especialidad"/>
        </div>
      </div>
    </div>
  )
}

export default New
