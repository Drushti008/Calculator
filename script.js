let input = document.querySelector("#input_txt");
let btns = Array.from(document.querySelectorAll("button"));
let equation = "";

for(let btn of btns){       
    btn.addEventListener("click",(e) =>
{ 
   if(btn.id === "ac")
   {
    equation = "";
    input.value = "";
   }

   else if(btn.id === "equals")
   {
      equation = eval(equation);
      input.value = equation;
   }

   else if(btn.id === "cross")
   {
     equation = equation.slice(0,-1);
     input.value = equation;
   }

   else{
    equation += e.target.textContent;
    input.value = equation;
    }

   
});

}




















