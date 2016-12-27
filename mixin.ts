class Shape{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  
  move(dx, dy){
    this.x += dx;
    this.y += dy;
    send("shape move",this.x+" "+this.y);
  }
  
  _draw(){
    send("shape draw",this.x+" "+this.y);
  }
  
};

class Circle extends Shape{
  constructor(x, y, r){
    super(x, y);
    this.r = r;
  }
  
  draw(){
    send("circle draw",this.x+" "+this.y+" "+this.r);
  }
};

const Clickable = {
  onClick(){
    send("clickable", "클릭함");
  }
};

class ClickableCircle extends Circle {}
Object.assign(ClickableCircle.prototype, Clickable);

const cc = new ClickableCircle(10, 23, 42);
cc.onClick();
cc.draw();
cc._draw();
cc.move(3,3);

function send(title, text){
  var para = document.createElement("p");
  var str = document.createTextNode("["+title+"] "+text.toString());
  para.appendChild(str);
  document.getElementById("node").appendChild(para);
}