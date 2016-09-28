class Person {
  constructor(name = 'John') {
    this.name = name;
  }

  greet() {
    console.log('Hello ' + this.name + ' using es6!');
  }
}

var John = new Person('Alex');
John.greet();
