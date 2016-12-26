const res = (name === "") ? 0 : 1;
send('if',res);

let x = 0;
for(let i =0; i< 5; i++) x++;
send("for num",x);

const p = ["u4bi_a", "u4bi_b", "u4bi_c", "u4bi_d"];
for(let s of p){
  send('for arr', s);
}

find(1,2);
function find(n, s) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < s; j++) {
      send('for for',i+" "+j);
    }
  }
};

const animal = "dog";
let descAnimal;

switch(animal){
  case "cat":
  case "lion":
  case "tiger":
    descAnimal ="고양이과";
    break;
  case "dog":
  case "wolr":
    descAnimal ="개과";
    break;
  default:
    descAnimal ="해당안됨";
}
send('switch',descAnimal);

function send(title, text){
  var para = document.createElement("p");
  var str = document.createTextNode("["+title+"] "+text.toString());
  para.appendChild(str);
  document.getElementById("node").appendChild(para);
}