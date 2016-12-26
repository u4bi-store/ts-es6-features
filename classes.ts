class Shape{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  
  move(dx, dy){
    this.x += dx;
    this.y += dy;
  }
  
  draw(){
    send('shape draw',this.x+" "+this.y);
  }
};

class Circle extends Shape{
  constructor(x, y, r){
    super(x,y);
    this.r = r;
  }
  
  draw(){
    send("circle draw",this.x+" "+this.y+" "+this.r);
  }
}

const c = new Circle(5, 5, 42);
c.draw();

function send(title, text){
  var para = document.createElement("p");
  var str = document.createTextNode("["+title+"] "+text.toString());
  para.appendChild(str);
  document.getElementById("node").appendChild(para);
}