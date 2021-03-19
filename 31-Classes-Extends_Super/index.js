// The 'extends' keyword allows us to use the
//properties from an already existing class to
//create a new (derived = производный,полученный)
//class with additional properties.

// The derived (производный,полученный) class
//requires the 'super' constructor - a function
//used in the 'constructor' method to call the
//class we are extending:

// class SaleProduct extends Product {
//   constructor(name, price, discountable, percentOff) {
//      super(name, price, discountable);
//      this.percentOff = percentOff;
//   }
// }

// 'super' also allows us to execute methods from
//the parent class in the derived (производный,полученный) class.
// getSalePrice() {
//      if (super.isDiscountable()) {
//        return this.price * ((100 - this.percentOff) / 100);
//      } else {
//         return `${this.name} is not eligible for a discount`;
//      }
//   }
// }

//НАСЛЕДОВАНИЕ внутри Class

class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;
  }
  //!NB no commas !
  //create method:

  isDiscountable() {
    return this.discountable;
  }
}
let product1 = new Product("Fridge", 599, true);
console.log(product1);
//Object { name: "Fridge", price: 599, discountable: true }

// У нас есть class Product и мы хотим сделать
//более частный class SaleProduct, который будет
//основываться на базовом классе Product. И для
//того чтобы наследоваться, мы можем воспользоваться
//ключевым словом 'extends' и дальше указать от
//какого класса мы хотим наследоваться.

class SaleProduct extends Product {
  // Если мы хотим реализовать метод 'constructor',
  //мы можем это сделать. Constructor класса Product
  //принимает только поле 'name, price, discountable'.
  //A Сonstructor класса SaleProduct будет принимать
  //'name, price, discountable'' и ещё 'percentOff'.
  constructor(name, price, discountable, percentOff) {
    //'super' what is from 'parent'
    super(name, price, discountable);
    this.percentOff = percentOff;
  }
  //!NB no commas !
  //create method & use method from the parent class:
  getSalePrice() {
    //super => method from the parent class
    if (super.isDiscountable()) {
      return this.price * ((100 - this.percentOff) / 100);
    } else {
      return `${this.name} is not eligible for a discount`;
    }
  }
}

const saleProduct1 = new SaleProduct("Coffee Maker", 99, false, 20);
console.log(saleProduct1.getSalePrice());

// React
// https://reactjs.org
