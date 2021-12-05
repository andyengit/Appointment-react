import "./windows.css";

const Alert = ({close, message, title,content,props}) => {
  return (
    <div className="background">
      <div className="windowAlert">
        {!!title && <h2>{title}</h2> }
        {!!content && content(props)}
        {!!message && <p>{message}</p>}
        <button onClick={() => close(false)}>Cerrar</button>
      </div>
    </div>
  )
}

export default Alert
