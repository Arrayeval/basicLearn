class Student {
  fullName: string;
  firstName: string;
  lastName: string;
  constructor(public firstName2: string, public middleInitial: string, public lastName2: string) {
      this.fullName = firstName2 + " " + middleInitial + " " + lastName2;
  }
}

interface Person2 {
  firstName: string;
  lastName: string;
}

function greeterw(person : Person2) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let userw = new Student("Jane", "M.", "User");

document.body.innerHTML = greeterw(userw);