import { useHistory } from "react-router-dom"
import "./Back.css"

const Back = () => {
  const history = useHistory();

  return (
    <button onClick={history.goBack} className="button-back">
      <box-icon name='left-arrow-alt' border="circle" size="md" color="#2980b9"></box-icon>
      <p>Atras</p>
    </button>
    
  )
}

export default Back
