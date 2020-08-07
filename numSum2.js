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
    //console.log(N, M);
    let arr = input[1].split(' ');
    arr = arr.map((curr)=>{return Number(curr)});
    //console.log(arr)
    let sum = 0;
    let result = 0;
    let idx = 0 ;
    while(idx < arr.length) {
        for(let i = idx ;i < arr.length; i++) {
            //console.log(`beforeSum : ${sum}`)
            sum += arr[i];
            //console.log(`i : ${i}, addValue : ${arr[i]},afterSum : ${sum}`)
            if(sum == M) {
                result++;
                idx++;
                //console.log(`===============RESULT!! idx=${idx}!!!=================`)
                i = idx-1;
                sum = 0;
            }
            if(i == arr.length-1) {
                
                idx++;
                //console.log(`==============no result, idx=${idx}!!!==============`)
                i = idx-1;
                sum = 0;
            }
        }
    }
    console.log(result);
    process.exit();
});