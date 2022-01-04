import "./Panel.css"
import { Link } from "react-router-dom"

const Panel = ({content,to}) => {
  return (
    <Link to={to}>
      <div className="Panel">
        
      {content}
      </div>
    </Link>
  )
}

export default Panel
