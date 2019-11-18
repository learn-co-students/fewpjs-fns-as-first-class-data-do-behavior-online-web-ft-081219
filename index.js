/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  let splitted = timeString.split(' ')
  let readyParsed = parseInt(splitted)
  if (readyParsed < 12) {
    return "Good Morning";
  } else if (readyParsed < 17 && readyParsed > 12) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greetWord) {
  document.getElementById("greeting").innerText = greetWord
}