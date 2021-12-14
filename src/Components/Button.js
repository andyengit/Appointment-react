import "./Button.css"

const Button = ({title,onClick,color}) => {
  return (
    <button style={color && {backgroundColor: color}} className="button" onClick={onClick}>{title}</button>
  )
}

export default Button
