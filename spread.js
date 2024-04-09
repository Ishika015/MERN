//spread operator
const sum=(num1, num2, num3)=>{
console.log("Sum=",num1+num2+num3);
}
let value=[20,30,50,23];
//sum(value)          value array will be passed in num1
sum(...value);   //spreaad opertor-> ....