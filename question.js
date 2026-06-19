// Solve the below only using array methods (don't use for loop)
// Q1. Get all employee names as an array.
// Q2. Filter employees who belong to the "Engineering" department.
// Q3. Calculate the total salary of all employees.
// Q4. Find the employee with the highest salary.
// Q5. Sort employees by salary in descending order (do not mutate the original).
// Q6. Count how many Engineering employee earns more than 70,000.
// Q7. Get a list of unique departments.
// Q8. Find the average salary per department.
// Q9. Get employees who know "CSS" as a skill.
// Q10. Add a seniorityLevel property to each employee: "Senior" if age >= 30, else "Junior".

const employees = [
  { id: 1, name: "Ananya", dept: "Engineering", salary: 75000, age: 28, skills: ["JS", "React", "Node"] },
  { id: 2, name: "Rohan", dept: "Design", salary: 52000, age: 34, skills: ["Figma", "CSS", "HTML"] },
  { id: 3, name: "Priya", dept: "Engineering", salary: 95000, age: 31, skills: ["JS", "Python", "AWS"] },
  { id: 4, name: "Karan", dept: "HR", salary: 48000, age: 26, skills: ["Excel", "Communication"] },
  { id: 5, name: "Meera", dept: "Design", salary: 61000, age: 29, skills: ["Figma", "Illustrator", "CSS"] },
  { id: 6, name: "Dev", dept: "Engineering", salary: 82000, age: 38, skills: ["Java", "AWS", "Docker"] },
];

// Q1. Get all employee names as an array.

let employeeName = employees.map(employe => employe.name)
console.log(employeeName);

// Q2. Filter employees who belong to the "Engineering" department.

let depts = employees.filter(employe => employe.dept == "Engineering")
console.log(depts)

// Q3. Calculate the total salary of all employees.

let totalsal = employees.reduce((total, curent) => total + curent.salary,0)
console.log(totalsal)

// Q4. Find the employee with the highest salary.
let hightsal = employees.reduce((acc, curent) => acc > curent.salary,0)
console.log(hightsal);

// Q5. Sort employees by salary in descending order (do not mutate the original).

let sortsal = employees
                        .map(employe => employe.salary)
                        .sort((a,b)=> b-a);
console.log(sortsal);

// Q6. Count how many Engineering employee earns more than 70,000.
let Engemp = employees
                    .filter(employe => employe.dept == "Engineering" && employe.salary > 70000)
                    .reduce((acc, curent,) =>  acc + curent,0)
console.log(Engemp);

// Q7. Get a list of unique departments.

// Q9. Get employees who know "CSS" as a skill.

let skill = employees
                    // .map(employe => employe.skills)
                    .filter(employe => employe.skill == ["CSS"])

                    
console.log(skill);


// Q10. Add a seniorityLevel property to each employee: "Senior" if age >= 30, else "Junior".

let result = employees.map(employe => {
    if(employe.age >=30){
        employe.seniorityLevel = "Senior"
    }
    else{
        employe.seniorityLevel = "Junior"
    }
})

console.log(result);