class Student{
  fullName : string;
  constructor(public firsttName, public middleInitial, public lastName){
    var b = firsttName+" "+middleInitial+" "+lastName;
    this.fullName = b;
  }

}
interface Person{
  firstName : string;
  lastName : string;
}

function greeter(person: Person) {
    return "u4bi " + person.firstName+" "+person.lastName;
}

var user = new Student("Myungjae","Jay","Yu");

document.body.innerHTML = greeter(user);