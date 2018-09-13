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

//LAST NAME SECOND PERSON
console.log("document.getElementById('lname1Entry')", document.getElementById("lname1Entry"))
document.getElementById("lname1Entry").addEventListener("keyup", createText2);
var nameString = ""
function createText2(event) {
  console.log("== createText2 ==")
  let textValue = document.getElementById("lname1Entry").value;
  document.getElementById("lname1Display").innerText = textValue;
}

// document.getElementById("fnameEntry").addEventListener("onclick", createText);
// let divBox = document.getElementById("invitation");
// let newDiv = document.createElement("invitation2");
// divBox.appendChild(newDiv);
//
// newDiv.setAttribute("id", "newDiv");
// newDiv.style.border = "2px solid black";
// newDiv.background-color = "white";
