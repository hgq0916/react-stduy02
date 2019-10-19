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
  constructor(name,age){
    super(name,age);
  }
}

class Chinese extends Person {
  constructor(name,age,idNum){
    super(name,age);
    this.idNum = idNum;
  }
}

console.log(new American("jack",30));
console.log(new Chinese("zhangsan",20,"2342342"));
console.log(new American("jack",30).sayhello());
console.log(new Chinese("zhangsan",20).sayhello());