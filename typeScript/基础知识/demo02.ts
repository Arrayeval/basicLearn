interface Person {
  fistName: string;
  lastName: string;
}
function dreeter (person: Person) {
  return "Hello" + person.fistName + '' + person.lastName
}

let userD = {fistName: 'jane', lastName: 'user'}
document.body.innerHTML = dreeter(userD);