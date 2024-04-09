//1st method
// const sum=(num1,num2)=>{
// return "Sum="+(num1+num2);
// }

// const print=(msg)=>{
//     console.log(msg);
// }

// print(msg);
// let msg=sum(20,30);   

//2nd method
// const sum=(num1,num2)=>{
// print("Sum="+(num1+num2));
// }

// const print=(msg)=>{
//     console.log(msg);
// }
// sum(10,20);


// const sum=(num1,num2,print)=>{    //3rd method-> callback
// print("Sum="+(num1+num2));
// }

// const print=(msg)=>{
//     console.log(msg);
// }
// sum(10,20,print);


// const sum=(num1,num2,print)=>{    //4th method-> callback-> function is called after it has executed it's work
// let s=(num1+num2);
// print("sum="+s);
// }
// sum(20,30,(msg)=>{
//     console.log(msg);
// })


const sum=(num1,num2,print)=>{    //function that calls another function as parameter-> higher order function
let s=(num1+num2);                  
print(s);
}
sum(20,30,(sum)=>{              //this anonymous function is the call back
if(sum>20){
    console.log("Greater than 20");
}else{
    console.log("Less than 20");
}
})


//first class function-> function which can be passed as a parameter, can be used as a variable, can be used as function, is a higher order function
//pure function-> 