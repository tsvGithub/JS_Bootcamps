//Binding solves the problem of losing 'this'
//when using callbacks such as setTimeout.
//To ensure that all references to the method
//are bound properly, we override the method in
//the constructor:
// this.favoriteProduct = this.favoriteProduct.bind(this)
//При передаче методов объекта в качестве колбэков,
//например для setTimeout, возникает известная
//проблема – потеря this.
const isAuth = true;
const user = {
  favorites: [],
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    //
    //Вызовом .bind(this) мы передаём текущий this, привязывая его к функции.
    this.favoriteProduct = this.favoriteProduct.bind(this);
  }

  handleFavoriteProduct = () => {
    if (isAuth) {
      //this.favoriteProduct();
      //without .bind(this)
      // setTimeout(() => this.favoriteProduct(), 3000);

      //with bind(this)
      //Вызовом .bind(this) мы передаём текущий this, привязывая его к функции.
      setTimeout(this.favoriteProduct, 1000);
    } else {
      console.log("You must be signed in to favorite products!");
    }
  };

  //onClick
  favoriteProduct = () => {
    user.favorites.push(this.name);
    console.log(`${this.name} favorited!`);
  };
}

const product1 = new Product("Coaster", 89.99);
product1.handleFavoriteProduct();
