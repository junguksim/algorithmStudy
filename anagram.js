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
    let str1 = input[0].split('').sort((a,b)=>a>b);
    let str2 = input[1].split('').sort((a,b)=>a>b);
    let obj1 = {};
    let obj2 = {};
    for(let i in str1) {
        if(obj1[str1[i]] == undefined) {
            obj1[str1[i]] = 1;
            continue;
        }
        obj1[str1[i]]++;
    }
    for(let i in str2) {
        if(obj2[str2[i]] == undefined) {
            obj2[str2[i]] = 1;
            continue;
        }
        obj2[str2[i]]++;
    }
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    let result = 0;
    //console.log(obj1, obj2);
    for(let i in keys1) {
       
        if(keys2.indexOf(keys1[i]) == -1) {
            //console.log('========keys1========')
            //console.log(`아예 없는 경우 : ${keys1[i]} 에서 ${obj1[keys1[i]]}`)
            result += obj1[keys1[i]];
            //console.log(`현재 result : ${result}`)
            continue;
        }
        if(obj1[keys1[i]] != obj2[keys1[i]]) {
            //console.log('========keys1========')
            //console.log(`있긴 한데 수가 다른 경우 : ${keys1[i]} 에서 ${Math.abs(obj1[keys1[i]] != obj2[keys1[i]])}`)
            result += Math.abs(obj1[keys1[i]] - obj2[keys1[i]])
            if(obj1[keys1[i]] > obj2[keys1[i]]) {
                obj1[keys1[i]] -= obj1[keys1[i]]- obj2[keys1[i]]
            }
            else {
                obj2[keys1[i]] -=  obj2[keys1[i]] - obj1[keys1[i]]
            }
            
            //console.log(obj1, obj2)
            //console.log(`현재 result : ${result}`)
        }
    }
    for(let i in keys2) {
        
        if(keys1.indexOf(keys2[i]) == -1) {
            //console.log('========keys2========')
            //console.log(`아예 없는 경우 : ${keys2[i]} 에서 ${obj2[keys2[i]]}`)
            result += obj2[keys2[i]];
            //console.log(`현재 result : ${result}`)
            continue;
        }
        if(obj1[keys2[i]] != obj2[keys2[i]]) {
            //console.log('========keys2========')
            //console.log(`있긴 한데 수가 다른 경우 : ${keys2[i]} 에서 ${Math.abs(obj1[keys2[i]] != obj2[keys2[i]])}`)
            result += Math.abs(obj1[keys2[i]] - obj2[keys2[i]])
            obj2[keys2[i]] -= Math.abs(obj1[keys2[i]] - obj2[keys2[i]])
            //console.log(obj1, obj2)
            
            //console.log(`현재 result : ${result}`)
        }
    }
    console.log(result)
    process.exit();
});