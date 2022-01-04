import "./Select.css"

const Select = ({map , title}) => {
  return (
    <select className="select">
      <option>{title}</option>
      {map}
    </select>
  )
}

export default Select
