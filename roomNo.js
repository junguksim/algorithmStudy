const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let arr = new Array(10);
arr.fill(0);

rl.on('line', function (line) {
    line = line.split('');
    line.map((curr) => {
        arr[Number(curr)]++;
    })
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    let maxIdx = arr.indexOf(max);
    let minIdx = arr.indexOf(min);
    let remain = 0;
    if(maxIdx != 6 && maxIdx != 9) {
        console.log(max);
        rl.close();
    }
    if(maxIdx == 6 && maxIdx == 9) {
        console.log(max);
        rl.close();
    }
    if(maxIdx == 6 || maxIdx == 9) {
        arr[maxIdx] = Math.round( (arr[6] + arr[9]) / 2);
        console.log(Math.max.apply(null,arr));
        rl.close();
    }
    rl.close();
}).on("close", function () {
    
    process.exit();
});