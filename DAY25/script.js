// // // // //scope and closure 
// // // // //Global scope acescc to all
// // // // //Functional Scope   inside function 
// // // // // Block level scope   inside the block 

// // // // let a = 10;//global scope 
// // // // const b = 20;
// // // // var e = 90; 



// // // // // var  >> respect function only 
// // // // //let >> respect function and block 
// // // // //const >> respect function and block 

// // // // if(true){
// // // //     console.log(b);
// // // //     // let  d = 30;
// // // //     var f = 90;
// // // // }
// // // // function greet (){
// // // //     // let c = 30;
// // // //     // console.log(a);
// // // //     var h =78;
// // // // }
// // // // console.log(h);
// // // // // console.log(a);
// // // // greet();
// // // // // console.log(c); //error out of the function 
// // // // // console.log(d);  
// // // // console.log(f);



// // // let global = 30 ;
// // // function greet (){
// // //     let global = 40;
// // //  console.log(global)
// // //    function greet (){
// // //     console.log(global)
// // //    }

// // // }
// // // greet();



// // function creatCounter (){
// //     let count = 0;
// //      function increment()   {
// //         // console.log("I am Increment function ");
// //         count ++;
// //         return count;
// //     }
// //     //  increment();
// //     return increment; //it doesnot  return so undefine 
// // }
// // // console.log(count);
// // const counter   = creatCounter();
// // console.log(counter());
// // // console.log(count)
// // // count();


// // //wheen code rinn then in the middle time the garbage was activited 


// // let user = {
// //     balance : 500,
// //     deposite : function (amount ){
// //         if (typeof amount==="number"&& amount >0){
// //             this.balance= this.balance +amount;
// //             return this.balance;
// //         }
// //     }
// // }


// // let balance = 500;



// // // balance += "Chandan";
// // balance-=500;
// // console.log(balance);


// // let user = {
// //     balance : 500,
// //     deposite: function (amount){
// //         if(typeof amount==="number" && amount>0){
// //             this.balance+=amount ;
// //             return this.balance;
// //         }
        
// //     },
     
// //     withdraw: function (amount){
// //         if(typeof amount==="number" && amount>0 && this.balance>=amount){
// //             this.balance-=amount ;
// //             return this.balance;
// //         }
        
// //     },
// //     getBalance : function(){
// //        return this.balance;
// //     }
// // }

// // user.balance= "Chandan";
// // console.log(user.getBalance());



// //user only acess method 
// //user did not acess the direect code 
// //so we need private 




// function createBankkAccount (){
//     const user = {
//     balance : 500,
//     deposite: function (amount){
//         if(typeof amount==="number" && amount>0){
//             this.balance+=amount ;
//             return this.balance;
//         }
        
//     },
     
//     withdraw: function (amount){
//         if(typeof amount==="number" && amount>0 && this.balance>=amount){
//             this.balance-=amount ;
//             return this.balance;
//         }
        
//     },
//     getBalance : function(){
//        return this.balance;
//     }
// }

//  return user; //return object 
// }

// const custmor = createBankkAccount();
// console.log (custmor.deposite(899))
// // console.log (custmor.object)  //cant acessed 



function double(value){
    return function execute(num){
        return num * value;
    }
}

const n = double(20)(50);
console.log(n);