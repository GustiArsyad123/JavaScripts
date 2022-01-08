const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("SIGINT", () => {
  rl.question("Are you sure you want to exit? ", (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});
