interface Person{
  firstName : string;
  lastName : string;
}

function greeter(person: Person) {
    return "u4bi " + person.firstName+" "+person.lastName;
}

var user = {
  firstName : "Myungjae",
  lastName  : "Yu"
};

document.body.innerHTML = greeter(user);