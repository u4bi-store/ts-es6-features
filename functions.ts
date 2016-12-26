function mult(x, y){
  return x * y;
}

send(mult(5,5));

function send(text){
  var para = document.createElement("p");
  var str = document.createTextNode(text.toString());
  para.appendChild(str);
  document.getElementById('node').appendChild(para);
}