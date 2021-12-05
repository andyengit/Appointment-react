import Back from "../../Components/Back"
import ButtonLink from "../../Components/ButtonLink"

const Edit = () => {
  return (
    <div className="content">
      <Back/>
      <div className="container">
        <ButtonLink to="/edit/doc" title="Doctores"/>
        <div className="list">

        </div>
      </div>
    </div>
  )
}

export default Edit
