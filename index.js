const password_length_element = document.getElementById('password_length');
const generate_element = document.getElementById('gen');
const Range_element = document.getElementById('passRange');
const password_div_element = document.getElementById('Password');

const uppercase_element = document.getElementById('uppercase');
const numbers_element = document.getElementById('numbers');
const symbol_element = document.getElementById('symbols');

let password = "";
let password_length =8;

Range_element.addEventListener('input',(event)=>{
    password_length = +event.target.value;
    password_length_element.innerText = password_length;
});

generate_element.addEventListener('click',()=>{
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+';
    let char;
    console.log(uppercase_element.checked);
    if(uppercase_element.checked==true && numbers_element.checked==true && symbol_element.checked==true){
        char = lowercase + uppercase + numbers +symbols;
    }else if(uppercase_element.checked==true && numbers_element.checked==true){
        char = lowercase + numbers + uppercase;
    }else if(numbers_element.checked==true && symbol_element.checked==true){
        char = lowercase + numbers +symbols;
    }else if(uppercase_element.checked==true && symbol_element.checked==true){
        char = lowercase + uppercase +symbols;
    }else if(uppercase_element.checked==true){
        char = lowercase + uppercase;
    }else if(numbers_element.checked==true){
        char = lowercase + numbers;
    }else if(symbol_element.checked==true){
        char = lowercase + symbols;
    }else{
        char = lowercase;
    }

    for(let i=0; i<password_length;i++){
        const RandomNumber = Math.floor(Math.random()*(char.length));
        const ch = char[RandomNumber];
        password+=ch;
    };
    password_div_element.innerHTML = password;
    password = "";
});