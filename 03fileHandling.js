const { log } = require('console');
const fs = require('fs')
const os = require ('os')

// console.log(os.cpus().length);



// /////////////////Sync Blocking req
   fs.writeFileSync("./test.txt" , "hey there sync")

//  /////////////Async. non blocking req
  fs.writeFile("./test.txt" , "hey, there Async" , (err)=>{})


// ////////// file read
// /////////Sync blocking req

//console.log("1");

const result = fs.readFileSync("contact.txt", "utf-8");
//console.log(result);
//console.log("2");



////////////Async non blocking req

// console.log("1");
// console.log("2");

  fs.readFile("./contact.txt" ,"utf-8", (err, result)=>{
    if (err) {
      //  console.log("err" ,err);
        
    }else{
      //  console.log(result)
    }
    
})
// console.log("3");
// console.log("5");
// console.log("6");
// /////////// fs append file
  fs.appendFileSync("./test.txt" ,  ` ${Date.now()}  hey ,there \n`   )
// //////////////////// file copy
 fs.copyFileSync("./test.txt" , "./cpoy.txt")
// ////////////////// file delete
 fs.unlinkSync("./cpoy.txt")
 

 


 
