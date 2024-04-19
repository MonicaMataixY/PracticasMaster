//voy a capturar los input, el boton y el resultado 


const btn = document.querySelector('.btn');

const result = document.querySelector('.result');

//eventos

btn.addEventListener('click', function(){

const cuestionarioObject = document.querySelector('[type="radio"]:checked');

const cuestionario = cuestionarioObject.value; 

console.log(cuestionario);

   
        if (cuestionario == "cuatro") {
            result.innerHTML = "Vas bien!!";
        }   
        else  {
            result.innerHTML = "mala suerte amigo!!";
        } 
    }
)

// poner colores en el result cuando está bien y rojo cuando está mal. asignar clases active y no active 