const items=["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
const title=["Svezia", "Svizzera", "Gran Bretagna", "Germania", "Paradise"];
const text=["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"];

for (i=0; i <items.length; i++){ /* Carichiamo il contenuto delle array nell'HTML */
    const msContainer = document.querySelector(".image-container")
    const msSlider = document.querySelector(".slider")
    msContainer.innerHTML += /* creiamo tutte le immagini con didascalie */
    `<img class="img-contained hidden" src="` + items[i] +`">`
    + `<div class="title hidden">` + title[i] +`</div>`
    + `<div class="text hidden">` + text[i] +`</div>`;
    msSlider.innerHTML += `<img class="slider-img" src="` + items[i] + `">`
}

let msCurrent=0; /* Indice di visualizzazione*/

 /* Visualizziamo la prima immagine su HTML */
const msbrightness = document.querySelectorAll(".slider-img")[0];
const msImgcontained = document.querySelectorAll(".img-contained")[0];
const mstitle = document.querySelectorAll(".title")[0];
const mstext = document.querySelectorAll(".text")[0];
msImgcontained.classList.remove("hidden");
mstitle.classList.remove("hidden");
mstext.classList.remove("hidden");
msbrightness.classList.add("current");

const upCurrent=document.querySelectorAll(".chevron")[1]; /* Indicatore di aumento dell'indice */ 
const downCurrent=document.querySelector(".chevron"); /* Indicatore di decremento dell'indice */ 

 /* Funzione di aumento ad orologio del contatore  */
upCurrent.addEventListener("click", function(){
    if (msCurrent==items.length-1){
        msCurrent = 0;
        const msbrightness = document.querySelectorAll(".slider-img")[msCurrent];
        const msImgcontained = document.querySelectorAll(".img-contained")[msCurrent];
        const mstitle = document.querySelectorAll(".title")[msCurrent];
        const mstext = document.querySelectorAll(".text")[msCurrent];
        const msprevbrightness = document.querySelectorAll(".slider-img")[items.length -1];
        const msprevImgcontained = document.querySelectorAll(".img-contained")[items.length -1];
        const msprevtitle = document.querySelectorAll(".title")[items.length -1];
        const msprevtext = document.querySelectorAll(".text")[items.length -1];
        msprevImgcontained.classList.add("hidden");
        msprevtitle.classList.add("hidden");
        msprevtext.classList.add("hidden");
        msprevbrightness.classList.remove("current");
        msImgcontained.classList.remove("hidden");
        mstitle.classList.remove("hidden");
        mstext.classList.remove("hidden");
        msbrightness.classList.add("current");
    }
    else {
        msCurrent++
        const msbrightness = document.querySelectorAll(".slider-img")[msCurrent];
        const msImgcontained = document.querySelectorAll(".img-contained")[msCurrent];
        const mstitle = document.querySelectorAll(".title")[msCurrent];
        const mstext = document.querySelectorAll(".text")[msCurrent];
        const msprevbrightness = document.querySelectorAll(".slider-img")[msCurrent-1];
        const msprevImgcontained = document.querySelectorAll(".img-contained")[msCurrent -1];
        const msprevtitle = document.querySelectorAll(".title")[msCurrent-1];
        const msprevtext = document.querySelectorAll(".text")[msCurrent-1];
        msprevImgcontained.classList.add("hidden");
        msprevtitle.classList.add("hidden");
        msprevtext.classList.add("hidden");
        msprevbrightness.classList.remove("current");
        msImgcontained.classList.remove("hidden");
        mstitle.classList.remove("hidden");
        mstext.classList.remove("hidden");
        msbrightness.classList.add("current");
    }

})

/* Funzione di decremento ad orologio del contatore  */
downCurrent.addEventListener("click", function(){
    if (msCurrent==0){
        msCurrent = items.length-1;
        const msbrightness = document.querySelectorAll(".slider-img")[msCurrent];
        const msImgcontained = document.querySelectorAll(".img-contained")[msCurrent];
        const mstitle = document.querySelectorAll(".title")[msCurrent];
        const mstext = document.querySelectorAll(".text")[msCurrent];
        const msprevbrightness = document.querySelectorAll(".slider-img")[0];
        const msprevImgcontained = document.querySelectorAll(".img-contained")[0];
        const msprevtitle = document.querySelectorAll(".title")[0];
        const msprevtext = document.querySelectorAll(".text")[0];
        msprevImgcontained.classList.add("hidden");
        msprevtitle.classList.add("hidden");
        msprevtext.classList.add("hidden");
        msprevbrightness.classList.remove("current");
        msImgcontained.classList.remove("hidden");
        mstitle.classList.remove("hidden");
        mstext.classList.remove("hidden");
        msbrightness.classList.add("current");
    }
    else{
        msCurrent--
        const msbrightness = document.querySelectorAll(".slider-img")[msCurrent];
        const msImgcontained = document.querySelectorAll(".img-contained")[msCurrent];
        const mstitle = document.querySelectorAll(".title")[msCurrent];
        const mstext = document.querySelectorAll(".text")[msCurrent];
        const msprevbrightness = document.querySelectorAll(".slider-img")[msCurrent+1];
        const msprevImgcontained = document.querySelectorAll(".img-contained")[msCurrent+1];
        const msprevtitle = document.querySelectorAll(".title")[msCurrent+1];
        const msprevtext = document.querySelectorAll(".text")[msCurrent+1];
        msprevImgcontained.classList.add("hidden");
        msprevtitle.classList.add("hidden");
        msprevtext.classList.add("hidden");
        msprevbrightness.classList.remove("current");
        msImgcontained.classList.remove("hidden");
        mstitle.classList.remove("hidden");
        mstext.classList.remove("hidden");
        msbrightness.classList.add("current");
    }
})
