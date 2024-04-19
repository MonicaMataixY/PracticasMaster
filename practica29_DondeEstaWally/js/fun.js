//CODIGO PARA QUE NOS MUESTRE MENSAJE HAS ENCONTRADO A WALLY
//1. Declación de variables y funciones Mostrar el aviso de que has localizado a Wally en la consola y aso contrario de clicar en cualquier lado que no está wally
    const $wallyPerson = document.querySelector('.wally_person'); //poner símbolo de $ para diferenciar las variables en codigo muy grande
    const $wallyimage = document.querySelector('.image'); //poner símbolo de $ para diferenciar las variables en codigo muy grande

    function mostrarMensaje (e) {
        const message = "Enhorabuena, encontraste a Wally!! Tus coordenadas son " + e.clientX + " y " + e.clientY;
        //console.log(e);//lo desactivo pero lo dejo porque esto crea el pointer Event y nos dice las coordenadas (client X e Y), luego las logueamos en el mensaje
        console.log(message);
        e.stopPropagation(); //para evitar que salten los dos mensajes a la vez
    };

    function mostrarMensaje2 () {
        const message = "Ahí no está Wally";
        console.log(message);
    };

//2. Llamadas a funciones, métodos, asignaciones, etc. C

    $wallyPerson.addEventListener('click', mostrarMensaje);
    $wallyimage.addEventListener('click', mostrarMensaje2);
    

//CÓDIGO PARA CAMBIAR LA CLASE A LOS BOTONES 
//CAPTURAMOS botones (independientes) 
const btnAmateur = document.querySelector('.level__amateur');
console.log(btnAmateur);

const buttonProfesional = document.querySelector('.level__pro');
console.log(buttonProfesional);

//definimos funciones 
    // Cambiar clase Active de un botón a otro 
    // cuando pulse uno le añado Active y se la quito al otro 
    //y viceversa  

    btnAmateur.addEventListener("click", function() {
        btnAmateur.classList.add("active"),
        buttonProfesional.classList.remove("active"),
        $wallyimage.style.filter = "saturate(100%)",
        isOk = !1
    });

    buttonProfesional.addEventListener("click", function() {
        buttonProfesional.classList.add("active"),
        btnAmateur.classList.remove("active"),
        $wallyimage.style.filter = "saturate(0%)",
        isOk = !0
    });