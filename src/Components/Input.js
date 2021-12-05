import "./Input.css"

const Input = ({name,id,aC, onChange,type,placeholder, onEnter,max,min}) => {

  const Submit = (e) => {
    if(e.code === "Enter"){
      !!onEnter && onEnter()
    }
  }

  return (
      <input onKeyUp={Submit} max={max} min={min} onChange={onChange} type={type ? type : "text"} placeholder={placeholder} id={id} name={name} autoComplete={aC}/>
  )
}

export default Input
