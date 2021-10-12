//  XML HTTP REQUEST (VIA APT)
// STEP 01: create a XHR object
var request = new XMLHttpRequest();

// STEP 02: initatiate a connection(starting a connections)
//true is used if your api doesnot want to affect the remaining execution of your
request.open('GET','https://restcountries.eu/rest/v2/all',true);

// STEP 03:sending a connection
// creating bridge btween server and client
request.send();

// STEP 04: once the data has been recevied scuccessfully we need to extract 
request.onload = function(){
     var data = JSON.parse(request.response);
    console.log(data);
     for(var i in data){
        console.log(data[i].name+" "+data[i].flag+" "+data[i].capital+" "+data[i].region+" "+data[i].subregion+" "+data[i].population);
        
     }

// a.Get all the countries from Asia continent /region using Filter function
 var res = data.filter((element)=>{
    if(element.region === "Asia"){
        return element.name;
     } 
         
});
 console.log(res);

// b.Get all the countries with a population of less than 2 lakhs using Filter function
var res = data.filter((element)=>{
     if(element.population < 200000){
         return element.name;
     }
 });
 console.log(res);

// c.Print the following details name, capital, flag using forEach function
// var res = data.forEach(element => {

//     console.log(element.name+" "+element.capital+" "+element.flag);
// });

// d.Print the total population of countries using reduce function
// var res = data.reduce((acc,element)=>{
//     return acc+element.population;
// },0);
// console.log(res);

// e.Print the country which uses US Dollars as currency.
// var res = data.filter((element)=>{
//     for(let i in element.currencies){
//         if(element.currencies[i].code === "USD"){
//             return true;
//         }
    
//     }
// }).map((element)=>element.name);
// console.log(res);


// }



// MAP method
// var arr = [1,2,3,4];
// var res = arr.map((element)=>{
// console.log(element);
// return element*2;
// });
// console.log(res);

// filter method
// var arr = [1,2,3,4];
// var res = arr.filter((element)=>{
//     // return element%2!==0; //for odd no
//     return element%2===0; //for even no

    
// });
// console.log(res);


// question
// var student = [{
//     name: "alex",
//     marks: 60
// },
// {
//     name: "bob",
//     marks: 70
// },
// {
//     name: "alice",
//     marks: 80
// },
// {
//     name: "doe",
//     marks: 90

// }];

// var res = student.filter((element)=>element.marks).map((element)=>element.name)

// console.log(res);

// anonymous function
// var arr = [1,2,3,4];
// var temp = [];
// var res = function(arr){
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i]%2===0){
//            console.log(arr[i]); 
//         }
//     }
// }(arr);

// IIFE FUNCTION 
// (function(arr){
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i]%2===0){
//             console.log(arr[i]);  
//         }
//     }
// }(arr));

// function foo(a,b){
//     return a+b;
// }
// console.log(foo(12,13,14,15));

var arr = [1,2,3,4,5,6];
var old = (arr)=>{
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2===1){
            console.log(arr[i]);
        }
    }
    
};
old(arr);
