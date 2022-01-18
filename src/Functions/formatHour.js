const formatHour = (data) => {
  const mid = data.toString().slice(3,5);
  if(parseInt(mid) < 30){
    return data.toString().replace(data[3],"0").replace(data[4],"0");
  } else {
    return data.toString().replace(data[3],"3").replace(data[4],"0");
  }
}

export default formatHour