import Error from "../img/404.svg";
import Back from "../Components/Back";

const Oops = () => {
  return (
    <div className="content">
      <Back />
      <div className="container">
        <img src={Error} style={{ width: "7rem" }} alt="404 Error" />
        <h3>No se encuentra la pagina.</h3>
      </div>
    </div>
  )
}

export default Oops
