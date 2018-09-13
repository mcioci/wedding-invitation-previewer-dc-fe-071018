//FIRST NAME FIRST PERSON
console.log("document.getElementById('fname1Entry')", document.getElementById("fname1Entry"))
document.getElementById("fname1Entry").addEventListener("keyup", createText);
var nameString = ""
function createText(event) {
  console.log("== createText ==")
  // console.log("event.which:", event.which);
  // console.log(String.fromCharCode(event.which));
  let textValue = document.getElementById("fname1Entry").value;
  document.getElementById("fname1Display").innerText = textValue;
}

//LAST NAME FIRST PERSON
console.log("document.getElementById('lname1Entry')", document.getElementById("lname1Entry"))
document.getElementById("lname1Entry").addEventListener("keyup", createText2);
var nameString = ""
function createText2(event) {
  console.log("== createText2 ==")
  let textValue = document.getElementById("lname1Entry").value;
  document.getElementById("lname1Display").innerText = textValue;
}

//FIRST NAME SECOND PERSON
console.log("document.getElementById('fname2Entry')", document.getElementById("fname2Entry"))
document.getElementById("fname2Entry").addEventListener("keyup", createText3);
var nameString = ""
function createText3(event) {
  console.log("== createText3 ==")
  let textValue = document.getElementById("fname2Entry").value;
  document.getElementById("fname2Display").innerText = textValue;
}

//LAST NAME SECOND PERSON
console.log("document.getElementById('lname2Entry')", document.getElementById("lname2Entry"))
document.getElementById("lname2Entry").addEventListener("keyup", createText4);
var nameString = ""
function createText4(event) {
  console.log("== createText4 ==")
  let textValue = document.getElementById("lname2Entry").value;
  document.getElementById("lname2Display").innerText = textValue;
}

//DATE
console.log("document.getElementById('dateEntry')", document.getElementById("dateEntry"))
document.getElementById("dateEntry").addEventListener("keyup", createText5);
var nameString = ""
function createText5(event) {
  console.log("== createText5 ==")
  let textValue = document.getElementById("dateEntry").value;
  document.getElementById("dateDisplay").innerText = textValue;
}

//TIME
console.log("document.getElementById('fname2Entry')", document.getElementById("fname2Entry"))
document.getElementById("fname2Entry").addEventListener("keyup", createText3);
var nameString = ""
function createText3(event) {
  console.log("== createText3 ==")
  let textValue = document.getElementById("fname2Entry").value;
  document.getElementById("fname2Display").innerText = textValue;
}

// document.getElementById("fnameEntry").addEventListener("onclick", createText);
// let divBox = document.getElementById("invitation");
// let newDiv = document.createElement("invitation2");
// divBox.appendChild(newDiv);
//
// newDiv.setAttribute("id", "newDiv");
// newDiv.style.border = "2px solid black";
// newDiv.background-color = "white";
