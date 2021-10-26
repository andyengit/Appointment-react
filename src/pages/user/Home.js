import "./Home.css"
import Autocomplete from "../../Components/Home/Autocomplete";

const Home = () => {
  return (
    <div className="principal">
      <div className="start">
        <div className="mid-main">
          <h2>Que Especialidad desea buscar?</h2>
          <Autocomplete type="main"/>
        </div>
      </div >
      <div className="info">
        <h2>Hola</h2>
      </div>
    </div >
  );
}


export default Home;