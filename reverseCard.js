const readline = require('readline');
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
})
.on('close', function () {
    for (let i = 0; i < input.length; i++) {
        let start = Number((input[i].split(' '))[0])
        let end = Number((input[i].split(' '))[1])
        if(start === end) {
            continue;
        }
        let arr2 = arr.slice(start - 1, end);
        arr2.reverse();
        for(let j = start-1; j < end ; j++) {
            arr.splice(j, 1, arr2[j-start+1]);
        }
    }
    for(let j = 0 ; j < 20; j++) {
        rl.output.write(arr[j] + " ");
    }
    process.exit();
});