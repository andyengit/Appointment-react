import Back from "../../Components/Back"
import ButtonLink from "../../Components/ButtonLink"

const New = () => {
  return (
    <div className="content">
      <Back/>
      <div className="container">
        <ButtonLink to="/new/account" title="Nuevo Doctor"/>
        <ButtonLink to="/new/speciality" title="Nueva especialidad"/>
      </div>
    </div>
  )
}

export default New
