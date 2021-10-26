export default function formatStr(str) {
  if(str === undefined) str = ""
  let newStr = str.replace(/[ÀÁÂÃÄ]/g, 'A');
  newStr = newStr.replace(/[ÈÉÊË]/g, 'E');
  newStr = newStr.replace(/[ÌÍÎÏ]/g, 'I');
  newStr = newStr.replace(/[ÒÓÔÕÖ]/g, 'O');
  newStr = newStr.replace(/[ÙÚÛÜ]/g, 'U');
  newStr = newStr.replace(/[àáâãäå]/g, 'a');
  newStr = newStr.replace(/[èéêë]/g, 'e');
  newStr = newStr.replace(/[ìíîï]/g, 'i');
  newStr = newStr.replace(/[òóôõö]/g, 'o');
  newStr = newStr.replace(/[ùúûü]/g, 'u');
  return newStr;
}