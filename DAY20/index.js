//String
// const str1 = "Chandan";
// const str2 = 'Chandan is a Legend';
// const day = 18;
// const str3 = `Strike is comming on ${day}th october`;  //it is amodern trick 

// // console.log(str1,str2,str3)
// console.log(str3);

// const str = `Hello Chandan`
// console.log(str.length); //length of string
// console.log(str[0]); //accessing first character
// str [2] = "5" ; //it will not work because string is immutable
// console.log(str);
// console.log(str.toUpperCase()); //it will convert string to uppercase
// console.log(str.toLowerCase()); //it will convert string to lowercase 
// //It reate new string it will not change the original string bcz it is immutable
// console.log(str);


// const str = `Hello Coder Army Cod`;
// console.log(str.indexOf("cod"));
// console.log(str.indexOf("Cod"));
// console.log(str.lastIndexOf("Cod"));
// console.log(str.includes("Cod"));

//Slice 
// console.log(str.slice(2,7));  //(2,4]
// console.log(str.slice(4));
// console.log(str.slice(-4));

// const str = `Hello Coder Army Cod`;
// console.log(str.substring(2,5));  //-ve index are not allowed 

// const a = `Chandan`;
// const b = ` is a`;
// const c = ` Legend`;
// const d = a+b+c;
// console.log(d);
// console.log(24+45+`Chandan`+13);//
// console.log(24+45 +"Chandan"+13);//




// const str = `Hello Coder Army Coder`;
// console.log(str.replace("oder","Bibek"));
// console.log(str.replaceAll("oder","Bibek"));

// const user = ` Chandan  is  a good boy`;
// console.log(user.trim());

// const names = `Chandan,Bibek  Damodar` ;
// console.log(names.split(","))
// console.log(names.split(" "))


//DATE
// const now = new Date();//It takes from device 
// // console.log(now);  //It is show utc format timing
// console.log(now.toString()); //It shows indian time
// console.log(now.toISOString());
// console.log(now.toLocaleString());

// const now = new Date();
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getMilliseconds());
// console.log(now.getMonth()); //0 based index so it 9 but now oct
// console.log(now.getHours()); 
// const now = new Date(2025,9,20,8,25,16,125);// year month date hour minute seceond mili second
// console.log(now) //2025-10-20T02:55:16.125Z
// console.log(now.toString())

const now = Date.now();
console.log(now); //value on milisecond  1759335015131  timestamp //Browser can change into indian standerd time 
const date1 = new Date(0);
console.log(date1.toString()); 