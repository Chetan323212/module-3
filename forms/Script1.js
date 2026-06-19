


const redioBtn = document.querySelectorAll('input[name="gender"]')



const submit = document.querySelector('#submit')

// submit.addEventListener("click", (e)=>{
//     e.preventDefault();
//     let checkedElements = [];
//     const checkBtns = document.querySelectorAll('input[name="hobby"]')
//     checkBtns.forEach(item=>{
//         if(item.checked){
//             checkedElements.push(item.value)
//         }
//     })
//     console.log(checkedElements)
// })


// submit.addEventListener("click", (e)=>{
//     e.preventDefault();
//     const select = document.querySelector("#fruits")
//     console.log(select.options)
//     let selectElements= []
//     let selectValue = Array.from(select.options)
//     .filter(options => options.selected)
//     .map(item=> item.value)
//     console.log(selectValue)
// })

// const input = document.querySelector('#input')
// const error = document.querySelector("#error")


// input.onblur = function(){
//     if(!input.value.includes("@")){
//         error.innerHTML = "Please enter valide email"
//     }
// }


// input.onfocus = function(){
//     error.innerHTML = ""

// }

const input = document.querySelector('#input')

// input.addEventListener('change',()=>{
    // console.log("hello")
// })

const h3 = document.querySelector("h3")

input.addEventListener('input', (e)=>{
    console.log(e.target.value)
    h3.textContent = e.target.value
})




