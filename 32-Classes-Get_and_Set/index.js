//One of the major problems with JS is that there
//are no private properties - all of its properties
//and methods are accessible by anyone, meaning
//that they can be mutated, which can break your
//application. We can use two special class features
//to prevent this.

// В классах доступен функционал GETтеров и SETтеров.
//Для управляемого доступа к состоянию объекта используют
//специальные функции, так называемые «геттеры» и «сеттеры».
// Чтобы ограничить контроль над свойством со стороны
// внешнего кода (свойство полностью доступно снаружи)
// его делают приватным, а запись значения осуществляется
// через специальный метод, который называют «сеттер»
// (setter method).
// Защищённые свойства обычно начинаются с префикса _.
// Это не синтаксис языка: есть хорошо известное
//соглашение между программистами, что такие
//свойства и методы не должны быть доступны извне.

//Защищённые поля наследуются!

// Для большего контроля над присвоением и чтением
//значения вместо свойства делают «функцию-геттер» и
//«функцию-сеттер», геттер возвращает значение, сеттер –
//устанавливает.

// Если свойство предназначено только для чтения,
//то может быть только геттер, только для записи – только сеттер.

// В качестве альтернативы к паре геттер/сеттер применяют
//единую функцию, которая без аргументов ведёт себя как
//геттер, а с аргументом – как сеттер.

// Getters and setters are used to protect your data,
//particularly when creating classes. For each instance
//variable, a getter method returns its value while
//a setter method sets or updates its value. Given this,
//getters and setters are also known as accessors
//and mutators, respectively.

//https://learn.javascript.ru/getters-setters
//https://learn.javascript.ru/private-protected-properties-methods

//====================

class Product {
  constructor(name, price, discountable) {
    this.name = name;
    // Защищённые свойства обычно начинаются с префикса _.
    this._price = price;
    this.discountable = discountable;
  }
  //'bridge properties': getter & setter
  // Для большего контроля над присвоением и чтением
  //значения вместо свойства делают «функцию-геттер» и
  //«функцию-сеттер», геттер возвращает значение,
  //сеттер – устанавливает.
  //1. A getter allows us to access properties in
  //an object.
  get price() {
    //property with '_' shouldn't be used
    //outside the class & can't be mutated!!!
    //just return 'price' value
    return this._price;
  }
  //! getters&setters have to have the same name!

  //2. A setter allows users to change or mutate
  //the properties in an object, while ensuring that
  //the value set is a valid type.

  set price(price) {
    if (typeof price !== "number") {
      //if typeof not a number =>
      //returrn previous 'price'
      return this._price;
    } else {
      //it is price that is passed in
      this._price = price;
    }
  }
}

const product1 = new Product("Coffee Maker", 99.95, false);
product1.price = 30;
console.log(product1.price); //30

product1.price = {};
console.log(product1.price); //30

product1.price = "bnmbmbk";
console.log(product1.price); //30
