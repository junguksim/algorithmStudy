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
    input.splice(0,1);
    input = input.map((curr)=>{return Number(curr)}) 
    let result = 0;
    let zeroIdx = -1;
    for(let i=0; i< N; i++) {
     
        if(input[i] == 0) {
            
            if(zeroIdx == -1) {
                zeroIdx = i-1;
            }
            else {
                zeroIdx -= 1;
            }
            if(input[zeroIdx] == -1 || input[zeroIdx] == 0) {
                while(input[zeroIdx] <= 0) {
                  zeroIdx -= 1;
                }
            }
            let before = result;
            result -= input[zeroIdx];
            input[zeroIdx] = -1;
            
            if(input[i+1] != 0) {
                zeroIdx = -1;
            }
            continue;
        }
        let before = result;
        
        result += input[i];
        continue;
    }
    console.log(result)
    process.exit();
  });