class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`سلام، من ${this.name} هستم و ${this.age} سالمه.`);
  }
}

const p1 = new Person("عباس", 30);

console.log(p1);
p1.sayHello()
