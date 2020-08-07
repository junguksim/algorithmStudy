let rocks = [5, 3, 4, 1, 3, 8, 3];
let dogs = [{
    "이름" : "루비독",
    "나이" : "95년생",
    "점프력" : "3",
    "몸무게" : "4",
    },{
    "이름" : "피치독",
    "나이" : "95년생",
    "점프력" : "3",
    "몸무게" : "3",
    },{
    "이름" : "씨-독",
    "나이" : "72년생",
    "점프력" : "2",
    "몸무게" : "1",
    },{
    "이름" : "코볼독",
    "나이" : "59년생",
    "점프력" : "1",
    "몸무게" : "1",
    },
]

let result = [];
for(let i in dogs) {
    dogs[i].점프력 = Number(dogs[i].점프력);
    dogs[i].몸무게 = Number(dogs[i].몸무게);
    let position = dogs[i].점프력-1;
    while(true) {
        if(rocks[position] < dogs[i].몸무게) {
            break;
        }
        rocks[position] -= dogs[i].몸무게;
        position += dogs[i].점프력;
        if(position > rocks.length) {
            result.push(dogs[i].이름);
            break;
        }
    }
}

console.log(`생존자 : ${result}`)

