const ch = {
  "a": true,
  "the": true,
  "an": true,
  "and": true
};

const str = "The Sun is a Star and an Energy Source";

const word = str.split(" ").map(s => s.toLowerCase()).filter(s => !ch[s]);
send("set", word)

function send(title, text) {
    var para = document.createElement("p");
    var str = document.createTextNode("[" + title + "] " + text.toString());
    para.appendChild(str);
    document.getElementById("node").appendChild(para);
}