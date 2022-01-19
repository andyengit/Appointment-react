import HistoryList from "../../Components/History/HistoryList";
import useAuth from "../../Auth/useAuth";
import UpdateList from "../../Components/History/UpdateList";
import usePatientAppointment from "../../Hooks/usePatientAppointment";

const History = () => {

  const { user } = useAuth();
  const { List, updateList ,setList } = usePatientAppointment(user) 

  return (<div className="content">
    <div className="container">
      <UpdateList setList={setList} List={List} role={user.role}/>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Fecha</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
          {!!List && List.map((h, i) => <HistoryList key={i} data={h} update={updateList}/>) }
        </tbody>
      </table>
      {(!!List && List.length === 0) && <h3>No hay citas pasadas</h3>}
    </div>
  </div>)
}

export default History
