import "./windows.css";
import { AiOutlineCloseCircle } from "react-icons/ai"

const Alert = ({ close, message, title, content, props }) => {
  return (
    <div className="background">
      <div className="windowAlert">
        <AiOutlineCloseCircle className="closeWindow" size={"2rem"} onClick={close} />
        {!!title && <h2>{title}</h2>}
        {!!content && content(props)}
        {!!message && <p>{message}</p>}
      </div>
    </div>
  )
}

export default Alert
