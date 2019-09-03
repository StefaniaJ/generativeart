"use strict";
const artWork1 = document.querySelector("#artwork1");
const artWork2 = document.querySelector("#artwork2");
const artWork3 = document.querySelector("#artwork3");
const artWork4 = document.querySelector("#artwork4");
const artWork5 = document.querySelector("#artwork5");
const artWork6 = document.querySelector("#artwork6");
const artWork7 = document.querySelector("#artwork7");
const artWork8 = document.querySelector("#artwork8");
const artWork9 = document.querySelector("#artwork9");

//Artwork 1
for (let i = 100; i < 300; i += 20) {
  //create a new div
  let newDiv = document.createElement("div");

  //add a right  class  for div
  newDiv.classList.add("box");

  //set the height and width
  newDiv.style.height = i + "px";
  newDiv.style.width = i + "px";

  //Append the child
  artWork1.appendChild(newDiv);
}

//Artwork 2
for (let i = 0; i < 90; i += 10) {
  //create a new div
  let newDiv = document.createElement("div");

  //add the right class
  newDiv.classList.add("box");

  //add some style
  newDiv.style.transform = `rotate(${i}deg)`;

  //append child
  artWork2.appendChild(newDiv);
}

// Artwork 3
for (let i = 0; i < 200; i += 10) {
  //make a new div
  let newDiv = document.createElement("div");

  // add a right class for div
  newDiv.classList.add("circle");

  //add some style
  newDiv.style.height = i + "px";
  newDiv.style.width = i + "px";

  //append the child (div) at artwork3
  artWork3.appendChild(newDiv);
}

//Artwork 4
for (let i = -90; i < 90; i += 20) {
  //create a new div
  let newDiv = document.createElement("div");

  //add a right class
  newDiv.classList.add("box");

  //add some style
  newDiv.style.transform = `translate(${i}px, ${i}px)`;

  //append the child (div) at artwork4
  artWork4.appendChild(newDiv);
}

//Artwork 5

for (let i = 1; i < 512; i *= 2) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("circle");
  newDiv.style.width = i + "px";
  newDiv.style.height = i + "px";

  artWork5.appendChild(newDiv);
}
