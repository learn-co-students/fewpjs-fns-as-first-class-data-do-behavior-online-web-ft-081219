import { arch } from "os";

// import { parse } from "path";

/* Given Code, don't edit */

// const input = document.querySelector("input#time").addEventListener("keypress",function(){
//   this.focus
// })
const button = document.querySelector("input#submit")
function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time){
    
     if(parseInt(time) < 12){
       return "Good Morning"
     }else if(parseInt(time) > 12 && parseInt(time) < 17) {
       return "Good Afternoon"

     }else{
       return "Good Evening"
     }
     

}


function displayMessage(message){
 document.querySelector("h1#greeting").innerText = message
 
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
