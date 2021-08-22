// use function
function getPin(){
    const pin = Math.round(Math.random()*100000);
    const pinString = pin + '';
    if(pinString.length == 5){
        return pin;
    }
    else{
        // console.log('got the 3 digit',  pin);
        return getPin() 
    }
}

document.getElementById('generate-pin').addEventListener('click', function(){
    
    const pin = getPin();
    document.getElementById('display-input').value = pin;

});

/* Use My taktis 
document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = Math.round(Math.random()*100000)
    const pinString = pin + '';
    if (pinString.length == 5) {
        return pin;
    }
    else{
        console.log('thsi si 4 down', pin);
        return pin;
        
    }
}); */


document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('type-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }       
    }
    else{
        const privouseNumber = calcInput.value;
        const newCalc = privouseNumber + number;
        calcInput.value = newCalc;
    }    
});


function verifyPin(){
    const pin = document.getElementById('display-input').value;
    const typeNumbers = document.getElementById('type-numbers').value;
    
    const passNotafication = document.getElementById('verification-pass')
    const failNotafication = document.getElementById('verification-fail')
    
    if (pin == typeNumbers) {
        passNotafication.style.display = 'block'
        failNotafication.style.display = 'none'
        
    }
    else{
        
        failNotafication.style.display = 'block';
        passNotafication.style.display = 'none'
    }

    
    
}





