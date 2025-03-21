const arr = ["Paper", "Scissor", "Rock"];

const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const show = document.querySelector(".result");

let resulting = "";

let output = "";
let output2 = "";

const outcome = function () {
  const index = Math.floor(Math.random() * arr.length); // Generate a random index
  output = arr[index]; // Assign the corresponding value
  one.innerHTML = output; // Update the display for player one
};

const outcome2 = function () {
  const index = Math.floor(Math.random() * arr.length); // Generate a random index
  output2 = arr[index]; // Assign the corresponding value
  two.innerHTML = output2; // Update the display for player two

  // Determine the result
  if (output === "Rock" && output2 === "Scissor") {
    resulting = "Rock Won";
  } else if (output === "Rock" && output2 === "Paper") {
    resulting = "Paper Won";
  } else if (output === "Rock" && output2 === "Rock") {
    resulting = "It's a tie";
  }

  if (output === "Scissor" && output2 === "Rock") {
    resulting = "Rock Won";
  } else if (output === "Scissor" && output2 === "Paper") {
    resulting = "Scissor Won";
  } else if (output === "Scissor" && output2 === "Scissor") {
    resulting = "It's a tie";
  }

  if (output === "Paper" && output2 === "Scissor") {
    resulting = "Scissor Won";
  } else if (output === "Paper" && output2 === "Rock") {
    resulting = "Paper Won";
  } else if (output === "Paper" && output2 === "Paper") {
    resulting = "It's a tie";
  }
  

  show.innerHTML = resulting; // Update the result display
};

// Attach event listeners
button1.addEventListener("click", outcome);
button2.addEventListener("click", outcome2);
