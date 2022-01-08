const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("pause", () => {
  console.log("Readline paused.");
});
