import { Link } from "react-router-dom"
import "./Button.css";

const ButtonLink = ({color,to,title,type}) => {

  return (
    <Link to={to}>
      <button className="button" style={color && {backgroundColor: color}}>{title}</button>
    </Link>
  )
}

export default ButtonLink
