const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', function (line) {
    line = line.split('');
    let result = 0;
    for (let i = 0; i < line.length; i++) {
        if (line[i] === 'A' || line[i] === 'B' || line[i] === 'C') {
            result = result + 3;
          } else if (line[i] === 'D' || line[i] === 'E' || line[i] === 'F') {
            result = result + 4;
          } else if (line[i] === 'G' || line[i] === 'H' || line[i] === 'I') {
            result = result + 5;
          } else if (line[i] === 'J' || line[i] === 'K' || line[i] === 'L') {
            result = result + 6;
          } else if (line[i] === 'M' || line[i] === 'N' || line[i] === 'O') {
            result = result + 7;
          } else if (line[i] === 'P' || line[i] === 'Q' || line[i] === 'R' || line[i] === 'S') {
            result = result + 8;
          } else if (line[i] === 'T' || line[i] === 'U' || line[i] === 'V') {
            result = result + 9;
          } else if (line[i] === 'W' || line[i] === 'X' || line[i] === 'Y' || line[i] === 'Z') {
            result = result + 10;
          }
    }
    console.log(result)
    rl.close();
}).on("close", function () {
    process.exit();
});