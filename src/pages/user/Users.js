import { useHistory, useLocation } from "react-router"


function Users() {
  //http://localhost:3000/user?start=232&end=asd
  let LIMIT = 20;
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  let start = parseInt(query.get("start")) || 1;
  let end = parseInt(query.get('end')) || LIMIT;


  let history = useHistory();


  return (
    <div>
      <h3>Perfil de usuario</h3>
      <p>Mostrando productos del <b>{start}</b> al <b>{end}</b></p>
      {start > LIMIT && <button onClick={() => history.push({ search: `?start=${start - LIMIT}&end=${(end - LIMIT)}` })}>Atras</button>}
      <button onClick={() => history.push({ search: `?start=${start + LIMIT}&end=${(end + LIMIT)}` })}>Adelante</button>
    </div>
  )
}

export default Users
