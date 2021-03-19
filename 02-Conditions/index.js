const first = document.getElementById("first");
const prefersDarkMode = true;
const prefersSolarizedMode = true;

if (prefersDarkMode) {
  console.log("dark mode set!");
  // document.body.style.background = "black";
  first.style.background = "black";
} else if (prefersSolarizedMode) {
  console.log("solarized mode set!");
  // document.body.style.background = "palegoldenrod";
  first.style.background = "palegoldenrod";
} else {
  console.log("light mode set!");
  // document.body.style.background = "ghostwhite";
  first.style.background = "ghostwhite";
}

//result => dark mode
//JS implements the first condition that met and finishes.
//if I want to change mode for "prefersSolarizedMode" =>
//it has to be the first condtion in "if statement"

//====================================
//SWITCH
const second = document.getElementById("second");
const colorMode = "blue";

switch (colorMode) {
  case "blue":
    console.log("blue mode set!");
    second.style.background = "blue";
    break;
  case "green":
    console.log("green mode set!");
    second.style.background = "green";
    break;
  default:
    console.log("yellow mode set!");
    second.style.background = "yellow";
}

// The switch Statement
const day = "friday";
switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
