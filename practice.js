var x=10;
let y='apple';
const z="tree";
// z="soil"; error
{
    let y='orange';
    var x=8;
    console.log("x=",x);
    console.log("y="+y);
}
console.log("x=",x);
console.log("y="+y);

let a=10;
let b=20;
if(a>b){
    console.log("A is greater");
} else{
    console.log("B is greater");
}
// Conditional Operator
a>b?console.log("A is greater"):console.log("B is greater");


for(let i=0;i<10;i++){
    console.log("Value of i=",i);
}

let j=0;
while(j<10){
    console.log("value of j=",j);
    j++;
}



let k=2;
switch(k){
    case 1: console.log("case 1");
    break;
    case 2: console.log("case 2");
    case 3: console.log("case 3");break;
    default: console.log("default case");
}


// function sum(a,b){
//     console.log("sum=",a+b);
// }
// sum(3,6);

const sum=(a,b)=>(a+b);    //return a+b
console.log("sum=",sum(3,9));  

function mul(a,b){
    return a*b;
}
console.log("multiply=", mul(4,7));

const sub=function(a,b){
    let c=a-b;
    console.log("Difference=",c);
}
sub(4,10);

const div=(a,b)=>{
    let c=a/b;
    return c;
}
console.log("Division=", div(100,7));  

const modulus=(a,b)=>console.log("Modulus=",a%b);
modulus(10,4);


const msg=()=>console.log("Array Function");
let arr=[2,5,8,10.4,92.4,'s',"kiet",'astrisk',msg];
arr[4]=23.67;
console.log(arr);
arr[8]();
arr.pop();
console.log(arr);

for(let i=0;i<arr.length;i++){
    console.log(`Value at index ${i} is ${arr[i]}`);
}

for(let i in arr){
    console.log(`Value at index ${i} is ${arr[i]}`);
}

for(let i of arr){
    console.log(`Value of ${i}`);
}

let studentInfo={
    rollno:1,
    name:"Ravi Kumar",
    course:"MCA",
    college:"KIET",
    marks:[10,20,30,40],
    music:()=>console.log("Play music"),
    play:function playfunc(){console.log("Play Cricket")}
}
console.log(studentInfo.name);
console.log(studentInfo.college);
console.log(studentInfo.rollno);
console.log(studentInfo.course);
console.log(studentInfo.marks);
console.log(studentInfo.play());
console.log(studentInfo.music());