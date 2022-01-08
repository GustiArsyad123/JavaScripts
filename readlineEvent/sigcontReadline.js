const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("SIGCONT", () => {
  // `prompt` will automatically resume the stream
  rl.prompt();
});
