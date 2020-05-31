var array =  [[],[],[],[],[]];

for(var i = 0; i < 5 ; i++) {
    for(var j = 0; j < 6; j++) {
        array[i].push(Math.floor(Math.random()*45+1))
    }
    array[i].sort()
}
console.log(array)