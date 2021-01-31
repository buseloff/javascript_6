"use strict";

/*function getAllParaElems() {
  var allParas = document.getElementsByTagName("p");
  var num = allParas.length;
  console.log("There are " + num + " paragraph in this document");
}

function div1ParaElems() {
  var div1 = document.getElementById("div1");
  var div1Paras = div1.getElementsByTagName("p");
  var num = div1Paras.length;
  console.log("There are " + num + " paragraph in #div1");
}

function div2ParaElems() {
  var div2 = document.getElementById("div2");
  var div2Paras = div2.getElementsByTagName("p");
  var num = div2Paras.length;
  console.log("There are " + num + " paragraph in #div2");
}*/

let elemClass1 = document.querySelectorAll(".class1");
for (let item of elemClass1) {
  console.log(item);
}
console.log("-------------");
let elemClass2 = document.querySelectorAll(".class2");
for (let item of elemClass2) {
  console.log(item);
}
console.log("-------------");
let elemClass1and2 = document.getElementsByClassName("class1 class2");
for (let item of elemClass1and2) {
  console.log(item);
}
console.log("-------------");
let parClass1 = document.querySelectorAll("p.class1");
for (let item of parClass1) {
  item.style.backgroundColor = "yellow";
}
console.log("-------------");

let parClass2 = document.querySelectorAll("p.class2");
for (let item of parClass2) {
  item.style.color = "blue";
}
console.log("-------------");
