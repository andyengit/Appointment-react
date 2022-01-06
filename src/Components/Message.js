import "./Message.css"


const Message = ({content,contentL, type}) => {

  const dictionary = () => {
    if(content === "Invalid input : Unprocessable Entity")
    return "Datos erroneos"
  }

  if(!!content){
    content = dictionary()
  }

  return (
    <div className={`message ${type}`} >
      <p>{!!content && content}</p>
      <p>{!!contentL && contentL}</p>
      
    </div>
  )
}

export default Message
