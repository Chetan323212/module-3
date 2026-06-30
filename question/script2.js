// Question: Extract names from array of user objects
// const users = [
//   { id: 1, name: 'Alice', age: 25 },
//   { id: 2, name: 'Bob', age: 30 },
//   { id: 3, name: 'Charlie', age: 35 }
// ];



// let names = users.map((item)=> item.name)
// console.log(names);


// Question: Add a new property to each object


// const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];


// const usersWithSatus = users.map(user =>({
//     ...user,

//     status: "active",
//     age:"20"
// }))

// console.log(usersWithSatus);



// Question: Get all users older than 25
// const users = [
//   { id: 1, name: 'Alice', age: 25 },
//   { id: 2, name: 'Bob', age: 30 },
//   { id: 3, name: 'Charlie', age: 20 }
// ];


// const adults = users.filter((user)=> user.age >=25)
//                     .map((item)=> item.name)

// console.log(adults);


// Question: Filter users with specific status
// const users = [
//   { id: 1, name: 'Alice', status: 'active' },
//   { id: 2, name: 'Bob', status: 'inactive' },
//   { id: 3, name: 'Charlie', status: 'active' }
// ];


// const  activeUsers = users.filter((user)=> user.status == "active")

// console.log(activeUsers);


// Question: Sum all prices from product objects
// const products = [
//   { id: 1, name: 'Laptop', price: 1000 },
//   { id: 2, name: 'Phone', price: 500 },
//   { id: 3, name: 'Tablet', price: 300 }
// ];

// const finalprice = products.reduce((acc , curent) => acc + curent.price , 0)
// console.log(finalprice);


// Question: Convert array of objects into a single object (grouping by ID)
// const items = [
//   { id: 1, name: 'Apple' },
//   { id: 2, name: 'Banana' },
//   { id: 3, name: 'Cherry' }
// ];

// let itemMap = items.reduce((acc, item)=>{
//     acc[item.id] = item.name;
//     return acc;

// }, {});
// 
// console.log(itemMap);


//Question: Count occurrences of a property
// const users = [
//   { name: 'Alice', role: 'admin' },
//   { name: 'Bob', role: 'user' },
//   { name: 'Charlie', role: 'admin' }
// ];

// let count = users.reduce((acc ,user)=>{
//     acc[user.role] = (acc[user.role] || 0) + 1
//     return acc;
// }, {})

// console.log(count);