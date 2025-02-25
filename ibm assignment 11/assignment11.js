//Problem 1: Create a Student Management System (Using Objects) 
// class Student {
//     constructor(name, rollNumber, marks) {
//       this.name = name;
//       this.rollNumber = rollNumber;
//       this.marks = marks;
//     }
  
//     getAvg() {
//       let totalMarks = 0;
//       let subjectCount = 0;
//       for (let subject in this.marks) {
//         totalMarks += this.marks[subject];
//         subjectCount++;
//       }
//       return totalMarks / subjectCount;
//     }
  
//     checkPassOrFail() {
//       const avgMarks = this.getAvg();
//       return avgMarks > 40 ? 'Passed' : 'Failed';
//     }
//   }

//LIBRARY BOOK AVAILABILITY AND RETURN 
  
//   const student1 = new Student('Doe', 123, { math: 50, science: 67, history: 40 });
//   console.log(`Average marks: ${student1.getAvg()}`); // Corrected usage
//   console.log(`Status: ${student1.checkPassOrFail()}`);
// const library = {
//     books: {
//       "Atomic Habits": { author: "James Clear", availableCopies: 3 },
//       "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 },
//     },
  
//     borrowBook: function(bookName) {
//       if (this.books[bookName] && this.books[bookName].availableCopies > 0) {
//         this.books[bookName].availableCopies -= 1;
//         console.log(`You have successfully borrowed "${bookName}".`);
//       } else {
//         console.log(`Sorry, "${bookName}" is not available.`);
//       }
//     },
  
//     returnBook: function(bookName) {
//       if (this.books[bookName]) {
//         this.books[bookName].availableCopies += 1;
//         console.log(`You have returned "${bookName}".`);
//       } else {
//         console.log(`Sorry, "${bookName}" does not belong to our library.`);
//       }
//     }
//   };
//   library.borrowBook("Atomic Habits");
// console.log(library.books["Atomic Habits"].availableCopies); 

// library.returnBook("Atomic Habits");
// console.log(library.books["Atomic Habits"].availableCopies);
  
 //TABLE OF  A NUMBER
//  function tablee(num, limit) {
//     for (let i = 1; i <= limit; i++) {
//       console.log(`${num} x ${i} = ${num * i}`);
//     }
//   }
  
//   tablee(5, 10);
  
//|| FizzBuzz (If-Else Conditions) 
// Task: 
// Write a function fizzBuzz(n) that prints numbers from 1 to n, but: 
// • Print "Fizz" if the number is a multiple of 3 
// • Print "Buzz" if the number is a multiple of 5 
// • Print "FizzBuzz" if the number is a multiple of both 3 and 5 
// • Otherwise, print the number itself ||
// function fizzbuzz(n){
//     for(let i=1;i<=n;i++){
//         if (i%3==0 && i%5==0){
//             console.log("FizzBuzz");
//         }
//         else if(i%3==0){
//             console.log("Fizz");
//         }
//         else if (i%5==0){
//             console.log("Buzz");
//         }
//         else{
//             console.log(i);
//         }
// }
// }
// fizzbuzz(50);
  //Reverse a string without reverse()
//   function reverse(str){
//     let reversestr='';
//     for (let i=str.length-1;i>=0;i--){
//         reversestr+=str[i];
//     }
//     return reversestr;
//   }
//   console.log(reverse("javascript"));
//Remove duplicate 
// function duplicate(arr) {
//     let uniarr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (uniarr.indexOf(arr[i]) === -1) {
//         uniarr.push(arr[i]);
//       }
//     }
//     return uniarr;
//   }
  
//   console.log(duplicate([1, 2, 3, 4, 5, 2, 4, 1, 7, 8])); // Output: [1, 2, 3, 4, 5, 7, 8]
  //longest word
  function long(sentence){
    let word=sentence.split(' ');
    let longest='';
    for (let i=0;i<word.length;i++){
        if(word[i].length>longest.length){
            longest=word[i];
        }
    }
    return longest;
  }
  console.log(long(" This flower is so beautiful"));