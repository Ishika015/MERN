//Important concept
const data=[10,20,30,40];

let[x,y,z,w]=data;               //2nd method
// let x=data[0];           1st method
// let y=data[1];
// let z=data[2];
// let w=data[3];
// console.log(x,y,z,w);
console.log(x,y,z,w);

const studentInfo={
    name:"ravi",
    course:"MCA",
    rollno:1
}
//console.log(studentInfo.name,studentInfo.course,studentInfo.rollno);  1st method

let{name,course,rollno}=studentInfo;       //2nd method destructuring
console.log(name,course,rollno);

let{name:sname,course:mycourse,rollno:rno}=studentInfo;       //2nd method destructuring
console.log(sname,mycourse,rno);