console.log("heihei");

class Person {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  sayhello = function() {
    console.log("sayHello");
  }
}

class American extends Person {

}

class Chinese extends Person {

}

console.log(new American("jack",30));
console.log(new Chinese("zhangsan",20));
console.log(new American("jack",30).sayhello());
console.log(new Chinese("zhangsan",20).sayhello());