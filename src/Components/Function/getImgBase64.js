const getImgBase64 = () => {
  var base64 = "";
  var img = new Image();
  img.src = "img/test.jpg";
  img.onload = function () {
    base64 = image2Base64(img);
    alert(base64);
  }
}

export default getImgBase64
