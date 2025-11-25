// // console.log(a)  // error Undefined 
// var a = 10 ;
// var b = 20 ;
// console.log(addNumber);
//  function addNumber(num1,num2){
//     var sum = num1 + num2;
//     return sum;
//  }
 


//  var sumResult1 = addNumber(a,b);
//  var sumResult2  = addNumber(4,5);
//  console.log(sumResult1,sumResult2);


// console.log(a);
// console.log(b);
//Memory allocation 
// a = <uninitilaised> [Temporal dead zone]
//b = <uninitilized> [Temporial dead zone]
//both above cannot acessed without value is there 
//result = <Uninitilized>  temporal dead zone
// addNumber = <Uninitilized>  temporal dead zone

// Excutaion Phase 
// a = 10 
//b = 20 
//


let a = 10;
const b = 20




const addNumber = function (num1 , num2){
    const sum = num1 + num2;
    return sum;
}
const result = addNumber (a,b);
console.log(result);

