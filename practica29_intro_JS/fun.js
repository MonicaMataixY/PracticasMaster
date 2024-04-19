

/*PRIMITIVOS no se pueden cambiar*/

//string
const myName = "Monica Mataix \"Moni\";"; // este valor "Monica Mataix"se llama String o cadena de caracteres, se definen siempre con comillas 
console.log(myName);


//number
const myPhone = 666666666; //los números van sin comilla ni nada, si quiero decimales pongo punto, no comas
console.log(myPhone);


//boolean - se utilizan en los condicionales 
const isMikeBald = true;
console.log(isMikeBald);

if (isMikeBald) {
    console.log("pues toma mi peluca"); //si pongo false no loguea
}

//Undefined 
var pepe;
console.log(pepe);

//NULL 
const myObj = document.querySelector('.class'); //Objeto vacío (null) - porque en el html no hay la clase .class, no encuentra nada
console.log(myObj);


/*NO PRIMITIVOS*/

//Array - (vectores) conjunto ordenado de datos, tienes todos los datos encapsulados en una unidad, con un principio y un fin. Se usa corchetes

const semaforo = ["rojo", "amarillo", "verde"];
semaforo.forEach(element => {
    console.log(element)
}); //quiero ver cada elemento 


//Objeto - se usa llaves. Se diferencia de un array en que se pueden detallar las variables, en array accedes al dato por la posición. En objeto tengo un nombre de cada variable por cada valor
const alumno = {
    nombre: "Mike",
    apellidos: "Wasowski",
    edad: 33,
    curso: "4º",
    asignaturas_pendientes: false,
    asignauras: ["css", "html", "js"],
    aficiones: {
        deportes: ["futbol", "baloncesto"],
        ocio: "pintar figuritas de plomo",
        idiomas: {
            latinos: [
                {
                    europeos: ["español", "francés"]
                }
            ]
        }
    }
}

console.log(alumno.aficiones.idiomas.latinos[0].europeos[1]);

document.body.innerHTML = "Estimado " + alumno.nombre + " " + alumno.apellidos; //se concatenan valores con + , asi se pinta en la pantalla y no en la consola del navegador 

//hay otra forma de atacar a los objetos (la de arriba es sintaxis de punto), abajo con un string 

//object
const user = {
    userName: "Monica",
    userSurname: [1,2,3,4,"hola"],
    "age of user": 35
}

console.log(user["age of user"]); 

document.body.innerHTML = "<p>"+user.userName +"</p>"; 
document.body.innerHTML = "<p>La edad del usuario es "+ user["age of user"] +"</p>"; 


//Casting
let concatename = Number("1") + 5; 
//String(), Number(), Boolean(); 

console.log(typeof concatename);

document.body.innerHTML = "<p>" + concatename + "</p>"