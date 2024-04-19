//crear array con fotos de matrix
const matrixphotos = ["morpheo.webp", "neo.jpg", "trinity.jpeg"];

// capturo el selector 
const matrixSelector = document.querySelector('#mselect');
const showphoto = document.querySelector('.show-photo')

// creo evento para detectar el cambio 
matrixSelector.addEventListener('input', selectPhoto);


//defino función que extraerá el value de cada option
function selectPhoto(e) {
    
    console.log(e.target.value);
    showphoto.style.backgroundImage = "url(img/"+e.target.value+")";
}