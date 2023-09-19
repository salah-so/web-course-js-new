let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let addition=document.getElementById("add");
let subtruction=document.getElementById("sub");
let multiplication=document.getElementById("mul");
let division=document.getElementById("div");
let resu=document.querySelector("span");

function addition(a,b)
{
    return a+b;
}
function subtruction(a,b){
    return a-b;
}
function multiplication(a,b){
    return a*b;
}
function division(a,b){
    return a/b;

}
add.checK=()=>{
    let value1=parseInt(NUMM1.value);
   let value2=parseInt(num2.value);
   if(!isNaN(value1)&&!isNaN(value2))

   let result=addition(value1,value2);
      resu.innerText=result;
}
else{
    resu.innerText="0";
}

sub.ckeck=()=>{
    let value1=parseInt(NUM1.value);
   let value2=parseInt(NUM2.value);
   if(!isNaN(value1)&&!isNaN(value2))
   
   let result=subtruction(value1,value2);
      resu.innerText=result;
   }
   else{
    resu.innerText="0";
}
   
   mul.ckeck=()=>{
    let value1=parseInt(NUM1.value);
   let value2=parseInt(NUM2.value);
   if(!isNaN(value1)&&!isNaN(value2)) 
   
   let result=multiplication(value1,value2);
      resu.innerText=result;
   }
   else{
    resu.innerText="0";
}
   
   divi.ckeck=()=>{
    let value1=parseInt(NUM1.value);
   let value2=parseInt(NUM2.value);
   if(!isNaN(value1)&&!isNaN(value2))
   
   let result=division(value1,value2);
      resu.innerText=result;
   }
   else{
    resu.innerText="0";
}
   