//costanti utili 
let userName = document.getElementById('username')
let kms = document.getElementById('kms')
let select = document.getElementById('agerenge')
let generetor = document.getElementById('generetor')



console.log('username')
console.log('kms')
console.log('agerenge')
console.log('generetor')

console.log(userName = userName .value)
console.log(kms = kms .value)
console.log(select = select .value )
 

let sum = kms * 0.21 ;
sum = sum.toFixed(2);
console.log(sum);



let hasDiscount = false;



    if (select <= 17){
    hasDiscount = true    
    sum = sum - (sum * 20 / 100);
    sum = sum.toFixed(2);
   
    console.log('hai ricevuto uno sconto del 20%' + '' + sum );
    
}else if ( select > 65) {
    hasDiscount = true 
    sum = sum - (sum * 40 / 100);
    sum = sum.toFixed(2);
    
    console.log('hai ricevuto uno sconto del 40%' + '' + sum);
}

