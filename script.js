// var student1 = "ali";
// var student2 = "farhan";
// var student3 = "asf";
// var student4 = "dasfa";
// student1 = "new stu"

// var students = ["ali", "farhan", "naveed", "asf", "dasfasdf", 234, false, null, 234.234]
// console.log(students);
// students[0] = "new student"
// console.log(students[0]);

// for (var index = 0; index < students.length; index++) {
//     const student = students[index];
//     console.log("student", student);
    
// }

// write a js program, that input name from user, and check is it exits in array or not?

// var students = [];

// function addUser() {
//     students[students.length] = document.getElementById("userName").value
//     printStudents()
// }


// function findUser() {
//     var searchValue = document.getElementById("searchInput").value;
//     var result = "not found";
//     for (let index = 0; index < students.length; index++) {
//         const student = students[index];
//         if (student == searchValue) {
//             result = `user found on index ${index}`
//             break;
//         }
//     }
//     document.getElementById("searchResult").innerHTML = result
// }

// function printStudents() {
//     console.log('====================================');
//     console.log(students);
//     console.log('====================================');
// }



// program to find the factorial of a number

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}