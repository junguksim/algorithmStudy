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
    let scoreArr = input[1].split(' ');
    scoreArr = scoreArr.map((curr)=>{return Number(curr)})
    let denominator = Math.max.apply(null, scoreArr);
    scoreArr = scoreArr.map((curr)=>{return curr*100/denominator})
    let sum = scoreArr.reduce((acc,cur)=>{return acc+cur});
    console.log(sum/Number(input[0]))
    process.exit();
  });