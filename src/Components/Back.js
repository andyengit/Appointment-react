import { useHistory } from "react-router-dom"
import "./Back.css"
import {RiArrowGoBackLine} from 'react-icons/ri'

const Back = () => {
  const history = useHistory();

  return (
    <button onClick={history.goBack} className="button-back">
      <RiArrowGoBackLine size="1.5em" color="#2980b9"/>
      <p>Atras</p>
    </button>
    
  )
}

export default Back
