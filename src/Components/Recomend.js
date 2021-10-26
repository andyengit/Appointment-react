
const Recomend = ({number}) => {
  const result = () => {
    if (number < 5) {
      return (
        <>
          <box-icon type='solid' name='star'></box-icon>
          <box-icon name='star' ></box-icon>
          <box-icon name='star' ></box-icon>
          <box-icon name='star' ></box-icon>
          <box-icon name='star' ></box-icon>
        </>)
    } else if (number >= 5 && number < 8) {
      return (
        <>
          <box-icon type='solid' name='star'></box-icon>
          <box-icon type='solid' name='star'></box-icon>
          <box-icon name='star-half' type='solid' ></box-icon>
          <box-icon name='star' ></box-icon>
          <box-icon name='star' ></box-icon>
        </>)

    } else if (number >= 8 && number <= 10) {
      return (
      <>
        <box-icon type='solid' name='star'></box-icon>
        <box-icon type='solid' name='star'></box-icon>
        <box-icon type='solid' name='star'></box-icon>
        <box-icon type='solid' name='star'></box-icon>
        <box-icon type='solid' name='star'></box-icon>
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
