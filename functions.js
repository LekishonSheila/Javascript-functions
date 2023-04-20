// Write a function called checkSeason, 
// it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    if (month >= 3 && month <= 5) {
      return "Spring";
    } else if (month >= 6 && month <= 8) {
      return "Summer";
    } else if (month >= 9 && month <= 11) {
      return "Autumn";
    } else {
      return "Winter";
    }
  }
  console.log(checkSeason(4));

//  Weight of a substance is calculated as follows: weight = mass x gravity. 
// Write a function which calculates weight. 
function calculateWeight(mass, gravity) {
    return mass * gravity;
  }
  console.log(30);
// Declare a function name sumOfNumbers. It takes a number
//  parameter and it adds all the numbers in that range.
function sumOfNumbers(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
 console.log(sumOfNumbers(13)); 

//  Declare a function fullName and now it takes firstName,
//  lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  console.log(fullName("Lekishon", "Sheila")); 
console.log(fullName("Kurao", "Seneyia")); 

  







  

