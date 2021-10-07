const raining = false;
const temperature = 20;

if (raining) {
  console.log("Don't forget your umbrella!"); // prints if it's raining outside.
}

//suggests when you should bring a scarf, t-shirt, or other outerwear.
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!")
} else { 
  console.log("short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;
//prints if you are old enough to vote.
if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}
//suggests not going outside if the weather is extreme.
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea...");
}
//reminds you not to bring your umbrella if it's nice out.
if (!raining) {
  console.log("Leave your umbrella at home!");
}

