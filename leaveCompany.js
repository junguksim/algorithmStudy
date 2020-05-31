const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on("close", function () {
    let day = Number(input[0]);
    input.splice(0,1);
    let duration = [];
    let profit = [];
    let result = 0;
    input.map((curr)=>{
        curr = curr.split(' ');
        duration.push(Number(curr[0]));
        profit.push(Number(curr[1]));
    })
    if(duration[duration.length-1] > 1) {
        duration.pop();
        profit.pop();
    }
    
    for(let i = duration.length-1; i > 0; i--) {
        if(duration[i] + i > day) {
            duration[i] = -1;
            profit[i] = -1;
        }
    }
    console.log(duration)
    console.log(profit)
    for(var i = 0 ; i < duration.length ; i++) {
        if(duration[i] == -1) {
            continue;
        }
        else if(duration[i] == 1) {
            result += profit[i];
            console.log(result)
        }
        else {
            let idx = i + 1; // i 다음부터
            let sum = 0;
            
            while(idx <= i + duration[i]-1) {
                console.log(`현재 i = ${i} duration[i] = ${duration[i]} profit[i] = ${profit[i]} idx = ${idx}  duration[idx] = ${duration[idx]} profit[idx] = ${profit[idx]}`)
                if(duration[idx] == -1 ) {
                    break;
                }
                if(idx + duration[idx] < i + duration[i]) {
                    console.log(`sum = ${sum} 더할 profit[idx] = ${profit[idx]}`)
                    sum += profit[idx];
                    idx = idx + duration[idx];
                    continue;
                }
                idx++;
            }
            if(sum >= profit[i]) {
                result += sum;
                i = idx;
                console.log(result)
                continue;
            }
            result += profit[i];
            console.log(result)
        }
        
    }
    console.log(result);
    process.exit();
});