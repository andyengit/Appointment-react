import "./windows.css";

const Windows = ({close, check}) => {
  return (
    <div className="background">
      <div className="windowAlert">
        <h2>Reshedule</h2>
        <input type="date" />
        <input type="time" />
        <button onClick={() => {check();close()}}>Reshedule</button>
        <button onClick={close}>Cerrar</button>
      </div>
    </div>
  )
}

export default Windows
