// //Array 

// // let marks1 = 100;
// // let marks2 = 100;
// // let marks3 = 100;
// // let marks4 = 100;

// // let marks = [ 100 ,83,98,85,75,74]
// // console.log(marks);
// // console.log(marks.length);
// // console.log(marks);
// let arr = [100,46,"chandan",true]
// console.log(arr);
// // console.log(arr[2]);
// // console.log(typeof(arr))
// arr[1] = 90;
// // console.log(arr);

// arr.push(98);
// arr.push("Apple");
// console.log(arr);
// arr.pop();
// console.log(arr)


// //unshift add elem,ent from starting 
// arr.unshift(70);
// console.log(arr)
// //shift for delete element fromm array 
// arr.shift();
// console.log(arr)




// let arr = [10,20 ,90,11];
// for(let i =0 ; i <arr.length ;  i++){
//     console.log(arr[i])
// }

// for(let num of arr){
//     console.log(num);
// }


// let arr = [10,20 ,90,11];
//  let arr2 = arr;    //copy by refrence so arr changed   but not in const 
//  arr2.push(98);
//  console.log(arr);



// const arr = [10,30,50,90,11];
// const arr2 = (arr.slice(2,4));
// console.log(arr2);
// // console.log(arr.splice(1,3));
// console.log(arr.splice(1,3,"Chandan"));
// console.log(arr);

// const arr1 = [ 10 ,23,45,67,97,90];
// const arr2 = ["Chandan",11,true];
// arr1.push(arr2);
// const arr4 = [23,34,46,67,78,456];
// const arr3 = arr1.concat(arr2,arr4);
// const arr3 = [arr1,arr2,arr4]
//spread 
// const arr3 = [...arr1,...arr2,...arr4];
// console.log(arr3);


// const names = ["Alice", "Bob", "Charlie" ,"Chandan"];
// console.log(names.toString());
// console.log(names.join(" + "));
// console.log(names.indexOf("Bob"));
// console.log(names.lastIndexOf("Chandan"));
// console.log(names.indexOf("Bob"));



// const names = ["Alice", "Bob", "Charlie" ,"Chandan","Don","damyanti"];
// names.sort(); //ascai table 
// names.reverse();
// // names.
// console.log(names);

// const a = [101,90,54,84,38,94];
// // const a = ["101","90","54","84","38","94"];  it works as ascaii value bzc it can take various data type 

// a.sort();
// console.log(a);


// const ab = [101,90,54,84,38,94,"Chandan",true];
// ab.sort();
// console.log(ab);

// const a = [101,90,54,84,38,94];
// a.sort((a,b)=>a-b);
// console.log(a);
// a.sort((a,b)=>b-a);
// console.log(a)


// const arr = [10,30,50,[40,90,[60,19,99],11], 80];
// const a = arr.flat(Infinity);
// // console.log(arr[3][2][1]);
// console.log(a);


//here array doesnot contain same datatype , doesnot store in countigius memory location 


const zx = [10,"chandan", 9.5,true,43];
zx.name = "Bibek";
console.log(zx);