const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', function (line) {
    let str = ['A'];
    let a = 1;
    let b = 0;
    for (let i = 0; i < line; i++) {
       temp = b;
       b = a+b;
       a = temp;
    }
    console.log(a, b);
    rl.close();
}).on("close", function () {
    process.exit();
});
