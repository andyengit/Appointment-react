import "./Button.css"

const Button = ({title,onClick,color,border}) => {

  const style = {
    backgroundColor: color,
    border: "1px solid " + border,
    color: (!!border && border !== "transparent") && border   
  }

  return (
    <button style={style} className="button" onClick={onClick}>{title}</button>
  )
}

export default Button
