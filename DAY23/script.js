// fnction 
//  function greeting (){
//     console.log("H")
//     return 45
//  }

//  function addTeoNumber(num1 , num2) {
//     const sum = num1 + num2
// console.log(sum) }
// addTeoNumber(4,5)
// addTeoNumber(54,99)
//  greeting()
// console.log(addTeoNumber);
// console.log(greeting());
// addTeoNumber(6,7,8);  //6+7


//  function addTeoNumber(num1=0 , num2=0 , num3=0 , num4 = 0) {
//     const sum = num1 + num2 + num3 + num4;
// console.log(sum) 

// }

// addTeoNumber(234,44)
// addTeoNumber(234,44,34)
// addTeoNumber(234,44,4)

//rest operator ...num create arry it catches the value 
//  function addTeoNumber(...num) {
//      let sum = 0;
//      for (let n of num ){
//         sum = sum + n;
//      }
// console.log(sum) 

// }

// addTeoNumber(234,44)
// addTeoNumber(234,44,34)
// addTeoNumber(234,44,4)




// let arr = [ 10,20,30,40,50];
// const [x,...num] = arr;
// console.log(arr);



// const arr = [10,20,30,40];
// const arr1 = [101,201,301,401];
// const ans = [...arr , ...arr1]   //Soread operator
// console.log(ans);




// functttion
// console.log(addTeoNumber(74,48));    ReferenceError: Cannot access 'addTeoNumber' before initialization
    // at Object.<anonymous>
// const addTeoNumber = function(num1,num2){
//     return num1 + num2;
// }

// console.log(addTeoNumber(74,48));



// so the difference is 
// in another type 


// console.log(cal(78,99));  //177 worked 
// function cal ( num1 , num2){
//     return num1 + num2;
// }
// console.log(cal(78,99));
// 



// 3 arrow funcion 
// const addNumber = ()=> {
//     console.log("Hello ");
// }
// addNumber();


// const addNumber = (num1, num2)=> {
//     console.log("Hello ");
//     let sum = num1 + num2;
//     console.log(sum);
// }
// addNumber(38,29);

// const addNumber = (num1,num2) => num1 + num2;  //it returns num1 + num2 


// let arr = [10,11,19,7,50];
// arr.sort((a,b) => a-b);
// console.log(arr);


// const squareNumber = (num) => num*num;
//for only one parameter 
// const squareNumber = num => num*num;
// console.log(squareNumber(5));


// const greeting  = () => {
//     let user = {
//         name : "Chandan",
//         age : 56,
//     }
//     return user ;
// }
// console.log(greeting());


// const greeting  = () => {
//     return {
//         name : "Chandan",
//         age : 56,
//     }
//     return user ;
// }
// //Same 
// console.log(greeting());


// const greeting  = () => ({ name : "Chandan", age : 56})
// //Throw error  soafter arow it required returns keywpord so use ()

// //Same 
// console.log(greeting());


//  4  IIFE

// (function greeting (){
//     console.log("Hello");
// })(); 
// //immedeatly ruun 

// (()=>{
//     console.log("kkkkkkkjfhi");
// })()


// function greeting(){
//     console.log("Hello ji ");
// }

// function dancing() {
//     console.log("I  am dancing ");
// }
// function meet(callback){
//     console.log("I am going to meet some one");
//     callback();
//     console.log("I have finished meeting ");
// }
// // meet(greeting()); //herhe only greet fun was run and run meet
// meet(greeting);
// meet(dancing);


//blinkit merged they wish to collab us and hange our payment gate canged so 

function blinkitOderPlaced(){
    console.log("We are started packing your oder ")
}


function zomatooderplace(){
    console.log("We have started preparing your food");
}

function payment (amount,callback){
    console.log(`${amount} payment has intilized` )
    console.log("Payment is Recevived");
    zomatooderplace();
    // callback();

    //GST
    //RIDER PAYMENT
    //COMPANY PAYMENT /profit 
}


// payment(500 , zomatooderplace) ;
payment(300,blinkitOderPlaced);