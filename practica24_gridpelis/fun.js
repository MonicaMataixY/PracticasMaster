//FILTRAR POR CATEGORÍAS 

//1 Capturo el contenedor de todos los botones 
const filterButtons = document.querySelector('.filter__buttons'); //aqui no ponemos querySelectorAll
const movies = document.querySelectorAll('.movie-grid__item'); //aqui si ponemos all porque capturamos todas las pelis

//2 Crear evento "click" sobre el contenedor
filterButtons.addEventListener('click', function(e){
    
    // guardo en variable qué botón he clicado
    const clickedBtn = e.target;
    
    //extraigo data-filter del objeto sataset
    const filterName = clickedBtn.dataset.filter
    if(filterName) {
        movies.forEach(movieItem => {

            //extraer data category
            const category = movieItem.dataset.category;
        
            //comparar filtro y categoría
        
            if(filterName == category || filterName == "all") {
                movieItem.style.display= "block";
            } else {
                movieItem.style.display= "none";
            }
           });
    } 
});

//CÓMO HACER QUE LAS ESTRELLAS SE RELLENEN

// 1. Capturo aquello que quiero que reciba la interacción

const allStars = document.querySelectorAll('.movie-grid__star img');

//2. Creo evento

allStars.forEach(star =>{
   
    star.addEventListener('click', function(){
       
        //cambio la ruta de la estrella
        const starRoute = star.getAttribute('src');
        
        if(starRoute==='img/star-off.svg') {
            star.setAttribute('src', 'img/star-on.svg');
        }
        else {
            star.setAttribute('src', 'img/star-off.svg');
        }
    })
})