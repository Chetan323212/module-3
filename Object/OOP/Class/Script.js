// // class Animal
// // {
// //     constructor(name){
// //         console.log("animal constructor")
// //     }

// //     speak(){
// //         console.log(`${this.name} Make a Sound`);
// //     }
// // }


// // class Dog extends Animal{
// //     bark(){
// //         console.log(`${this.name} barks`);
// //     }
// // }

// // const dog = new Dog("buddy")

// // dog.bark()
// // dog.speak()



// // Class Inheritance

// // class Person{

// //     constructor(name ,age){
// //         this.name = name;
// //         this.age = age;
// //     }
// // }

// // class Student extends Person{
// //     constructor(name ,age, gender){
// //         super(name , age) // super call the constructor values
// //         this.gender = gender
// //     }

// //     study(){
// //         console.log(`${this.name} is studying`);
// //     }
// // }


// // const studen1 = new Student("Chetan", 20 , "male")

// // studen1.study()




// // method ingeritance

// class Phone{
//     #price
//     constructor(brand, price){
//         this.brand = brand
//         this.#price = price
//     }

//     call(){
//         console.log(`${this.brand} calling`);
//     }

//     getprice(){
//         return this.#price
//     }
// }

// class SmartPhone extends Phone{
//     constructor(brand ,price){
//         super(brand , price)
//     }

//     takePhoto(){
//         console.log(`${this.brand} takes Photo`);
//         console.log(`The price of the phone is ${this.getprice()}`);
//     }
// }

// let Phone1 = new SmartPhone("Samsung" , 3000)
// Phone1.takePhoto()
// Phone1.call()


// //4.OOPS priciples of OPPS



class Coffemachine{
    #boilWater(){
        console.log("water is boiling");
    }
    #brew(){
        console.log("Brewing");
    }

    makeCoffee(){
        this.#boilWater()
        this.#brew()
        console.log(`Coffee is Ready`);
    }
}

const machine = new Coffemachine()
machine.makeCoffee()


// Polymorphismc

// class Animal{
//   makeSound(){
//     console.log("Some sound");
//   }
// }
// class Dog extends Animal{
//     makeSound(){
//         console.log("Woof");
//     }
// }
// class Cat extends Animal{
//     makeSound(){
//         console.log("meow");
//     }
// }


// const dog = new Dog()
// dog.makeSound()
// const cat = new Cat()
// cat.makeSound();  



class vehical{
    start(){
        console.log("Engine is starting")
    }
}

class Car extends vehical{
    start(){
        super.start()
        console.log("Car is runing");
    }
}

const car = new Car()
car.start()











