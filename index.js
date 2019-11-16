/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  const timeArr = time.split(":")
  const h = timeArr[0]
  const mins = timeArr[1]
  parseInt(h, 10)
  parseInt(mins, 10)
  if (h < 12) {
    return "Good Morning";
  } else if (h > 12 && h < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(string) {
  document.getElementById("greeting").innerText = string;
}
