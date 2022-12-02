let counter = 0;
document.getElementById('conf').addEventListener('click',()=>{
    document.getElementById('cardowner').innerText = document.getElementById('cardholder').value.toUpperCase();//set name
    document.getElementById('cardownernumber').innerText = document.getElementById('cardnumber').value;//set 18digit numbers
    document.getElementById('cardownerexp').innerText = document.getElementById('month').value+'/'+document.getElementById('year').value//set card exp date
    document.getElementById('cardownercvc').innerText = document.getElementById('cvc').value;//set cvc
})

document.getElementById('cardnumber').addEventListener('keydown',e=>{
    let key = parseInt(e.key);
    let cardNum,lastSection;
    if(isNaN(key) === false){//if downkey is a number e.g.'1'
        cardNum = document.getElementById('cardnumber').value;//cardNum = '1'
        if(cardNum.length > 18){
            e.preventDefault();
        }else if((cardNum.length+1)%5 == 0){
            document.getElementById('cardnumber').value = cardNum+ ' '
        }
    }else if(e.key !== 'Backspace'){//ignore backspace
        e.preventDefault();//don't do default action
    }
    
})

document.getElementById('month').addEventListener('keydown',e=>{
    let key = parseInt(e.key);
    if(isNaN(key) === false){//if downkey is a number e.g.'1'
        if(document.getElementById('month').value.length > 1){
            e.preventDefault();
        }
    }else if(e.key !== 'Backspace'){//ignore backspace
        e.preventDefault();//don't do default action
    }
})
document.getElementById('year').addEventListener('keydown',e=>{
    let key = parseInt(e.key);
    if(isNaN(key) === false){//if downkey is a number e.g.'1'
        if(document.getElementById('year').value.length > 1){
            e.preventDefault();
        }
    }else if(e.key !== 'Backspace'){//ignore backspace
        e.preventDefault();//don't do default action
    }
})
document.getElementById('cvc').addEventListener('keydown',e=>{
    let key = parseInt(e.key);
    if(isNaN(key) === false){//if downkey is a number e.g.'1'
        if(document.getElementById('cvc').value.length > 2){
            e.preventDefault();
        }
    }else if(e.key !== 'Backspace'){//ignore backspace
        e.preventDefault();//don't do default action
    }
})