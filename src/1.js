/*
  Клас Student, який містить три властивості: name, age та grade.
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення,
  напишіть скорочену ініціалізацію.
*/
var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    return Student;
}());
// Приклад використання
var student = new Student("John", 20, "A");
console.log(student.name);
console.log(student.age);
console.log(student.grade);
