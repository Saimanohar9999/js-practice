// function cb(){
//     a=0
//     for(i=0;i<1000;i++){
//             a++;
            
//     }
//     console.log(a)
// }

// setTimeout(cb, 2000);
// console.log("before settimeout")

// let p= new Promise((resolve)=>setTimeout(()=>resolve(25),1000))
// console.log(p)
// p.then(()=>
// {
// console.log(p)
// return "promise chain"
// }
// ).then((value)=>
//     console.log(value)
// )


// function cube(a)
// {
//     let ans=0
//     ans=a*a
//     return ans
// }

// function sumofCubes(x,y){
//     let p=cube(x)
//     let q=cube(y)
//     return p+q
// }

// console.log(sumofCubes(2,3))


// function promiseSetitmeout(dur){
//     let p=new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("resolved after 100 milliseconds")
//             console.log(2==2==2)
//         },dur)
//     })
//     return p;
// }

// let ans=promiseSetitmeout(1000)
// ans.then((value)=>{
//     console.log(value)
//     console.log(2==2==2)
// })


// function outer(){
//     var msg="outerfunction"
//     function inner(){
//         console.log(msg)
//     }
//     return inner
// }
// console.log(outer())
// var closure=console.log(inner())

// closure()

// function print(val){
//     //if we enclose setTImeout in a function then for every function call a new copy of i is created hence 
//     //  both let and var shows same behaviour
// }

// for(var i=0;i<5;i++){
//     // print(i)
//     setTimeout(()=>{
//         console.log(i)
// },1000)
// }
// //()---> grouping operator
// (function promise(){
//     let p= new Promise((res)=>res("hi i am promise"))
//     console.log(p) ;
// }())

// function genOtp(){
//     let otp=Math.floor(Math.random()*10000)
//     return otp
// }

// console.log(genOtp)

//a is in temporal dead zone until interpreter reaches 3 line i.e declaration line in
//  case of let and const this happens even they are hoisted but for var ,there is no error because 
// declarations are hoisted in case of var keyword.
// console.log(a)
// console.log(b)
// var a=10
// const b=89


// let a =10;
// // didn't understand why declaration is not throwing illegal error(illegal shadowing)
// {
//     var b=20;
// }

// console.log(b)

//Higher order function implementation
// function Hoc(arr,cback){
//     let res=[]
//     for(let i=0;i<arr.length;i++){
//         res.push(cback(arr[i]))
//     }
//     return res
// }

// ar1=[1,2,3,4,5]

// let ar2=Hoc(ar1,(num)=>num*2)
// console.log(ar2)
//sadfevjbfjberakjs

//Map(),forEach(),filer(),reduce()


// let arr=['one','two','three']
// console.log(arr.includes('on'))
// let str="Hello"
// console.log(str.includes('ll'))
// //here includes behaves diff with array of string and single string
// console.log('1'== '2')

// let b=new Number(10)
// console.log(b)
// //o/p: [Number:10]
// typeof(b)//object

//shallow copy vs deep copy

let a={name:'manohar'}
let z={...a}
z.name="anand"
console.log(z.name) //shallow copy 

console.log((+false),(!"xyz"))

arrfunc()
function arrfunc(){console.log("this is normal function")} 


//React --refactoring into multiple components
let func=()=>{
    console.log("this is an arrow function")
}







