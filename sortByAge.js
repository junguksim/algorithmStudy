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
    let obj = [];
    let N = Number(input[0]);
    for (let i = 1; i <= N; i++) {
        input[i] = input[i].split(' ');
        let age = Number(input[i][0]);
        let name = input[i][1];
        obj.push({ age, name, signUpAt: i });
    }
    obj.sort((x, y) => {
        if (x.age === y.age) {
            return x.signUpAt - y.signUpAt
        }
        else return x.age-y.age
    })
    for(let j = 0 ; j < obj.length; j++) {
        console.log(obj[j].age + " " + obj[j].name);
    }
    process.exit();
});