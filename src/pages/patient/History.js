import HistoryList from "../../Components/History/HistoryList";
import histories from "../../Helpers/history.json";

const History = () => {
  return (<div className="content">
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Center</th>
            <th>Fecha</th>
            <th>Posicion</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {histories.map(h => <HistoryList key={h.id} doctor={h.doctor} center={h.center} date={h.date} time={h.time} position={h.position}/>) }
        </tbody>
      </table>
    </div>
  </div>)
}

export default History
