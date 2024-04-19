
    const matrixCharacters = {
        c1: "neo",
        c2: "trinity",
        c3: "morpheo"
    }


// Capturar ahi donde quiero inyectar

const main = document.querySelector('.matrix__names');

    main.innerHTML = matrixCharacters.c1 + 
                         " + " +
                        matrixCharacters.c2 + 
                        " + " +
                        matrixCharacters.c3;

