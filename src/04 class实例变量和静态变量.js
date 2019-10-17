// function Person(name,age){

// }

// let person = new Person();
// console.log(person);
// Person.prototype.sayHello=function(){
//   console.log("hello");
// }
// person.sayHello();

// Person.sayNo = function(){
//   console.log("no");
// }

// Person.sayNo();

class Animal {

  static type = "animal";

  constructor(){
    console.log("constructor");
  }

  jiao = function() {
    console.log("jiao");
  }

  static run = function() {
    console.log("run");
  }
}

console.log(new Animal());
console.log(new Animal().jiao());
console.log(Animal.run());
console.log(Animal.type);