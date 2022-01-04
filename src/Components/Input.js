import "./Input.css"

const Input = ({name,id,aC, onChange,type,placeholder, onEnter,max,min, disabled, value}) => {

  const Submit = (e) => {
    if(e.code === "Enter"){
      !!onEnter && onEnter()
    }
  }

  return (
      <input 
      className="input"
      onKeyUp={Submit}  
      max={max} 
      min={min} 
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
