import ButtonLink from "../../Components/ButtonLink";
import "./AboutUs.css";
import Back from "../../Components/Back";

function AboutUs() {
  return (
    <div className="content">
      <Back/>
      <div className="container">
        <div className="dev-profile">
          <h2>Photo</h2>
          <div className="dev-data">
            <span>Anderson Armeya</span>
            <p>Frontend</p>
          </div>
          <div>
            <ButtonLink to="#" title="GitHub"/>
          </div>
        </div>
        <div className="dev-profile">
          <h2>Photo</h2>
          <div className="dev-data">
            <span>Miguel Gozaine</span>
            <p>Backend</p>
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
