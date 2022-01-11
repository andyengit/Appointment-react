import { Link } from "react-router-dom"
import "./Button.css";

const ButtonLink = ({ color, to, title, type, border }) => {

  const style = {
    backgroundColor: color,
    border: "1px solid " + border,
    color: !!border && border   
  }

  return (
    <Link to={to}>
      <button className="button" style={style}>{title}</button>
    </Link>
  )
}

export default ButtonLink
