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


// document.getElementById('generate-pin').addEventListener('click', function(){
//     const pin = Math.round(Math.random()*100000)
//     const pinString = pin + '';
//     if (pinString.length == 5) {
//         return pin;
//     }
//     else{
//         console.log('thsi si 4 down', pin);
//         return pin;
        
//     }
// });




