const person = {
  id: 123,
  usename: 'John',
  gender: 'F',
  age: 20 

}
const newPerson = {...person}
newPerson.age = 21;
newPerson.gender = 'M'
console.log(person)
console.log(newPerson);