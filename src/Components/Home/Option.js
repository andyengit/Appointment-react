const Option = ({input,name, set,index}) => {

  const handleClick = () => {
    set[0](name);
    set[1](false);
  }

  return (
    <div onClick={handleClick} id={name} className={`option-au ${index ? "activeOp" : ""}`}>
      <p><strong>{name.substr(0,input.length)}</strong>{name.substr(input.length,name.length)}</p>
    </div>
  )
}
export default Option
