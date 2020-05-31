const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.on('line', function (line) {
    line = line.split(' ')
    let N = Number(line[0]) + 1;
    let K = Number(line[1]);
    let answer = "<";
    let cnt = 0;
    let arr = [];
    for(let i = 1 ; i < N; i++) {
        arr.push(i);
    }
    while(arr.length) {
        cnt++;
        if(cnt === K) {
            answer += arr.shift();
            if(arr.length) {
                answer += ", ";
                cnt = 0;
            }
            else {
                answer += ">";
            }
        }
        else {
            arr.push(arr.shift());
        }
    }
    console.log(answer)
    rl.close();
}).on("close", function () {
    process.exit();
});
