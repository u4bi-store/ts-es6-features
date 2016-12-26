/* default value*/
function mult(x,y = 42.0){
  return x * y;
}

/* variable number of parameters*/
function sum(...args){
  return args.reduce((a, b) => a+b, 0)
  /* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce*/
}
const s = sum(5, 4, 3, 2, 1); 
send('parameters sum', s);

/* named parameters */
function vec({x =0, y =0, z =0}){
  return new Vec(x,y,z);
}
var info = {x: 8, z: 42};
const v = vec(info);
send('named parameters', v);


function send(title, text){
  var para = document.createElement("p");
  var str = document.createTextNode("["+title+"] "+text.toString());
  para.appendChild(str);
  document.getElementById("node").appendChild(para);
}