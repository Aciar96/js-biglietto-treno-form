//costanti utili 
const userName = document.getElementById('username')
const kms = document.getElementById('kms')
const select = document.getElementById('agerange')
const generetor = document.getElementById('generetor')

console.log('username' , userName.value)
console.log('kms', kms.value )
console.log('agerange', select.value)

generetor.addEventListener('click', function(){
    const kmsValue = kms.value
    
    let sum = kmsValue * 0.21 ;
   
    console.log(sum);
    
    let hasDiscount = false;
    
        if (select <= 17){
        hasDiscount = true    
        sum = sum - (sum * 20 / 100);
        sum = sum.toFixed(2);
       
        console.log('hai ricevuto uno sconto del 20%' + '' + sum );
        
    }else if ( select >= 65) {
        hasDiscount = true 
        sum = sum - (sum * 40 / 100);
        sum = sum.toFixed(2);
        
        console.log('hai ricevuto uno sconto del 40%' + '' + sum);
    }
    
})

