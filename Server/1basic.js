//  /////////////////Functions
 
// // // function add (a,b){
// //     return a+b
// //  }

// // let add = function(a,b){
// //     return a+b
// // }

// // let add = (a,b) =>{return a+b}

// // let add = (a,b) => a+b;

// //  let result = add(2,22)

// //  console.log(result);

// /////// another way written function

// (function(){
//     console.log("amaan is added");
    
// })();
 
///////////////////////////// CallBack function
/*
function callback(){
    console.log("callback function is call");
    
}

const add = function (a,b,callback){
    let result = a+b;
    console.log("ans",result);  /// main function work done
    callback()
    
}

add(7,11,callback)*/
const add = function (a,b,callback){
    let result = a+b;
    console.log("ans",result);  /// main function work done
    callback()
    
}
add(8,9, ()=> console.log("added again "))