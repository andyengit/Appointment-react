const HistoryList = (props) => {
  return (
    <tr key={props.key}>
      <td>{props.doctor}</td>
      <td>{props.center}</td>
      <td>{props.date} {props.time}</td>
      <td>{props.position}</td>
      <td><button>x</button><button>E</button></td>
    </tr>
  )
}

export default HistoryList

