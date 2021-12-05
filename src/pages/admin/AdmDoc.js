import axios from "axios"
import Back from "../../Components/Back"
import Input from "../../Components/Input"
import "./AdmDoc.css"
import api from "../../Helpers/api.json"
import { useEffect, useState } from "react"
import Loader from "../../Components/Loader"
import Alert from "../../Components/Alert"
import TemplateEdit from "../../Components/Admin/TemplateEdit"


const AdmDoc = () => {

  const [list, setlist] = useState([]);
  const [loader, setloader] = useState(true);
  const [window, setwindow] = useState(false);
  const [select, setselect] = useState(null);
  const [confirm, setconfirm] = useState(false)

  useEffect(() => {
    axios.get(api.url+"/doctor")
    .then(res => {setlist(res.data);setloader(false)})
    .catch();
  }, [])

  const showEdit = (el) => {
    setwindow(true); 
    setselect(el);
  }

  const deleteDoc = (el) => {
    setconfirm(true);
    setselect(el.ci);
  }

  const confirmDelete = () => {
    axios.delete(api.url+'/doctor/'+select)
    .then(setlist(null), setconfirm(false))
    .catch(e => console.log(e))
  }

  const Confirmate = () => {
    return(
    <div>
      <h3>Desea eliminar el doctor?</h3>
      <button onClick={confirmDelete}>Si</button>
      <button onClick={() => setconfirm(false)}>No</button>
    </div>)
  }

  return (
    <div className="content">
      <Back/>
      {window && <Alert close={setwindow} content={TemplateEdit} props={select}/>}
      {confirm && <Alert close={setconfirm} content={Confirmate} props={select}/>}
      <div className="container">
        <Input placeholder="Cedula del doctor"/>
        {loader && <Loader/>}
        <table className="table-doc">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Accion</th>
            </tr> 
          </thead>
          <tbody>
            {list && list.map((el, i) => 
              <tr key={i}>
                <td>{el.firstname}</td>
                <td>
                  <button onClick={() => showEdit(el)}> Editar</button>
                  <button onClick={() => deleteDoc(el)}>Borrar</button>
                </td>
             </tr>)}
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdmDoc