const form = document.getElementById("Myform");

const name = form.elements.name;
const address = form.elements.address;
const age = form.elements.age;
const userInfo = form.elements.userInfo;

let people = [];
let tbody = document.querySelector("tbody");
const submitBtn = document.getElementById("submiBtn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const personObj = {};

  if (!name.value.trim()) {
    return;
  } else {
    personObj.name = name.value;
  }
  if (!address.value.trim()) {
    return;
  } else {
    personObj.address = address.value;
  }
  if (!age.value.trim()) {
    return;
  }else if(age.value > 18){
    personObj.age = age.value;
  }
  if (!userInfo.value.trim()) {
    return;
  } else {
    personObj.userInfo = userInfo.value;
  }
  console.log(personObj)
  people.push(personObj);
  tbody.innerHTML = "";
  createTable(people);
  form.reset();
});

function createTable() {
  people.map((item) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = item.name;
    let td2 = document.createElement("td");
    td2.textContent = item.address;
    let td3 = document.createElement("td");
    td3.textContent = item.age;
    let td4 = document.createElement("td");
    td4.textContent = item.userInfo;

    tr.append(td2);
    tr.append(td2);
    tr.append(td1);
    tr.append(td3);
    tr.append(td4);

    tbody.append(tr);
  });
}
