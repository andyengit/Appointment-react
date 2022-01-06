import ButtonLink from "../../Components/ButtonLink";
import "./AboutUs.css";
import Back from "../../Components/Back";
import Ander from "../../img/ander.jpg";
import goz4el from "../../img/goz4el.jpg";

function AboutUs() {
  return (
    <div className="content">
      <Back/>
      <div className="container">
        <div className="dev-profile">
          <img src={Ander} className="photo-perfil" alt="Anderson Armeya" />
          <div className="dev-data">
            <span>Anderson Armeya</span>
            <b>Frontend</b>
          </div>
          <div>
            <ButtonLink to="#" title="GitHub"/>
          </div>
        </div>
        <div className="dev-profile">
          <img src={goz4el} className="photo-perfil" alt="Miguel Gozaine" />
          <div className="dev-data">
            <span>Miguel Gozaine</span>
            <b>Backend</b>
          </div>
          <div>
            <ButtonLink to="#" title="GitHub"/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutUs
