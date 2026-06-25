// // local Storage



// localStorage.setItem("name2", "");

// localStorage.removeItem("name2")


// localStorage.setItem("name2" , "asdasd")

// localStorage.removeItem("name2")


// // LocalStorage -> its a browser Storage given to a website thet allows 
// // persistant key value pair with no expiration time 
// // data survives when browser restart and is accssible accrose all
// // tabs/windows of the "Same Origin"


// // crome, firefoxm, egde  => 10mb 
// // safari -> 5mb

// if(navigator.storage && navigator.storage.estimate){
//     navigator.storage.estimate().then(est => {
//         console.log(`Used: ${est.usage}of ${est.quota} bythes`);
//     })
// }


// //stored items 

// localStorage.setItem("number",JSON.stringify(5))
// localStorage.setItem("array",JSON.stringify([1,2,3,4,5]))
// localStorage.setItem("object",JSON.stringify({naem:"chetan"}))


// //fech the item 
// console.log(JSON.parse(localStorage.getItem("number")));
// console.log(JSON.parse(localStorage.getItem("array")));
// console.log(JSON.parse(localStorage.getItem("object")));

// document.addEventListener("DOMContentLoaded" ,()=>{
//     console.log(JSON.parse(localStorage.getItem("number")));
//     console.log(JSON.parse(localStorage.getItem("array")));
//     console.log(JSON.parse(localStorage.getItem("object")));


// })


// let btn1 = document.getElementById("btn1")
// let btn2 = document.getElementById("btn2")
// let countDis = document.getElementById("countDis")
 
// let count =JSON.parse(localStorage.getItem("count")) || 0;
// countDis.textContent = count;
// btn1.addEventListener("click",(e)=>{
//      count++
//      countDis.innerHTML = count
//      localStorage.setItem("count" , JSON.stringify(count))
// })

// btn2.addEventListener("click",(e)=>{
//      count--
//      countDis.innerHTML = count
//      localStorage.setItem("count" , JSON.stringify(count))
// })



// Session storage ->
// pesists -> until tab/window is closed
// scope: single tab
// storage limit: 5- 10 mb
// use case : temporary session data

// Note : both local and session  storage can survive a reload

// sessionStorage.setItem("naem" ,"chetan")


let naem = document.getElementsByName("name")
let age = document.getElementsByName("age")
let discription = document.getElementsByName("discription")
let gnder = document.getElementsByName("gender")



const data = {
    name : localStorage.setItem("name",JSON.stringify(name)),
    age : localStorage.setItem("age",JSON.stringify(age)),
    discription : localStorage.setItem("name",JSON.stringify(discription))
}