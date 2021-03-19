// A Set is a special object type
//in which each value can occur only once =>
//only unique data is returned
// new Set([1, 2, 3]);
// Что делает Set? На самом деле он выдаёт
//значения без дубликатов, то есть уникальные
//значения, в единственном экземпляре.

//=============================
//Создаем переменную и присваиваем ей значение;
//через ключевое слово new обращаемся к конструктору Set
//и в качестве значения для конструктора можно передавать
//сюда массив из абсолютно любых значений: строки, числа, цифры, объекты, массивы.
const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6]);
console.log(set); //Set(6) [ 1, 2, 3, 4, 5, 6 ]

//------ Методы Set------
//1. Set .add()
// set.add() - добавляет новые значения и возвращает Set, то можно снова вызвать add()
set.add(10).add(20).add(30).add(20);
console.log(set);
// Set { 1, 2, 3, 4, 5, 6, 10, 20, 30 }
// Два раза добавили 20, но в реальности 20 добавилась только раз, то есть только одно единственное уникальное значение!

//2. Set .has()
// Есть ли в сете данное значение?
console.log(set.has(30)); // true
console.log(set.has(15)); // false

//3. Set .size()
// Размер сета, сколько в нём элементов?
console.log(set.size); //9

//4. Set .delete()
// Удалить элемент из сета delete() , возвращает true, потому что удалил успешно, иначе false
console.log(set.size); // 9
console.log(set.delete(1)); // true
console.log(set.size); // 8

//5. Set .clear()
// Очистить весь сет clear() и этот метод ничего не возвращает
console.log(set.clear()); // undefined
console.log(set.size); // 0

//6. Set .values()
// В Set присутствуют вспомогательные поля, которые позволяют получить его значения в разных форматах.
// Получить все значения сета values()
console.log(set.values());
// [Set Iterator] { 1, 2, 3, 4, 5, 6, 10, 20, 30 }

//7. Set .keys()
// Получить все ключи сета keys()
console.log(set.keys());
// [Set Iterator] { 1, 2, 3, 4, 5, 6, 10, 20, 30 }
// Получаем одинаковый результат, так как Set это
//структура данных, которая проще чем Мар и поэтому
//значения и ключи, учитывая, что только значения
// хранятся, они выдают одно и тоже.
// Эти методы нужны для того чтобы Set могли синхронизироваться
//с Мар, для обратной совместимости

//8. Set .entries()
// Получить ключи и значения - получаем массив,
//где ключи и значения дублируются, это нужно
//чтобы из Set можно было бы сделать Мар.
console.log(set.entries());
// [Set Entries] {
//   [ 1, 1 ],
//   [ 2, 2 ],
//   [ 3, 3 ],
//   [ 4, 4 ],
//   [ 5, 5 ],
//   [ 6, 6 ],
//   [ 10, 10 ],
//   [ 20, 20 ],
//   [ 30, 30 ]
// }

//9. for-of
// Можно пробегаться по Set циклом for-of:
for (let key of set) {
  console.log(key);
}
// 1
// 2
// 3
// 4
// 5
// 6
// 10
// 20
// 30
// Получаем ключ данного сета, который по сути
//является и значением. Это и ключи и значения,
//потому что они хранятся в единственном экземпляре.

// Функция возвращает уникальные значения из массива.
// Возвращаем return новый массив и в этом массиве
//создаём новый Set(array) из массива, потому что в
//конструктор мы принимаем массив и дальше, чтобы это
//было новым массивом, мы разворачиваем Set с помощью
//оператора spread [...new Set(array).
function uniqValues(array) {
  return [...new Set(array)];
}
console.log(uniqValues([1, 1, 2, 2, 4, 4, 4, 4, 5, 6, 6]));
// [ 1, 2, 4, 5, 6 ]
// Получаем уникальные значения.

// Можно воспользоваться методом Array.from().
function uniqValues2(array) {
  return Array.from(new Set(array));
}
console.log(uniqValues2([1, 1, 2, 2, 4, 4, 4, 4, 5, 6, 6]));
// [ 1, 2, 4, 5, 6 ]

// Это удобно, когда нужно, чтобы не дублировались значения.
//---------------------------------
// ---------WeakSet----------------

// Это похоже на WeakMap, то есть  WeakSet это тоже самое что и Set,
//но значениями данного Set могут являться только объекты и в случае,
//если какой-либо объект вычищается сборщиком мусора, то тогда от
//удаляется из WeakSet.
// Переменная users, которая является массивом из объектов пользователей.
const users = [{ name: "Elena" }, { name: "Alex" }, { name: "Irina" }];
// Переменная visits, которая является WeakSet.
const visits = new WeakSet();
// В WeakSet доступны методы из обычного Set, то есть можно добавлять
// .add() каких-либо пользователей или любые объекты, но главное,
//чтобы эти значения были объектами.
visits.add(users[0]).add(users[1]);
console.log(visits.has(users[0]));
console.log(visits.has(users[1]));
// true
// true

// По сути WeakSet может только говорить есть ли такой объект или нет .has().
//Больше ничего он делать не может.
console.log(visits.has(users[0]));
// true

// Можно удалить какой-нибудь объект чтобы он не существовал,
//а сделать это можно у массивов с помощью метода
//splice( индекс удаляемого элемента и количество элементов которые удаляет).
users.splice(1, 1);
console.log(visits.has(users[0]));
// true
console.log(visits.has(users[1]));
// false

//======================

console.log(new Set([1, 2, 3])); //Set(3)[(1, 2, 3)];
console.log(new Set([1, 2, 3]).size); //3
console.log(new Set([1, 1, 3]).size); //2
console.log(new Set([[1], [1], [3]]).size); //3!!! even if [1] & [1]

const numbers = new Set([[1], [1], [3]]);
for (const num of numbers) {
  console.log(num);
}
//[1]
//[2]
//[3]

const customerDishes = [
  "Chicken Wings",
  "Fish Sandwich",
  //1
  "Beef Stroganoff",
  "Grilled Cheese",
  "Blue Cheese Salad",
  "Chicken Wings",
  "Reuben Sandwich",
  "Grilled Cheese",
  "Fish Sandwich",
  "Chicken Pot Pie",
  "Fish Sandwich",
  //2
  "Beef Stroganoff",
];

const uniqueDishes = [
  //создаём Set(array) из массива, потому что в
  //конструктор мы принимаем массив и дальше, чтобы это
  //было новым массивом, мы разворачиваем Set с помощью
  //оператора spread [...new Set(array).
  ...new Set(customerDishes),
];
console.log(uniqueDishes);
//(7) ["Chicken Wings", "Fish Sandwich", "Beef Stroganoff", "Grilled Cheese", "Blue Cheese Salad", "Reuben Sandwich", "Chicken Pot Pie"]
