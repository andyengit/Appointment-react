import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="parte">
        Autores
        <Link to={{ pathname: "https://github.com/guideofandy" }} target="_blank">Anderson Armeya</Link>
        <Link to={{ pathname: "https://github.com/GOZ4EL" }} target="_blank">Miguel Gozaine</Link>
      </div>

      <div className="parte">
        Medtime todos los derechos reservados xd
      </div>


    </footer>
  )
}

export default Footer
