/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(trueTime) {
  // console.log("trueTime", parseInt(trueTime))
  let time = parseInt(trueTime)
  if (time < 12) {
    return ("Good Morning")
  }
  else if (time < 17) {
    return ("Good Afternoon")
  }
  else {
    return "Good Evening"
  } 
}



function displayMessage(string) {
  let greeting = document.getElementById("greeting")
  greeting.innerText = string
  }
  