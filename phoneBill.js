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
    let n = Number(input[0]);
    let timeArr = input[1].split(' ');
    let m = 0;
    let y = 0;
    timeArr.map((curr) => {
        y += (Math.floor(Number(curr) / 30) + 1) * 10;
        m += (Math.floor(Number(curr) / 60) + 1) * 15;
    })
    if (y < m) {
        console.log(`Y ${y}`);
    }
    else if (y > m) {
        console.log(`M ${m}`);
    }
    else {
        console.log(`Y M ${m}`);
    }

    process.exit();
});