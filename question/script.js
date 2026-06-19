
// 
// let img = document.querySelector(img);
// console.log(img.getAttribute('src'));
// console.log(img.getAttribute('alt'));
// img.setAttribute('src', );

// 
// let boxcontainer = document.querySelector('.box-container');
// 
// let div = document.createElement('div');
// div.style.height = "200px";
// div.style.width = "200px";
// div.style.backgroundColor = "red";
// div.className = box;
// 
// boxcontainer.append(div);


let fruits = ['apple', 'banana', 'kiwi', 'orange'];
let ul = document.querySelector('ul')


fruits.map((item)=>{
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
})


let user = [
    {id:1,name:"pranav"},
    {id:2,name:"Sourav"},
    {id:3,name:"anjlai"},
    {id:4,name:"rahul"},
]

let table = document.querySelector('table');

user.map(item=>{
    let tr = document.createElement('tr')
    let td1 = document.createElement('td');
    td1.textContent = item.id;
    let td2 = document.createElement('td');
    td2.textContent = item.name;

    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);

})