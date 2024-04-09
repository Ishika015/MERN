//replacement of callback
//replacement of await
//when function abrubptly close ho jaata hai toh ye aisa nhi kerta ->ek hi kaam hai result dena true ya false
let age=10;
const info=new Promise((resolve,reject)=>{
    if(age>=18){
        resolve("You can vote");      //resolve is a function resolve and reject are callback function
    }else{
        reject("You can not vote");
    }
})
info.then(result=>console.log(result))
.catch(error=>console.log(error));

const resultInfo=async ()=>{        //async-await is the oldest method of promise-> reject per kaam hi nhi kerta iske liye sab true hai so we will use try catch
    try{
        let result=await info;
    console.log(result);
    }catch(error){
        console.log(error);
    }
    }
resultInfo();