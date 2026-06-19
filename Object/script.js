// function User(userName, eMail, role = "user"){
//     this.userName = "username"
//     this.eMail = "email"
//     this.role = "role"
//     this.isActive = "true"
//     this.accountCreated = Date.now()
// }

// let user1 = new User("chetan", 'chetan123@gmail.com', 'admin')

// console.log(user1)


// function Calculator(brand){
//     this.brand = brand;
//     this.currentValue = 0;


//     // intance methods
//     this.add = function(num){
//         this.currentValue = this.currentValue + num
//         return this.currentValue

//     }


//     this.reset = function(){
//         this.currentValue = 0;
//     }
// }

// let cal = new Calculator("Casio")

// console.log(cal.add(5))
// console.log(cal.add(5))
// cal.reset()
// console.log(cal.add(22))




// task create constructor function Rectangel which take length and witch as input
// it has 3 methods 
    // 1.getArea() - return the area if the rectangel
    //2. getPerieter() - return the parameter if the rectangel 
    // 3. isSquare() - return true if its a square and flase if its not


function Rectangel(width , length){
     this.width = width;
     this.length = length;


     this.getArea = function(){
        return this.length* this.width;
     }

     this.getPerimeter = function(){
        return 2*(this.length + this.width)
     }

     this.Square = function(){
        if(this.width == this.length){
            return true
        }
        else{
            return false
        }
     }

}

let rec = new Rectangel(12 , 12)
console.log(rec.getArea())
console.log(rec.getPerimeter())
console.log(rec.Square())


