const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("SIGTSTP", () => {
  // This will override SIGTSTP and prevent the program from going to the
  // background.
  console.log("Caught SIGTSTP.");
});
