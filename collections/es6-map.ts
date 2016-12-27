const m = {first: "james", last: "bond"};

const data = [["first", "james"], ["last", "bond"]];
const m2 = new Map(data);

send("object style map", m);
send("es6 map", data);
send("es6 map copy", m2);

/* object syntax*/
const name = m.first+" "+m.last;
send("object style map name",name);

/* es6 map syntax*/
const name2 = m2.get("first")+" "+m2.get("last");
send("es6 map name2",name2);

function send(title, text) {
    var para = document.createElement("p");
    var str = document.createTextNode("[" + title + "] " + text.toString());
    para.appendChild(str);
    document.getElementById("node").appendChild(para);
}