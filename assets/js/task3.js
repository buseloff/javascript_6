"use strict";

let links = document.querySelectorAll("a");
for (let item of links) {
  let hrefL = item.getAttribute("href");
  if (hrefL.includes("http://")) {
    item.style.color = "red";
  }
}

let UL = document.createElement("ul");
let LI1 = document.createElement("li");
let LI2 = document.createElement("li");
let LI3 = document.createElement("li");
UL.append(LI1);
UL.append(LI2);
UL.append(LI3);

document.body.appendChild(UL);

let divElem = document.getElementById("id1");
divElem.setAttribute("newAttr", 100);
divElem.removeAttribute("newAttr");