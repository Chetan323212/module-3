

// class User{
//     constructor(userName , email){
//         this.userName = userName;
//         this.email = email;
//     }

//     greet(){
//         console.log(`Hello ${this.userName}`)
//     }

// }


// const user1 = new User('Chetan','chetanpatil323212@gmail.com')
// console.log(user1.userName)
// console.log(user1.email)
// user1.greet();

// //Note: the method created inside your class automatically are assigned inside the prototype


// class Student{

//     grade = "A"
//     section = "C"
//     constructor(name , age,marks){
//         this.name = name;
//         this.age = age;
//         this.marks = marks

//         if(this.marks >= 90){
//             console.log(this.grade = "A")
//         } else if(this.marks >= 80){
//             console.log(this.grade = "B")
//         } else if(this.marks >= 60){
//             console.log(this.grade = "C")
//         } else if(this.marks < 60){
//             console.log(this.grade = "F")
//         }
//     }
//     display() {
//         console.log(`Name: ${this.name} Age: ${this.age}  Grade: ${this.grade} Marks: ${this.marks}`);
//     }
// }

// let Student1 = new Student("pranav", 20 , 95);
// console.log(Student1)



// class User{
//     constructor(name , age){
//         this._name = name;
//         this._age = age;
//     }

//     get age(){
//         return this._age;
//     }

//     set age(value){
//         if(value < 0 || value > 120){
//             console.log("Invalid age")
//         }else{
//             this._age = value
//         }
//     }
// }


// const user1 = new User("Pranav" , 10);
// console.log( user1._name , user1._age )
// console.log(user1.age)
// user1.age = 10



// class User{
//     constructor(name , role){
//         this.name = name;
//         this.role = role;
//     }

//     static createAdmin(){
//         return new User(this.name, "Admin")
//     }

//     static createGuest(name){
//         return new User(this.name, "Guest")
//     }
// }

// const person1 = User.createAdmin("Pranav");
// const person2 = User.createGuest("Chetan");
// console.log(person1);
// console.log(person2);

// private fields are written with # prefix and can be accesd in sode the class 
// thay provide true encapsulation 

 class bankAccount{
    #balanc; // private fields

    constructor(name , initialBalance){
        this.name = name
        this.#balanc = initialBalance;
    }

    deposite(amt){
        this.#balanc += amt
    }

    getBalance(){
        return this.#balanc
    }
 }

const User1 = new bankAccount("Chetan" , 10000)
User1.deposite(1000)
console.log(User1);

