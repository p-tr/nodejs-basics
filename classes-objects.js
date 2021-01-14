class Animal {
  constructor() {
    this._blablabla = 0;
  }

  yell() {
    throw new Error("I don't know which language to speak !");
  }

  get blablabla() { // this.blablabla
    return this._blablabla;
  }

  set blablabla(value) { // this.blablabla
    console.log(`[set blablabla] = ${value}`);
    this._blablabla = value;
  }
}

class Cat extends Animal {
  yell() {
    console.log("Meow !");
  }
}

class Dog extends Animal {
  yell() {
    console.log("Woof !");
  }
}

const loki = new Dog();
const jinny = new Cat();
const toto = new Animal();

try {
  toto.yell();
}

catch(err) {
  console.error(err);
}

finally {
  loki.yell();
  jinny.yell();

  console.log(loki.blablabla);

  loki.blablabla = 0;
}
