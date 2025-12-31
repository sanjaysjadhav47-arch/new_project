// alert("external alert")

// document.getElementById("root").innerHTML="Welcome to java"

// console.log(a)
// const a=10;

// a=parseInt(prompt("Enter the first Number:"))
// b=parseInt(prommpt("Enter The Second Number:"))
// console.log(typeof(a));
// console.log(a+b);
// console.log(a+b);

// a1=prompt("Enter the first number:")
// a=parseInt(a1);

// confirm("do u want to delete this file")

// t t & and = t

// f f || or= f

// marks=parseInt(prompt("enter your marks"))   //75
// if(marks>=75){
//     console.log("getting destinction")
// }else if(marks>=60 && marks>=75){
//     console.log("First class")
// }else if(marks<60 && marks>=40){
//     console.log("second class")
// }else{
//     console.log("you are fail.....")
// }

// age=parseInt(prompt("enter ur age: ")) //22
// if(age>=18){
    // has_voterid=prompt("do u have voter id ?")
    // if(has_voterid=="YESS" || has_voterid=="Yess" || has_voterid=="yess"){
        // alert("you can vote")
    // }else if(has_voterid=="NO" || ){
        // alert("get ur voter id")
    // }else{
        // alert("Please enter valid input")
    // }else{
    //     alert("u can't vote")
    // }
// }

// for(i=1;i<=10;i++){
// console.log("Rajesh")
// console.log(i)
// }
// console.log(i);

// for(i=1;i<=1;i++){

// }console.log(i)

// for(i=10;i>=1;i--){
// console.log(i)
// }


// for(i=1;i<=10;i--){
// console.log(i)
// }

// for(i=1;i<=10;i+=1){
// console.log(2*i)
// }

// for(i=1;i<=10;i+=1){
// console.log("2x"+i+"="+(2*i))
// // console.log("2x",i,"=",2*i)
// }

// for(i=1;i<=3;i++){
//     for(j=1;j<=3;j++){
//         console.log(i,j);
//     };
//     console.log(j,i)
// };
// console.log(i*j);

//types of arguments
//positional argument
//default argument
//keyward argument/named argument

// function operations(p,r,t){
//     p=20000;
//     r=20;
//     t=6;
//     console.log("principle is: ",p)
//     console.log("rate is: ",r)
//     console.log("time is: ",t)
//     si=p*t*r/100
// console.log("simple interest is: ",si)
// }
// p=parseInt(prompt("Enter the principle amount"))
// r=parseInt(prompt("Enter the rate"))
// t=parseInt(prompt("enter the time"))
// Operation(p,r,t)



// function operations(a,b,c){
    //p=20000;
    //r=20;
    // t=6;
//     b=12
//     c=6
//     console.log("principle is: ",a)
//     console.log("rate is: ",r)
//     console.log("time is: ",t)
//     si=p*t*r/100
// console.log("simple interest is: ",si)
// }
// p=parseInt(prompt("Enter the principle amount")) //5000
// r=parseInt(prompt("Enter the rate")) //12
// t=parseInt(prompt("enter the time")) //5
// operation(p,r,t)
// console.log(p)

// function Operation(p,r,t=8){
//     console.log("principle is: ",p)
//     console.log("rate is: ",r)
//     console.log("time is:",t)
//     si=p*t*r/100
// console.log("simple interest is:",si)
// }
// p=5000
// r=12
// t=8
// Operation(p,r)

//var a;

//console.log(a)
//a=7
// "use strict"
// var a;
// a=7
// console.log(a)

// const show1=function(){
//     console.log("Hiii")
// }
// show1()


// setTimeout(function(){
//     console.log("Hiii")
// },5000)

// const show1=(a,b)

//object
// let person={
//     first_name:'Sanjay',
//     last_name:'Jadhav',
// age:20,
// 'address':'Thane',
// 'my city':'Mumbai'
// }
// console.log(person['my city'])
//console.log(person.'my city')   //error
// console.log(person.first_name)
// console.log(person.last_name)
// console.log(person['last_name'])

// console.log(person['address'])

//person.dep_name='extc';

//delete person.age;

//console.log(person)

//console.log(email in person)

//object with method(functions inside object)
// let car={
//     brand:"Tesla",
//     model:"model 3",
// start:function(){
//     console.log("Car Started");
// }
// };

// car.start();  //output: car started


 //looping through
// for(let key in person){
//     console.log(key + ":" + person [key]);
// }


//nested object 
// let student={
//     name:"Amit",
//     marks:{
//         maths: 90,
//         Science: 85
//     }
// };
// console.log(student.marks.maths)

//using new object()
// let car=new Object();
// car.brand="tesla";
// car.model="Model 3";
// car.year=2025;
// console.log(car)

//using constructor function
// function student(name,age,grade){
//     this.name=name;
//     this.age=age;
//     this.grade=grade;

// }
// let s1 =new student("amit",20,a);


// function person(name,age){
// this.name=name;
// this.age=age;
// this.greet=function(){
// console.log('hello,my name is $(this is name'} and I am $(this.age)years old.
// and the name of my car brand is $(car.brand});
// };
// }


// let.car={
// brand:"tesla"
// }


// let person={
//     name:"rajesh",
//     age:30,
//     show:function(){
//         console.log('my name is ${this.name} and car brand is ${')
//     }
// }
// let=car
// person.show

// array

// let fruits = ["Apple", "Banana", "Cherry"];{
//     console.log(fruits)
// }



// let numbers = new Array(10, 20, 30);{
//     console.log(numbers)
// }


// let colors = ["Red", "Green", "Blue"]; 
// console.log(colors[0]); // Red 
// console.log(colors[2]); // Green


// let cars = ["BMW", "Audi", "Tesla"]; 
// cars[1] = "Mercedes";   // Modify 
// cars[3] = "Toyota";     
// // Add new 
// console.log(cars [1]); 


// let nums = [10, 20, 30]; 
// for (let i = 0; i < nums.length; i++) { 
// console.log(nums[i]); 
// }


// let marks = [85, 90, 78, 92]; 
// let total = marks[0] + marks[1] + marks[2] + marks[3]; 
// console.log("Total Marks:", total); 



// let students = ["Raj", "Neha", "Amit"]; 
// // students.push("Priya"); 
// students[1] = "Rohan"; 
// console.log(students);  // ["Raj", "Rohan", "Amit", "Priya"] 
// console.log(students.length); // 4

// nums=[1,2,3,4,5]
//nums.foreach(num=> console.log(num));

// nums.forEach(function (num){
//     console.log(num)
// });

// let matrix = [ 
// [1, 2, 3], 
// [4, 5, 6], 
// [7, 8, 9] 
// ]; 
// console.log(matrix[0][0]); // 1 
// console.log(matrix[1][2]); // 6 
// console.log(matrix[0][2]); // 8



// let student = { 
// name: "Rajesh", 
// age: 21, 
// marks: 90 
// }; 
// console.log(student["name"]); // Rajesh 
// console.log(student.age);     
// // 21 


// let students = [ 
// { name: "Rajesh", age: 21 }, 
// { name: "Neha", age: 22 }, 
// { name: "Amit", age: 20 } 
// ]; 
// console.log(students[1].name); // Neha

// let numbers = [10, 20, 30]; 
// let [a, b, c] = numbers; 
// console.log(a, b, c); // 10 20 30

// let fruits=["apple","banana","cherry"]
// let [first,second,third]=fruits

// console.log(first)
// console.log(second)
// console.log(third)

// let colors=["red","blue","orange"]
// let[first, ,third]=colors

// console.log(first)
// console.log(third)

// fix using callback


// console.log('start');

// function getName(name, callback){
// setTimeout(()=>{
//     console.log('inside getName function');
//     callback(name);       //sends value to callback
// },5000);
// }

// getName('sonam', (nm)=> {
//     console.log(nm);
// });

// console.log('end')


// console.log('program starts');
// function getName(name, callback){
//     setTimeout(()=> {
//         callback(name);
//     },4000);
// }
// function getHobbies(callback){
//     setTimeout(()=>{
        
// callback(['teaching','watching movies']);
//  },1000);
// }
// getName('harshada', (x) => {
//     console.log(x);

//     getHobbies((hobbies)=> {
//         console.log(hobbies);
//     });
// });
// console.log('program ends')

