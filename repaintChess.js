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
    let N = Number((input[0].split(' '))[0]);
    let M = Number((input[0].split(' '))[1]);
    let arr = input.splice(1,);
    let minArr = [];
    const whiteFirst = [
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW'
    ];
    const blackFirst = [
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB'
    ];

    function whiteFirstPaint(y,x) {
        let counter = 0;
        for(let i = y; i < y+8 ;i++) {
            for(let j = x; j < x + 8; j++) {
                if(arr[i][j] !== whiteFirst[i-y][j-x]) counter++;
            }
        }
        return counter;
    }
    function blackFirstPaint(y,x) {
        let counter = 0;
        for(let i = y; i < y+8 ;i++) {
            for(let j = x; j < x + 8; j++) {
                if(arr[i][j] !== blackFirst[i-y][j-x]) counter++;
            }
        }
        return counter;
    }
    for(let i = 0 ; i + 7 < N; i++) {
        for(let j = 0; j +7 < M ;j++) {
            minArr.push(whiteFirstPaint(i,j));
            minArr.push(blackFirstPaint(i,j));
        }
    }
    console.log(Math.min.apply(null, minArr))
    process.exit();
});