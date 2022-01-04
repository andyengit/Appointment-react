import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs"

const Recomend = ({number}) => {
  const result = () => {
    if (number < 5) {
      return (
        <>
          <BsStarFill/>
          <BsStar/>
          <BsStar/>
          <BsStar/>
          <BsStar/>
        </>)
    } else if (number >= 5 && number < 8) {
      return (
        <>
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
          <BsStar />
        </>)

    } else if (number >= 8 && number <= 10) {
      return (
      <>
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
      </>)

    }
  }
  return (
    <div>
      {result()}
    </div>
  )
}

export default Recomend
