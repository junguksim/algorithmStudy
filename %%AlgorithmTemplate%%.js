const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', function (line) {
  console.log(line);
  rl.close();
}).on("close", function () {
  process.exit();
});


//여러줄
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    console.log(input);
    process.exit();
  });