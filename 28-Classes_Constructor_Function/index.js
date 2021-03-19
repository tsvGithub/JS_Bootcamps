// Constructor functions provide a way of creating
//numerous objects of the same type.
//They are named starting with a capital letter.
// function Student(id, name, subjects = []) {
//   this.id = id;
//   this.name = name;
//   this.subjects = subjects;
// }
// We add properties or methods to the objects created
//by the constructor function via the prototype keyword.
// Student.prototype.addSubject = function(subject) {
//   this.subjects = [...this.subjects, subject];
// }
//---------------------------
// Классы это удобный синтаксис для создания Объектов.
//Удобны в использовании наследования, то есть задавать логику в прототипах.

//Объект можно создать так:
const student0 = {
  id: 1,
  name: "Zhur",
  subjects: [],
  addSubject(subject) {
    //
    this.subjects = [...this.subjects, subject];
  },
};
student0.addSubject("Web Development");
console.log(student0.subjects); //Array [ "Web Development" ]
//--------------------------------
//Classes
// Или так:
// Классы называют с Большой Буквы!
// Чтобы проинициализировать начальные значения
//Объекта, мы должны реализовать constructor.
//И в constructor мы будем принимать некоторый
//Объект (id, name, subjects) который мы будем
//перечислять в данный класс. Для того, чтобы у
//нового сущности (instanсе) класса Student были
//поля мы должны их проинициализировать через
//ключевое слово this, то есть контекст, который
//будет указывать на текущий Объект.

// constructor function constracts modal Object
function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
  //no need for 'return this'
}

//Создаём Объект student1 с помощью класса Student :
//create student1 & student2:
const student1 = new Student(1, "Zhur");
console.log(student1); //Object { id: 1, name: "Zhur", subjects: [] }
const student2 = new Student(2, "Ksju");
console.log(student2); //Object { id: 2, name: "Ksju", subjects: [] }

//Constructor + prototype+ property
//only function declaration, not arrow functions
Student.prototype.addSubject = function (subject) {
  this.subjects = [
    //spread subject array
    ...this.subjects,
    //add new subject at the end of a new array
    subject,
  ];
};

student1.addSubject("Math");
console.log(student1.subjects); //Array [ "Math" ]

student2.addSubject("Physics");
console.log(student2.subjects); //Array [ "Physics" ]

//=====================
// 1. create a new constructor function, Book,
//which logs books in the school library (id, title,
//author, themes[]),
// 2. Add ids, titles and authors for your two favourite books.
// 3. Use the prototype keyword to add a theme property to the books.
// 4. Add at least one theme to each of your books.

function Book(id, title, author, themes = []) {
  (this.id = id), (this.title = title), (this.author = author), (this.themes = themes);
}
const book1 = new Book(1, "Two lives", "K.Antarova");
console.log(book1.title); //Two lives
const book2 = new Book(2, "War and Peace", "L.Tolstoy");
console.log(book2.title); //War and Peace
const book3 = new Book(3, "Lord of the Rings", "JRR Tolkien");
console.log(book3.title); //Lord of the Rings
const book4 = new Book(4, "The Trial", "Franz Kafka");
console.log(book4.title); //The Trial

book1.themes = "Yoga";
console.log(book1.themes);

// Book.prototype.addTheme = function (newTheme) {
//   this.themes = [...this.themes, newTheme];
// };

// book2.addTheme("Classic");
// book3.addTheme("Fantasy");
// book4.addTheme("Classic");
// console.log(book2.themes);
// console.log(book3.themes);
// console.log(book4.themes);
