let species =['척추동물', '어류', '척추동물', '무척추동물', '파충류', '척추동물', '어류', '파충류'] 
// let seats = new Array(3);
// seats.fill(-1);
let min = 0;
let sec = 0;
// let uniqueSpecies = species.filter((item,index)=>species.indexOf(item)===index);
// let recent = [];
// for(let i in uniqueSpecies) {
//     recent.push({name : uniqueSpecies[i], recent : -1})
// }
// function jsonSort(a,b) {
//     if(a.recent == b.recent) {return 0}
//     return a.recent > b.recent ? 1 : -1;
// }
// function yieldSeat(species) {
//     for(let i = 0 ; i < species.length; i++) {
//         let whereIsSpecies = uniqueSpecies.indexOf(species[i]);
//         console.log(`${i+1} 번째 : ${seats}`);
//         console.log('=====================')
//         if(seats.indexOf(species[i]) !== -1) { //이미 같은 종이 있는 경우
//             sec++;
//             console.log(`${species[i]} 이(가) 무릎 위에 앉았다. ${min} 분 ${sec}초`);
//             recent[whereIsSpecies].recent = i;
//             continue;
//         }
//         let emptySeat = seats.indexOf(-1);
//         if(emptySeat !== -1) { //자리 빈 경우
//             seats[emptySeat] = species[i];
//             min++;
//             console.log(`${species[i]} 이(가) ${emptySeat+1} 번째 자리에 앉았다. ${min} 분 ${sec}초`);
//             recent[whereIsSpecies].recent = i;
//             continue;
//         }
//         //자리 없는데 다른 종 들어온 경우
//         let seatedSpecies = recent.map((curr)=>{
//             if(curr.recent !== -1) {
//                 return curr;
//             }
//         })
//         seatedSpecies = seatedSpecies.filter((item)=>item!==undefined);
//         seatedSpecies = seatedSpecies.sort(jsonSort);
//         seats[seats.indexOf(seatedSpecies[0].name)] = species[i];
//         recent[uniqueSpecies.indexOf(seatedSpecies[0].name)].recent = i;
//         min++;
//         console.log(`${species[i]} 이(가) ${seatedSpecies[0].name} 의 자리에 대신 앉았다. ${min} 분 ${sec}초`);
//     }
// }

// yieldSeat(species);

/***
 * 알고리즘 해법을 듣고 난 뒤 스스로 코딩해보기
 */
let seats = [];

function smartYieldSeat(species) {
    
    for(let i in species) {
        console.log(`들어갈 동물 : ${species[i]}`)
        if(seats.length < 3) {
            if(seats.includes(species[i])) { 
                seats.splice(seats.indexOf(species[i]), 1);
                seats.push(species[i]);
                sec++;
                console.log(seats);
                continue;
            }
            seats.push(species[i]);
            min++;
            console.log(seats);
            continue;
        }
        if(seats.includes(species[i])) { 
            seats.splice(seats.indexOf(species[i]), 1);
            seats.push(species[i]);
            sec++;
            console.log(seats);
            continue;
        }
        seats.shift();
        seats.push(species[i]);
        min++;
        console.log(seats);
    }
    console.log(min, sec)
}
smartYieldSeat(species);