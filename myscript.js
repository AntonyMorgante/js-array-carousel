const items=["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
const title=["Svezia", "Svizzera", "Gran Bretagna", "Germania", "Paradise"];
const text=["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"];

for (i=0; i <items.length; i++){
    const msContainer = document.querySelector(".image-container")
    const msSlider = document.querySelector(".slider")
    msContainer.innerHTML += /* creiamo tutte le immagini con didascalie */
    `<img class="img-contained hidden" src="` + items[i] +`">`
    + `<div class="title hidden">` + title[i] +`</div>`
    + `<div class="text hidden">` + text[i] +`</div>`;
    msSlider.innerHTML += `<img class="slider-img" src="` + items[i] + `">`
}

let msCurrent=0; /* Inseriamo un'indice di visualizzazione*/

const upCurrent=document.querySelector(".chevron"); 
const downCurrent=document.querySelectorAll(".chevron")[1];

 /* funzione di aumento ad orologio del contatore  */
upCurrent.addEventListener("click", function(){msCurrent++})

/* funzione di decremento ad orologio del contatore  */
downCurrent.addEventListener("click", function(){msCurrent--})

for (i=0; i <items.length; i++){
    const msbrightness = document.querySelectorAll(".slider-img")[i];
    const msImgcontained = document.querySelectorAll(".img-contained")[i];
    const mstitle = document.querySelectorAll(".title")[i];
    const mstext = document.querySelectorAll(".text")[i];
    if (i == msCurrent) {
        msImgcontained.classList.remove("hidden");
        mstitle.classList.remove("hidden");
        mstext.classList.remove("hidden");
        msbrightness.classList.add("current");
        i=items.length;
    }
}
