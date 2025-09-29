//operator 
//Arithmatic operator
// console.log(10+6);
// console.log(2-3);
// console.log(5*7);
// console.log(42/3);
// console.log(10%3);
// console.log(5**3);  //5^3


//Assignment operator
// let x = 20;
// let y = 10;
// // x= x+y; >>Simlar to the  x+=y
// // x= x-y; >>Similar to the x-=y
// console.log(x);


//Comparision operator 
// let x = 10;
// let x = "20";
// let y = 20;
// console.log(x>y)
// console.log(x<y)
// console.log(x==y)
//When number string compare that string convert into number but === it follows Strictlt =
// console.log(x!=y)
// console.log(x===y);


//Type converter 
// let y = "10";
// let a = Number(y);
// console.log(typeof(a));


// let a = "121eg";
// let b = Number(a);
// console.log(b);
//NaN not are number
// Type of NaN is number type
// console.log(0/0);


// let a = 10;
// let b = String(a);
// console.log(b);


// let a true;
// console.log(Number(true)); //1
// console.log(Number(false)); //0
// console.log(Number(undefined));  //NaN
// console.log(Number(null));  //0

//ECMA script decied the eule of java script


// console.log(typeof(String(true)));
//Empty string .. ....>>>>>>>>>False 

// let a = 0.1;
// let b = 0.2;
//0.2 is not convert into binary exact value it stores approx. so coonvert intp binary and try is again then convert into binary then 
// let c = a+b;
// console.log(c);
// console.log(c==0.3);


// let s = +"0.1";  
// let t = +"0.2";  
// let u = s + t;  
// console.log(u);  



//Rule for javascript
// 1. Null is loosly equal to undefined
// console.log(null==undefined)
// console.log(null===undefined)
// console.log(null==0)
// console.log(null==" ")
// console.log(null==false)


//> ,< , >=,<= ( null >>>> number) , undefined >> NaN 

// console.log(null>=0);
// console.log(null<=0);
// console.log(null>0);
// console.log(null>=undefined);
// console.log(null>=" ");
// console.log(null>" ");

console.log(NaN == NaN); //false


// console.log("Chandan" > "Damu");//>> Convert into ASCII then the value will be determined 

// console.log(10 > "10")
// console.log(10>true);


//while compare both are automaticaly convert in to nymber 

//Loop

// for loop

// for (let i = 0 ; i < 100000000 ; i++){
//     console.log(i);
// }


// let i = 9;
// while(i < 100){
//     console.log(i);
//     i++;
// }



// let i = 0;

// do{
//     console.log(i);
//     i++

// }while(i < 100);


// let age = 45

// if (age>=18){
//     console.log("Yes u can able to vote");
// }else{
//     console.log("U kid eat icecream");
// }


//kid youn old 

// let a = 78;
// if ( a >= 60 ){ 
//     console.log("Young")
// }else if (a > 18){
//     console.log("old")
// }else
// {
//     console.log("Kid");
// }



//Logical Operator 
// && , ||


// console.log(true&&true)
// console.log(true&&false)
// console.log(true || true)
// console.log(true || false)
// console.log(false || false)



// let a = "Chandan" //true condition it move to scond condition and print that if it is empty then it reutrn blank space bcz if it first true then it move to the second
// let b = "Gitanjali"
// let c = a && b ;
// //
// console.log(c);

// let a = 876 ;
// let b = 0 ;
// let c = a && b;
// console.log(c);



// OR also like do same type go 12th class revie it otherwise die


//Not operator 
console.log(5!=4);