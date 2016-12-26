/* mutable variable */
let x = 5;

/* immutable variable */
const y = "Constrant"

send("variables", "x: "+x+" y:"+y);

function send(title, text){
  var para = document.createElement("p");
  var str = document.createTextNode("["+title+"] "+text.toString());
  para.appendChild(str);
  document.getElementById('node').appendChild(para);
}