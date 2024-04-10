function cats(array) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let i = 0; i < array.length; i++) {
    const [name, age] = array[i].split(' ');
    const cat = new Cat(name, age);
    cat.meow();
  }
}
