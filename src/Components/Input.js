import "./Input.css"
import getDates from "../Functions/getDates"

const Input = ({name,id,aC, onChange,type,placeholder, onEnter,max,min, disabled, value}) => {

  const Submit = (e) => {
    if(e.code === "Enter"){
      !!onEnter && onEnter()
    }
  }

  return (
      <input 
      className={`input ${!!disabled && "disabled"}`}
      onKeyUp={Submit}  
      max={max} 
      min={type === "date" ? getDates() : min } 
      onChange={onChange} 
      type={type ? type : "text"} 
      placeholder={placeholder} 
      id={id} 
      name={name} 
      autoComplete={aC}
      disabled={disabled}
      value={value}
      />
  )
}

export default Input
