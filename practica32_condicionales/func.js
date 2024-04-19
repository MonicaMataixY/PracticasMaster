//voy a capturar el input, el boton y el resultado 

const numberOfCubatas = document.querySelector('input');
const btn = document.querySelector('button');
const result = document.querySelector('.result');

//eventos

btn.addEventListener('click', function(){

    const cubatasDrinked = Number(numberOfCubatas.value); //le he tenido que hacer un casting a numero porque el typo de dato era texto
    const isNumber = cubatasDrinked/2; // hago esto para que si meten texto al ser /2 me de un valor NaN

    if(!isNaN(isNumber) && cubatasDrinked >= 0 ) {
        
        if (cubatasDrinked == 0) {
            result.innerHTML = "Vas fresssco y dinámico";
        } else if (cubatasDrinked > 0 && cubatasDrinked < 4){
            result.innerHTML = "Llevas boca de alpargata";
        } else if (cubatasDrinked >= 4 && cubatasDrinked < 8 ){
            result.innerHTML = "hoy duermes en el sofá";
        } else if (cubatasDrinked >= 8 && cubatasDrinked < 10 ){
            result.innerHTML = "llama a la ambulancia";
        } else{
            result.innerHTML="llama a alcóholicos anónimos";
        } 
    }
})
