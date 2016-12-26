function greeter(person: string) {
    return "u4bi" + person;
}

var user = "u4bi";
var user_a = [0,1,2]; /* 컴파에러 타입이 다름*/
document.body.innerHTML = greeter(user);