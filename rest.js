// rest parameters
const sum=(num1=0,num2=0,...numbers)=>{                  //.... rest parameter
    let s=0;
    if(numbers.length>0){
        s=numbers.reduce((a,b)=>a+b);
    }
    console.log("Sum of numbers=",(num1+num2+s));
}
sum();
sum(10,20);
sum(10,12,13,10);