


// let Class = document.getElementsByClassName("Class")
// let id = document.getElementById("ID")
//let btn = document.getElementsByClassName("btn")
let body = document.querySelector("body")
let id = document.querySelector("h1")
let Class = document.querySelector("h2")
let btn = document.querySelector("button")
let p = document.createElement("h1")



id.textContent= "I Have an ID";
Class.innerText = "I Have an Class"
btn.textContent = "Button with Class"
p.innerText = "Hello Chetan Wellcome"
body.append(p)
console.log(p);
console.log(id);