const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
//   Find the length of your array
console.log(countries.length);

// Get the first item, the middle item and the last item of the array
const firstCountry = countries[0];
const middleCountry = countries[Math.floor((countries.length - 1) / 2)];
const lastCountry = countries[countries.length - 1];

console.log(firstCountry);
console.log(middleCountry);
console.log(lastCountry);

// The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort(); 

const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log(minAge); 
console.log(maxAge); 

// Find the median age(one middle item or two middle items divided by two)
const age = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort(); 
const middleIndex = Math.floor(ages.length / 2);

let medianAge;

if (ages.length % 2 === 0) {
  
  medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
  
  medianAge = ages[middleIndex];
}
console.log(medianAge); 

// Find the average age(all items divided by number of items)
let sum = 0;

for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}

const averageAge = sum / ages.length;

console.log(averageAge); 
// Find the range of the ages(max minus min)
ages.sort(); // Sort the array in ascending order

const minAges = ages[0];
const maxAges = ages[ages.length - 1];

const ageRange = maxAge - minAge;

console.log(ageRange); 







