let a = 10;
 let b = 15;

 let ans = a+b;
 //  console.log("the answer is:", ans)

/////// if else consition
 let hour = 16;

 if (hour < 12) {
    // console.log("You are allowed ");
    
 } else {
    // console.log("You are not allowed");
    
 }

 /////////////for looop

 let count = 15;
  for (let i = 0; i <= count  ; i++) {
    // console.log(i);

  }

  ////////// Object
  const person = {
    name: "amaan",
    age : 20,
    isStudent : true ,
    hobbies: "Cooking , GYM , Coding"
  }
///////////////// In object you can acces object name then . key name
//   console.log(person.hobbies);

/////////////Filter in js

const ages = [ 20 , 30 ,25 ,40 ,50]

const showAge = ages.filter(ageCheck)

function ageCheck(age){
    return  age >= 22

}
// console.log(showAge);

///////////////// Prompt in node js
var prompt = require('prompt-sync')();




// if (age < 18) {
//  //   console.log("you get a 20% discount");
    
// }else{
//   //  console.log("you get a 40% discount");
    
// }



///////////////// Person Age discount

// const personAge = prompt( " Please Enter Your Age and Get A Discount And Buy A Movie Theater Ticket:  ")

// if(personAge < 18){
//     console.log(" You get 20%  discount...!");

// } if(personAge > 18 && personAge < 65){
//     console.log(" Normal ticket  prices applies");
    
// }if(personAge > 65 ){
//     console.log("you get 40% senior Person Discount");
    
// } 

////////////// Calculate  the area of  rectangle
let lenght = 30

let width = 20

let area = lenght* width

// console.log(area);

////////////////Array 

const guestList = ['amaan','ali' ,'bushu' , 'zshn' , 'mushu']

const guestName = 'israr'

if( guestList.includes(guestName) ){
  //  console.log('Welcome to the party..',guestName);
    
}else{
   // console.log(" Sorry , you are not invited",guestName );
    
}

/////////// JSON Javascript Object natation

const weatherForecast = {
    date : "19/ 02/ 2026",
    temperature : "28 C",
    conditions : " Sunny",
    humidity :    "60%"
    
}

console.log("Date: ",weatherForecast.date);
console.log(" Temperature: ",weatherForecast.temperature);
console.log("Condition: ",weatherForecast.conditions);
console.log("Humidity: ",weatherForecast.humidity);