module.exports={
    isEven:(a)=>{
        if(a%2==1)
        {
            console.log('홀수입니다!')
        }
        else
        {
            console.log('짝수입니다!')
        }
    },

    square:(n)=>{
        console.log( Math.pow(2,n))
    },
    oppChar:(c)=>{
        return c.split('').reverse().join('');
    }
}