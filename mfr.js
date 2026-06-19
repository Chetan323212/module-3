//map filter and reduse

// 1. Given an array of names, return them all in UPPERCASE.

// const names = ["alice", "bob", "charlie"];
// // Expected: ["ALICE", "BOB", "CHARLIE"]
// names.map(name=>{
//     let result = name.toUpperCase()
//     console.log(result)
// });

// // 2. Given an array of numbers, return the square of each.
// const nums = [2, 3, 4, 5];
// // Expected: [4, 9, 16, 25]
// nums.map(num =>{ 
//      console.log(num*2)
// })
// 


// 3. Return only the even numbers.
// const nums = [1, 2, 3, 4, 5, 6];
// Expected: [2, 4, 6]

// nums.filter( num =>{
    // let result = num%2==0
    // console.log(result)
// })

// 5. Find the sum of all numbers.
// const nums = [10, 20, 30, 40];
// Expected: 100
// let sum = 0
// nums.reduce((acc,curent)=>console.log(acc+curent),0)

// 
// 6. You have an array of products. Return only the names of products that cost more than ₹500.
// const products = [
//   { name: "Pen", price: 20 },
//   { name: "Bag", price: 800 },
//   { name: "Phone", price: 15000 },
//   { name: "Eraser", price: 5 },
// ];
// // Expected: ["Bag", "Phone"]

// let result =  products
//                     .filter(item => item.price > 500)
//                     .map(item => item.name);
// console.log(result)

// 7. Find the total price of all items in the cart.
// const cart = [
//   { item: "Book", price: 299, qty: 2 },
//   { item: "Pen", price: 49, qty: 5 },
// ];
// // Expected: 843  (299×2 + 49×5)
// let result = cart.reduce((sum, curent) => sum + (curent.price * curent.qty), 0)
// console.log(result)


// 8. Double only the numbers greater than 3
// const nums = [1, 2, 3, 4, 5];
// // Expected: [8, 10]  ← filter first, then map
// let result = nums
//                 .filter(num => num > 3)
//                 .map(num => num*2);
// console.log(result)

// 9. Count how many times each word appears.
// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
// // Expected: { apple: 3, banana: 2, orange: 1 }

// let result = words.reduce((acc, word) => {
//     if(acc[word]) {
//         acc[word] = acc[word] + 1;  // word already exists, add 1
//     } else {
//         acc[word] = 1;              // word seen first time, set to 1
//     }
//     return acc;  // ← must return acc every step!
// }, {});          // ← start with empty object

// console.log(result); // { apple: 3, banana: 2, orange: 1 }


// 10. From a list of students, return the names of students who passed (score ≥ 50), sorted A→Z.


// const students = [
//   { name: "Riya", score: 82 },
//   { name: "Aman", score: 45 },
//   { name: "Neha", score: 91 },
//   { name: "Dev",  score: 38 },
//   { name: "Zara", score: 67 },
// ];
// // Expected: ["Neha", "Riya", "Zara"]

// let result = students
//                     .filter(marks => marks.score>= 50)
//                     .map(names => names.name)
//                     .sort();
// console.log(result);



// Q1.You have a list of temperatures in Celsius, convert them to Fahrenheit.
// const celsius = [0, 20, 37, 100];
// Formula: (c * 9/5) + 32
// Expected: [32, 68, 98.6, 212]

// let result = celsius.map(c => c * 9/5 + 32)
// console.log(result);


// Q2.Return only the users who are 18 or older.
// 
// const users = [
//   { name: "Raj",   age: 15 },
//   { name: "Priya", age: 22 },
//   { name: "Dev",   age: 17 },
//   { name: "Neha",  age: 25 },
// ];
// Expected: [{name:"Priya", age:22}, {name:"Neha", age:25}]
// 
// let result = users.filter(user => user.age > 18);
// console.log(result)

// const nums = [5, 3, 9, 1, 7];
// // Expected: 9
// // Hint: use Math.max(acc, curr)

// let result = nums.reduce( (acc , current)=> Math.max(acc , current))
// console.log(result)


// Return the names of employees whose salary is above 50000.
// const employees = [
//   { name: "Amit",  salary: 45000 },
//   { name: "Sara",  salary: 72000 },
//   { name: "Ravi",  salary: 55000 },
//   { name: "Pooja", salary: 38000 },
// ];
// // Expected: ["Sara", "Ravi"]

// let result = employees
//                     .filter(employe => employe.salary > 50000)
//                     .map(employe => employe.name);
// console.log(result);


//Q5. From the orders below, calculate the total revenue of only delivered orders.
// const orders = [
//   { id: 1, amount: 500,  status: "delivered" },
//   { id: 2, amount: 300,  status: "pending"   },
//   { id: 3, amount: 800,  status: "delivered" },
//   { id: 4, amount: 150,  status: "cancelled" },
//   { id: 5, amount: 1200, status: "delivered" },
// ];
// // Expected: 2500


// let result = orders
//                 .filter(order => order.status == "delivered")
//                 .reduce((sum,current) => sum + current.amount,0);
// console.log(result);