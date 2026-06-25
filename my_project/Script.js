

let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let age = document.getElementById("age")
const submitBtn = document.getElementById("submit");


function saveLocalStorage(key , value){
    localStorage.setItem(key , value)
}

firstname.addEventListener("input",(e) =>{
    saveLocalStorage("firstname" , e.target.value)
});

lastname.addEventListener("input", (e) => {
    saveLocalStorage("lastname", e.target.value)
});

age.addEventListener("input", (e)=>{
    saveLocalStorage("age", e.target.value)
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Get current form values
    const data = {
        firstname: firstname.value,
        lastname: lastname.value,
        age: age.value
    };
    console.log("Form Data Submitted:", data);
})

