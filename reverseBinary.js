const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', function (line) {
    line = (Number(line));
    let binary = line.toString(2);
    binary = parseInt(binary.split('').reverse().join(''), 2);
    console.log(binary)
  rl.close();
}).on("close", function () {
  process.exit();
});