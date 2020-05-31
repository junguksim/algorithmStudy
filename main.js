const moduleArr=[7,2,"Hello World", 11, "node", "Server", 8 ,1]
const day2=require('./day2')

function isChar(){

    
    for(var i=0; i<moduleArr.length; i++){
        console.log(typeof(moduleArr[i]));
        if(typeof(moduleArr[i]) === "string") {
            console.log(day2.oppChar(moduleArr[i]))
        }
        else  {
           day2.isEven(moduleArr[i])
        }
    }  
}
    isChar();