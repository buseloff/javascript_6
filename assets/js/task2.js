"use strict";

let elemParag = document.getElementsByTagName("p");
for (let item of elemParag) {
  document.write("text paragraph's =" + item.innerHTML + "<br/>");
}
let elemImage = document.getElementsByTagName("img");
elemImage[0].src =
  "https://ichef.bbci.co.uk/news/640/cpsprodpb/14236/production/_104368428_gettyimages-543560762.jpg";
