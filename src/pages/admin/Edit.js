import Back from "../../Components/Back"
import Panel from "../../Components/Panel"

const Edit = () => {
  return (
    <div className="content">
      <Back/>
      <div className="container">
        <div className="panels">
          <Panel to="/edit/doc" content="Doctores"/>
          <Panel to="/edit/doc" content="Citas"/>
          <Panel to="/edit/doc" content="Especialidades"/>
        </div>
      </div>
    </div>
  )
}

export default Edit
