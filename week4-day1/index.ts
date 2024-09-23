// pizza shop app 
// that has a menu of pizzas 
// and a cart to add pizza
// and a checkout to pay for pizzas 


// TypeScript Code to Calculate the Area of a Rectangle
// answer for no 1
// Define the length and width
const long: number = 5;
const width: number = 3;

// Function to calculate the area
function calculateArea(long: number, width: number): number {
  return long * width;
}

// Calculate the area
const area: number = calculateArea(long, width);

// Output the result
console.log(`1. The area of the rectangle is: ${area}`);


// answer for no 2 
// function to calculate diameter, circumference and area of circle 
function circleCalculations(radius: number) : {diameter: number, circumference: number, circleArea: number} {
    const diameter: number = radius * 2;
    const circumference: number = 2 * Math.PI * radius;
    const circleArea: number = Math.PI * Math.pow(radius, 2);
    return {diameter, circumference, circleArea};
  
}

// input 
const radius: number = 5;

// call the function 
const { diameter, circumference, circleArea } = circleCalculations(radius);
console.log('2. Circle Calculations:');
console.log(`Diameter: ${diameter}`);
console.log(`Circumference: ${circumference.toFixed(4)}`);
console.log(`Area: ${area.toFixed(4)}`);


// asnwer for no 3 
// function to calculate the third angle of a triangle 
function findThirdAngle(a: number, b:number) : number {
  const totalAngle = 180;
  const thirdAngle = totalAngle - (a + b);
  return thirdAngle;
}

// input 
const AngleA: number = 80;
const AngleB: number = 65;

// calculate the third angle 
const AngleC = findThirdAngle(AngleA, AngleB);
console.log('3. Third Angle of a Triangle:');
console.log(`third angle: ${AngleC}`)

// answer for no 4
// function to calcualate the difference between two dates in days 
function dateDifferenceInDays(date1: string, date2: string) : number {
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  // calculate the difference in time 
  const timeDifference = secondDate.getTime() - firstDate.getTime();

  // convert miliseconds to days 
  const daysDifference = timeDifference / (1000 * 3600 * 24);

  return daysDifference;
}

// input 
const date1 = '2024-03-19';
const date2 = '2024-03-21';

// calculate and display the difference in days 
const differenceInDays = dateDifferenceInDays(date1, date2);
console.log('4. Difference between two dates in days:');
console.log(`Difference: ${differenceInDays}`)


// answer for no 5
// function to get initials of a name 
function getInitials(fullName: string) : string {
  // split the full name by space to get individual words
  const nameParts = fullName.split(' ');

  const initials = nameParts.map(part => part[0].toUpperCase()).join('');

  return initials;
}

// inpout 
const fullName = 'John Smith';

// get and display the initials 
const initials = getInitials(fullName);
console.log('5. Initials of a name:');
console.log(`Initials: ${initials}`)