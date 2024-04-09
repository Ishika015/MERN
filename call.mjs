const sum=(num1,num2)=>{
    return (num1+num2);
}

const mul=(num1,num2)=>{
    return (num1*num2);
}

const print=(msg)=>{
    console.log(msg);
}

//export{sum,mul};
export{sum as add,mul as multiply};
export default print;         //ek file mein ek hi default function ho sakta hai  we can rename this function at the time of import