
//FALSE Y VALUES - valores que evalúan en false dentro de un if 
    // false (boolean)
    // el número 0 evalúa en false 
    // null también evalúa en false 
    // undefined también es false 
    // Nan
    // String vacio "" si le meto un espacio, se considera caracter y es true

// TRUE 
    //todos los demás 


const cubatasDrinked = 1;

//switch (key) {
//    case value:

//        break:

//    defalut:

//      break:

//}

switch (cubatasDrinked) {
    case 0: console.log("he bebido 0 cubatas");
    break;

    case 1: console.log("he bebido 1 cubatas");
    break;

    case 2: console.log("he bebido 2 cubatas");
    break;
    default:
        console.log("no bebo cubatas");
}


// CONDICIONAL TERNARIO - esta es muy pro

(cubatasDrinked == 0 && typeofcubatas !=="string") 
? console.log("he bebido 0 cubatas") 
: console.log("he bebido muchos cubatas") ;

//(condition) ? true : false

if(cubatasDrinked == 0) {
    console.log("he bebido 0 cubatas");
} else {
    console.log("he bebido muchos cubatas");
}