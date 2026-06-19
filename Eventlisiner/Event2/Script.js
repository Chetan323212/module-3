
// // let btn = document.querySelector('#btn');
// // btn.addEventListener('click',(e)=>{
// //     console.log(e)
// //     if(e.altKey && e.shiftKey){
// //         console.log("hello World")
// //     }
// // })

const { cloneElement } = require("react");


// let box = document.querySelector('.box');
// box.addEventListener('mouseover',()=>{
//     console.log("cursor is in side the box");
// })

// box.addEventListener('mouseout',()=>{
//     console.log('curser is leaving the element')
// })


let thim = document.querySelector('#thim');
let body= document.querySelector('.body')
thim.addEventListener('click',(e)=>{
    console.log(e)
    body.classList.toggle('dark')
    if(t)
})