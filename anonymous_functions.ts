const f = (x, y) => x+y;
const p = ["u4bi_a", "u4bi_b", "u4bi_c", "u4bi_d"];

const l = p.map(s => s.length)
  .reduce((a,b) => a+b, 0);
/* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce*/


send("anonymous function", l);

function send(title, text){
  var para = document.createElement("p");
  var str = document.createTextNode("["+title+"] "+text.toString());
  para.appendChild(str);
  document.getElementById("node").appendChild(para);
}