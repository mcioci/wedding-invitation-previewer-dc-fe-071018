//FIRST NAME FIRST PERSON
console.log("document.getElementById('fnameEntry')", document.getElementById("fnameEntry"))
document.getElementById("fnameEntry").addEventListener("keyup", createText);
var nameString = ""
function createText(event) {
  console.log("== createText ==")
  // console.log("event.which:", event.which);
  // console.log(String.fromCharCode(event.which));
  let textValue = document.getElementById("fnameEntry").value;
  document.getElementById("fnameDisplay").innerText = textValue;
}

//LAST NAME FIRST PERSON
console.log("document.getElementById('fnameEntry')", document.getElementById("fnameEntry"))
document.getElementById("fnameEntry").addEventListener("keyup", createText);
var nameString = ""
function createText(event) {
  console.log("== createText ==")
  let textValue = document.getElementById("fnameEntry").value;
  document.getElementById("fnameDisplay").innerText = textValue;
}

// document.getElementById("fnameEntry").addEventListener("onclick", createText);
// let divBox = document.getElementById("invitation");
// let newDiv = document.createElement("invitation2");
// divBox.appendChild(newDiv);
//
// newDiv.setAttribute("id", "newDiv");
// newDiv.style.border = "2px solid black";
// newDiv.background-color = "white";
