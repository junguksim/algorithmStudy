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
    let N = Number(input[0]);
    let obj = [];
    for(let i = 0; i < N; i++) {
        input[i+1] = (input[i+1]).split(" ")
        obj.push({
            "x" : input[i+1][0],
            "y" : input[i+1][1]
        })
    }
    obj.sort((a,b)=>{
        if(a.x == b.x) {
            return a.y-b.y
        }
        return a.x-b.x;
    })
    let result = "";
    for(let i = 0 ; i < obj.length; i++) {
        result += `${obj[i].x} ${obj[i].y}\n`;
    }
    console.log(result)
    process.exit();
});