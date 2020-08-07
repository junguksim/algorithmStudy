const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', function (line) {
    line = line.split(' ');
    let N = Number(line[0]);
    let r = Number(line[1]);
    let c = Number(line[2]);
    const len = Math.pow(2, N);
    const area = Math.pow(len, 2);
    let arr = [];
    for(let i = 0 ; i < len; i++) {
        for(let j = 0; j < len; j++) {
            arr.push({'x' : j, 'y' : i, 'visit' : false});
        }
    }
    for(let i = 0 ; i < len; i++) {
        for(let j = 0; j < len; j++) {
            arr.push({'x' : j, 'y' : i, 'visit' : false});
        }
    }
    /**
     * (0,0)->(1,0)->(0,1)->(1,1)->(0,2)->(0,3)
     */
    console.log(len, area)
    console.log(arr)
    rl.close();
}).on("close", function () {
    process.exit();
});
