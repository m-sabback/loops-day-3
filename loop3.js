//////////////             1             ///////////////////
// let text = "JavaScript is fun and JavaScript is powerful and fun fun";
// let word = ''
// let wordsCount = {

// }
// for(let char of text){
//     if(char !== ' '){
//         word += char

//     }
// }

/////////////    ES6+      ////////////

// word = text.split(' ')

//////////////             2             ///////////////////

// let num = [4, 7, 4, 2, 7, 7, 9, 2];
// let arr = []
// for(let rem of num){
//     if(! arr.includes(rem)){
//         arr.push(rem)
//     }
// }

/////////////    ES6+      ////////////

// arr = num.filter(value => )
// console.log( 'arr' ,arr, 'arr');

//////////////             3             ///////////////////
// let paragraph = "JavaScript is great. I love coding every day. Loops make tasks easier. Arrays are powerful tools.";
// let word = ''
// let wordsCount = {

// }
// for(let char of paragraph){
//     if( char !== '.'){
//         word += char
//     }
// }
/////////////    ES6+      ////////////
// word = paragraph.split('.').reduce((acc, w)=> acc + w ,0)
// console.log(word)

//////////////             4             ///////////////////
// let arr = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Sara" },
//   { id: 3, name: "Nora" }
// ]
// let newObj = {}
// for(let i of arr){
//    (i.id , i.name)
// }
/////////////    ES6+      ////////////

//////////////             5             ///////////////////
// let num = [2, 4, 3, 5, 7, 8, 1];
// let x = 0
// let target = 9;
// for (let i of num) {
//     x = i 
//     if(x + i)
//     console.log(`${i}+${num[i]}=${i+num[i]}`)
//   }
  
// }

/////////////    ES6+      ////////////

//////////////             6            ///////////////////

// let nested = [[1, 2],[3, 4, 5],[6],[7, 8, 9, 10]];
// let arr = []
// for( let i of nested ){
//     for( let j of i){
//         arr.push(j)
//     }
// }

/////////////    ES6+      ////////////

// arr = nested.flat()
// console.log(arr)

//////////////             7             ///////////////////

// let a1 = [5, 9, 3, 7];
// let a2 = [5, 9, 3, 7];

/////////////    ES6+      ////////////

// let every = a1.every(v => v == a2)
// console.log(every)

//////////////             8             ///////////////////

// let text = "I love JavaScript and I code every day";

// let result = ''
// let result2 = ''
// for(let word of text){
//     result+=word
//     if(result === ' '){
//         if(!result.length < 4){
//             result2+=result
//         }
//     }
// }
// console.log(result2)

/////////////    ES6+      ////////////

// result = text.split(' ').filter(v => v.length >= 4).join(' ')
// console.log(result)

//////////////             9             ///////////////////

// let id = 0
// let arrOfObj = [{id: id ,average: 0, grade: ''}]
// let grades = [90, 70, 85, 60, 95];

// for(let i of grades){
//     ++id
//     if( i <= 90 || i > 90){
//         arrOfObj.push({id,i,})
//     }else if(i <=80){
        
//         arrOfObj.push({id,i,})
//     }else if(i <=70){
//         arrOfObj.push({id,i})
//     }else if(i <=60){
//         arrOfObj.push({id,i})
//     }
// }
// console.log(arrOfObj)
/////////////    ES6+      ////////////

//////////////             10             ///////////////////
let num = [4, 6, 2, 6, 1, 4, 8, 2, 2];
let arr = []
for(let i of num){
    if(num.includes(i)){
        arr.push(i)
    }
}
console.log(arr)
/////////////    ES6+      ////////////

