const RandomGen = {
  _privateMethod(){
    send('instance private method', '프라이빗');
  },
  _rnd(){
    return Math.random()
  },
  
  publicMethod(){
    send('instance public method', '퍼블릭');
    this._privateMethod();
  },
  
  name : "RandomGen",
  getRandomNumber(){
    return this._rnd()
  }
}

const randomGen = RandomGen;

const r = randomGen.getRandomNumber();
const p = randomGen.publicMethod();

send('instance get random number', r);


function send(title, text){
  var para = document.createElement("p");
  var str = document.createTextNode("["+title+"] "+text.toString());
  para.appendChild(str);
  document.getElementById("node").appendChild(para);
}