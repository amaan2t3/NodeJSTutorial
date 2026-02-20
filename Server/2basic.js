const { log } = require('console');
const note = require('./note.js')
let fs = require('fs')
let os = require('os')

let user = os.userInfo()
// console.log(user.username);

fs.writeFile('greeting.txt', 'Hey'+  "there" + '\n' , ()=>{
    console.log('file is created');
    
})
 

console.log(note.age);

let age = note.age
const result = note.numberAdd(age + 8 ,1)
console.log( "result now ",result);



