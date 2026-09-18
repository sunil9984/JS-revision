// push, pop, shift, unshift, splice, slice, map, filter, 
// reduce, forEach, find, findIndex, some, every, sort,
//  reverse, includes, indexOf, concat, and flat.

//--------------------------------------------------------
// 1
let array1=["Captian America","Iron_man","Thor","Hulk","Black_widow","Paper_pot"];
//1-push - add at last positions
array1.push("Doctor_strange");
console.log(array1);
//--------------------------------------------------------
//2-pop - remove from last position
array1.pop();
console.log(array1);
//--------------------------------------------------------
//3-unshift  -add at begining position
array1.unshift("Loki");
console.log(array1);
//--------------------------------------------------------
//4-shift - remove from begining
array1.shift("Thor22");
console.log(array1);
//-----------------------------------------------------------------------------------------
//5-isincludes-Do a element is included by an array?(t/f)
let isPresent = array1.includes("Batman");
console.log(isPresent);
//----------------------------------------------------------------------------------------------------------------------
// 6-indesOf - tells the index of the presnet value and if not present then -1;
console.log(array1.indexOf("bat"));
//------------------------------------------------------------------------------------------------------------------------------------------
// 7-join - Add all the element of the array stringly and return as string, Including the seperating commas
let p = array1.join();
console.log(p);
//------------------------------------------------------------------------------------------------------------------------------------
// 8-slice - return a section of the array, takes two arguement (starting and ending indexes), ending is excluded
let array2 = array1.slice(1,4);
console.log(array2);
//----------------------------------------------------------------------------------------------------------------------------------
// 9-splice - add,remove,update, it changes the current array , the ending arguement index is excluded

// A //remove //(start, number_of_element_to_remove)
let array3 = [1,2,3,66,3,2];
// 2,3,66 remived
array3.splice(1,2);
console.log(array3);

// B // Add // (start, 0, elements_to_add_seperated_by_commas), 0 means no deletion or remove
array3.splice(1,0,"Hello","Madam");
console.log(array3);

// C // update/replace // it replaces the element (starting, 1, new_element),1 means remove and add, 0 means simply add at that index
array3.splice(1,0,"Sita");
console.log(array3);
//----------------------------------------------------------------------------------------------------------------------------------
// 10-fill // fills/update an specific value in an array (value,start,end) start to end-1 the value is filled or updated, 
// if end is not given then updates till last,if start and end is not given then whole array is updated
array3.fill("Hemesh",1,4);
console.log(array3);
//--------------------------------------------------------------------------------------------------------------------
// 11-filter// it makes a instance(shallow copy) of the current array based on applied filter/criteria
//array.filter((array)=>criteria),    
let array4 = ["Hello","world","he","ffd","node","fill"];
let myarr = array4.filter((array4)=>array4.length >5 );
console.log(myarr);
//---------------------------------------------------------------------------------------------------------------
// 12-findIndex // it returns the index of the match of the function pass, based on firt occurence
let array5 = [33,43,55,222,34];
// const large = (element)=>element>100;//function, you can also pass the function as well
const largeNumber = array5.findIndex((aa)=>aa>100);
console.log(largeNumber);
//-----------------------------------------------------------------------------------------------------------------
// 13// toString// retuen the whole arrays as string exactly as the arrays containg the commas as well
const myarr1 = ["Hell","2",33];
let st = myarr1.toString();
console.log(st);
console.log(typeof(st));//string

//----------------------------------------------------------------------------------------------------------------
// 14//tosorted// returns a new array in sorted accending order without modification

let myarr2 = [11,22,3,1,22,4,3,666,-22];
const arr2 = myarr2.toSorted();
console.log(arr2);
// You can sort the original array and return it as well
const sortedArray = myarr2.sort()
console.log(sortedArray);
// You can reverse as well in this fashion

//-----------------------------------------------------------------------------------------------------------------
// 14// toReversed// returns the reversed array
const reversed = myarr2.toReversed();
console.log(reversed);
//--------------------------------------------------------------------------------------------------------------------
//15//Map// Return the new array containg the result of invoking a function on every element in the calling array
let myarr3 = [22,4,33,12,33,"jfh","ff","erere",343];
const map1 = myarr3.map((x)=>x.toString());//sabko string bana rahe hain
console.log(map1);
//--------------------------------------------------------------------------------------------------------------------------------------
//16-concat// to mix extend the array or put an full array in to an array- a1.concat(b1)->all the element of the b1 get into a1
let a1 = [12,3,234];
let b1 = [1,2,33,44];
const c1 = a1.concat(b1);
console.log(c1);// all the element of b1 get in to the a1 without disturbing the order
//-----------------------------------------------------------------------------------------------------------------------------
//17- flat// to flaten the array if the array or nested arrays- normal flat remover only one level of the nesting, to remove all the level you have 
// to use infinity as the parameter of the flat function., You can flat to a specified level by giving the parameter as the number
const a2=[122,[2232,34,[33,1,2],22],23,66,[7,56,3,5],3];
const normalArray = a2.flat();
const fullflaten = a2.flat(Infinity);
console.log(fullflaten);
console.log(normalArray);
//-------------------------------------------------------------------------------------------------------------------------
// 18- Reduce// The reduce() method is used to process all elements of an array and reduce them to a single value.
let a3 = [33,23,43,33];
 
const sum = a3.reduce((acc, crr) => {
    return acc + crr;
},0);

console.log(sum);

// let apply on the string

let names = ["sita","Geeta","Kavita"];
let full = names.reduce((acc,crr)=>{
    return acc+crr;
},"")
console.log(full);

//--------------------------------------------------------------------------------------------------------------------
//19-includes//The includes() method checks whether an array contains a specific element. true/false

const result11 = names.includes("sita");
const result111 = names.includes("ita");

console.log(result11);
console.log(result111);
// You can also chaeck based on index also that a particular value is present at that index or not 
console.log(names.includes("sita",2)); //false because it is present at index 0 not at 2
//you can also check at case sensivity also, multiple criteria

//----------------------------------------------------------------------------------------------------------------------------------
//20-forEach//The forEach() method is used to execute a function once for each element in an array,it can not be break by break keyword
//It is commonly used when you want to perform an action on every element, such as printing, updating the DOM, or calling a function.
//(element,index,array) 
let a4 = [33,43,54];

a4.forEach((num)=>{
    num  = num*2;
    console.log(num);
})

let fruits = ["apple","banana","sitafal","Mevca"];
fruits.forEach((element,index)=>{
    console.log(element,index);
})

//it does not return a new array so you can not use it as below. it will give you undefined
let b4 = a4.forEach((num)=>{
    return num*2;
})
console.log(b4);
//------------------------------------------------------------------------------------------------------------
//21-Find//The find() method is used to search for the first element in an array that satisfies a condition.
//
let arr = [5, 8, 12, 20, 25];

let result = arr.find((num) => {
  return num > 10;
});
console.log(result);//12

//if no element find the - undefined
//let find in the array of the object

let users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Amit" },
  { id: 3, name: "Sunil" }
];
let user = users.find((user) => user.id === 2);
console.log(user);
