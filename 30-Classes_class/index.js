// 'class' is another way to create objects
//with shared behaviour or methods, and operate
//in the same way as constructor functions.
// We add methods directly onto the Class body,
//inside a constructor() function:
// class Student {
//   constructor(id, name, subjects = []) {
//     this.id = id;
//     this.name = name;
//     this.subjects = subjects;
//   }
//   addSubject() {}
// }

// To create a new instance of our class, we use the
//new keyword, just like in a constructor function:
// const student1 = new Student(1, 'Zhur');

// We have full access to the this context in the methods
//on our Class body if we call them directly on an
//instance of a Class:
// getStudentName() {
//     return `Student: ${this.name}`
//   }

//=============================
// classes === constructor functions & they
//operate in the same way:
// function Student() {} === class Student{}
console.log(typeof class Student {});
//function

// We can see that prototypes form a chain leading
//back to the original Object prototype with=>
//prototype chaining methods => Student.prototype.'methodName'
//OR
// classes - create objects with shared methods
//С помощью ключевого слова "class" можно создавать
//классы и далее в {фигурных скобках} описывать
//тело этого класса:
//create class Student:
class Student {
  //задаём функцию 'constructor' и в неё мы
  //получаем определённый набор параметров,
  //например, параметр 'name'
  //constructor=>creates 'this' context
  constructor(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
  } //!NB NO COMMAS after {}
  //-------------
  //Мы можем задавать методы  внутри класса:
  getStudentName() {
    return `Student: ${this.name}`;
  } //!NB NO COMMAS after {}
  //--------------------
  //Мы можем задавать методы  внутри класса:
  addSubject() {}
  //------------------
  //Можно создавать переменные внутри класса:
  type = "human";
}

//create student from class Student
const student1 = new Student(1, "Zhur");
console.log(student1.getStudentName());
//Student: Zhur
console.log(student1.type);
//human

//==============================
//===============================
//Challenge:
// 1. A school's film club wants to store details
//of the films it has studied so far this year.
//Create a new class to store the following
//data about each film:
//id, title, director, releaseYear and genres[].

// 2. Create two methods on the class: one for
//adding multiple genres to the films - addGenre(genre)
// - and one to get the title of the film - getFilmTitle().

class Film {
  constructor(id, title, director, releaseYear, genres = []) {
    this.id = id;
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.genres = genres;
  } //!NB NO COMMAS after {}
  //method for adding multiple genres:
  addGenre(genre) {
    //spread out genres [] and add new one:
    this.genres = [...this.genres, genre];
    //or do this with 'push':
    //this.genres.push(genre);
  } //!!NB NO COMMAS after {}
  //method for getting the title of the film:
  getFilmTitle() {
    return `Film: ${this.title}`;
  }
}

// 3. Instantiate a new instance of the class
//using data from your favourite film.
const myFavouriteFilm = new Film(1, "Rear Window", "Alfred Hitchcock", "1954");

console.log(myFavouriteFilm.director);
//Add at least 1 genre to your film using
//addGenre(), and get the title using getFilmTitle()
myFavouriteFilm.addGenre("Thriller");
console.log(myFavouriteFilm.genres);
console.log(myFavouriteFilm.getFilmTitle());
