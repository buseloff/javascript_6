"use strict";

class ShowArray {
  constructor(array) {
    this.array = array;
  }
  [Symbol.iterator]() {
    let nextIndex = 0;
    let array = this.array;
    return {
      next() {
        return nextIndex < array.length
          ? { value: array[nextIndex++], done: false }
          : { done: true };
      },
    };
  }
}

const array1 = [];
for (let i = 0; i < 10; i++) {
  array1.push(+(Math.random() * 100).toFixed(0));
}
const class1 = new ShowArray(array1);
for (let num of class1) {
  console.log(num); // 1, затем 2, 3, 4, 5
}

class User {
  static #counter = 0;
  constructor(name, surname) {
    this._name = name;
    this._surname = surname;
    User.#counter++;
  }
  set name(value) {
    if (typeof value !== "string") {
      throw new TypeError("Input string value");
    }
    this._name = value;
  }
  set surname(value) {
    if (typeof value !== "string") {
      throw new TypeError("Input string value");
    }
    this._surname = value;
  }
  get name() {
    return this._name;
  }
  get surname() {
    return this._surname;
  }

  getFullname() {
    console.log(this._name + " " + this._surname);
  }
}

class Stud extends User {
  static #counter = 0;
  constructor(name, surname, year) {
    super(name, surname);
    this._year = year;
    Stud.#counter++;
  }
  set year(value) {
    if (typeof value !== "number") {
      throw new TypeError("Input number value");
    }
    this._year = value;
  }
  get year() {
    return this._year;
  }
  getFullname() {
    super.getFullname();
  }
  getCourse() {
    console.log(`Course = ${new Date().getFullYear() - this.year}`);
  }
  getQuantity() {
    console.log(`Quantity of students = ${Stud.#counter}`);
  }
}

const stud1 = new Stud("Pete", "Tong", 2017);
stud1.getFullname();
stud1.getCourse();
stud1.getQuantity();

const array2 = [0, 568, 56, 5, 8, 59];
function findAfter(array) {
  let indexOf0 = array.indexOf(0);
  let array2 = [];
  for (let i = indexOf0 + 1; i < array.length; i++) {
    array2.push(array[i]);
  }
  return array2;
}

console.log(findAfter(array2));

const array3 = [7, 7, 7, 1, 7, 7, 7, 7, 7, 7];
let [, , , num1] = array3;
console.log(num1);

const array4 = [1, 2, 3, [4, 5, [6, 7, 8, 9], 10, 11, 12], 13, 14, 15];
let [, , , [, num2, [, , num3]]] = array4;
console.log(num2 + " " + num3);

let [, , , [, , [...arr_]]] = array4;
console.log(arr_);

let [, , , [...res1], ...res2] = array4;
console.log(res1+","+res2);
