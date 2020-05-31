const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.on('line', function (line) {
    console.log(Number(line)*4);
    rl.close();
}).on("close", function () {
    process.exit();
});
