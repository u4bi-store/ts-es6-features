const t = ["james", "bond", 42];
const kv = ["key", 42];

function sumProduct(s){
  let sum = 0;
  let product = 1;
  
  for(let i of s){
    sum += i;
    product *= i;
  }
  return [sum, product];
}


send('tuple t',t);
send('tuple kv',kv);

// const sc = sumProduct([1,2,3]);
// const sum = sc[0];
// const product = sc[1];
// send('tuple sumProduct'+sum+" "+product);

const [sum, product] = sumProduct( [1,2,3] );
send('tuple sumProduct', sum+" "+product);


function send(title, text) {
    var para = document.createElement("p");
    var str = document.createTextNode("[" + title + "] " + text.toString());
    para.appendChild(str);
    document.getElementById("node").appendChild(para);
}