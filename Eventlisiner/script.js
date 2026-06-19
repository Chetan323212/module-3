

//tesk when i click on add new item a new li element should be 
//added in the list for example // new item 1

let add = document.querySelector('#add');
let count = 0;
let todoList = document.querySelector('#todo-list')
add.addEventListener('click',()=>{
    let li = document.createElement('li')
    count++
    li.textContent = `new item ${count}`;
    todoList.append(li);
})

todoList.addEventListener('click',(e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle('done')
    }
})

//Event Delegetion -> when we attach a single eventlistner
//to the parent element and then target its children 
// instead of assigning multiple listners to its children