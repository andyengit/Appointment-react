import ButtonLink from "../ButtonLink"

const AppointmentDocLastList = (props) => {
  return (<li className="li">
    <div>{props.name}</div>
    <div>{props.date}</div>
    <div>{props.speciality}</div>
    <div><ButtonLink to="#" title="Perfil"/></div>
  </li>
  )
}

export default AppointmentDocLastList
