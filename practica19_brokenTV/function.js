//1. capturo botones
const allButtons = document.querySelector('.tv__buttons-left');
const tvImage = document.querySelector('.tv__image');



//2. creo funcion
function cambiarCanal(e){
//cambio la url de la foto
if(!e.target.value) {return} //clausula de control

if(e.target.value=="video") {
    const meteorors = document.createElement('video');
    meteorors.src="img/meteoros.mp4"
    meteorors.autoplay= true;
    meteorors.muted= true;
    tvImage.appendChild(meteorors);
    return
    }
tvImage.style.backgroundImage = `url("img/${e.target.value}")`; //uso e target para cambiar la url de la foto
}
    

//3. añado event listener y lanzo funcion
allButtons.addEventListener('click', cambiarCanal);

