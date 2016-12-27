const a = ["u4bi_a","u4bi_b","u4bi_c"];

a.push("u4bi_d");
a.unshift("u4bi_e"); /* 맨앞 배열 시작 노드에 새요소넣음*/

const fox = a[1];
a[a.length - 1] = "u4bi_f"; /* 랭쓰 -1에 f로 주입함*/
send("array", a.join(" - "));
send("array fox", fox);

function send(title, text) {
    var para = document.createElement("p");
    var str = document.createTextNode("[" + title + "] " + text.toString());
    para.appendChild(str);
    document.getElementById("node").appendChild(para);
}