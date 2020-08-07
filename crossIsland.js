const PEOPLE_PER_HOUR = 100;
const PEOPLE_PER_MIN = 15;
const SHIP_TERM = 10;
const PEOPLE_PER_DAY = 1200;
const PEOPLE_PER_MONTH = [1200*Math.pow(2, 10), 1200*Math.pow(2, 9),1200*Math.pow(2, 8),
    1200*Math.pow(2, 7),1200*Math.pow(2, 6),1200*Math.pow(2,5),1200*Math.pow(2,4),1200*Math.pow(2,3),
    1200*Math.pow(2, 2),1200*Math.pow(2, 1)
];
const PEOPLE_PER_YEAR = PEOPLE_PER_MONTH.reduce((acc,cur)=>{return acc+cur});

console.log(PEOPLE_PER_YEAR)
const PEOPLE = 1200202;

let year = 2020;
let month = 1, day = 1;
let hour = 9, min = 0;

function crossIsland() {
    year += parseInt(PEOPLE / PEOPLE_PER_YEAR);
    let remainder = PEOPLE % PEOPLE_PER_YEAR;
    for(let i in PEOPLE_PER_MONTH) {
        if(remainder >= PEOPLE_PER_MONTH[i]) {
            remainder -= PEOPLE_PER_MONTH[i];
            month++;
        }
        break;
    }
    day += parseInt(remainder / PEOPLE_PER_DAY) -1;
    remainder = remainder % PEOPLE_PER_DAY;
    hour += parseInt(remainder / PEOPLE_PER_HOUR);
    remainder = remainder % PEOPLE_PER_HOUR;
    console.log(`${year}년 ${month}월 ${day}일 ${hour}시 ${min}분 출발`)
}
crossIsland();