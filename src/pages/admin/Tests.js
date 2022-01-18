import { useState, useEffect } from "react";
import formatHour from "../../Functions/formatHour"

const Tests = () => {

  const [day, setday] = useState(null);
  const [input, setinput] = useState(null);

  const handleClick = () => {
    setday(formatHour(input))
  }

  return (
    <div className="content">
      <div className="container">
        <input type="time" onChange={e => setinput(e.target.value.trim())} />
        <p>{input}</p>
        <p>{!!day && day}</p>
        <button onClick={handleClick}>BOTON</button>
      </div>

    </div>
  )
}

export default Tests
