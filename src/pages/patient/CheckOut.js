import { useState } from 'react'

const CheckOut = () => {
  const [check, setcheck] = useState(false);

  return (
    <div className="content">
      {check ?
        <div className="container">
          <box-icon name='check-circle' type='solid' size="lg" color="green"></box-icon>
          <p>Token: 879347928934892</p>
          <p>Hospital Central</p>
          <p>Av Libertador</p> 
          <p>Turno <b>4</b></p>

          <h2>CONFIRMADO</h2>
        </div>
        :
        <div className="container">
          <box-icon onClick={() => setcheck(true)} name='checkbox' size="lg"></box-icon>
          <h3>Haga click en el cuadrado para cofirmar</h3>
        </div>
      }

    </div>

  )
}

export default CheckOut
