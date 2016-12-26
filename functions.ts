function mult(x, y){
  return x * y;
}

send("function", mult(5,5));

function send(title, text){
  var para = document.createElement("p");
  var str = document.createTextNode("["+title+"] "+text.toString());
  para.appendChild(str);
  document.getElementById('node').appendChild(para);
}