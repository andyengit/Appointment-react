import "./windows.css";
import Button from "./Button";

const Windows = ({close, check}) => {
  return (
    <div className="background">
      <div className="windowAlert">
        <h2>Reprogramar</h2>
        <input type="date" />
        <input type="time" />
        <Button onClick={() => {check();close()}} title="Aceptar" />
        <Button onClick={close} title="Cerrar" />
      </div>
    </div>
  )
}

export default Windows
