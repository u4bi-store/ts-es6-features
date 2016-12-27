const p = {first: "James", last: "Bond"};
p["profession"] = "spy";

send("hash map first",p.first);
send("hash map last",p.last);
send("hash map profession",p.profession);

function send(title, text) {
    var para = document.createElement("p");
    var str = document.createTextNode("[" + title + "] " + text.toString());
    para.appendChild(str);
    document.getElementById("node").appendChild(para);
}