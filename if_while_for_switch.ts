const res = (name === "") ? 0 : 1;
send('if',res);

let x = 0;
for(let i =0; i< 5; i++) x++;
send("for num",x);

const p = ["u4bi_a", "u4bi_b", "u4bi_c", "u4bi_d"];
for(let s of p){
  send('for arr', s);
}
  
function send(title, text){
  var para = document.createElement("p");
  var str = document.createTextNode("["+title+"] "+text.toString());
  para.appendChild(str);
  document.getElementById("node").appendChild(para);
}