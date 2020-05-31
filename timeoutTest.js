function log(callback) {
    console.log('Hello!\n')
}
function log2(callback) {
    console.log('world!')
}
// var startTime = new Date().getTime();
// log(setTimeout(function() {
//     log(setTimeout(function() {
//         log()
//     }, 3000))
// }, 2000))
// var endTime = new Date().getTime();
// console.log(endTime-startTime)

log(log2())