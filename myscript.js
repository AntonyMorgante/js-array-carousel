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

const upCurrent=document.querySelectorAll(".chevron")[1]; 
const downCurrent=document.querySelector(".chevron");

 /* funzione di aumento ad orologio del contatore  */
upCurrent.addEventListener("click", function(){
    msCurrent++
    for (i=0; i <items.length; i++){
        const msbrightness = document.querySelectorAll(".slider-img")[i];
        const msImgcontained = document.querySelectorAll(".img-contained")[i];
        const mstitle = document.querySelectorAll(".title")[i];
        const mstext = document.querySelectorAll(".text")[i];
        const msprevbrightness = document.querySelectorAll(".slider-img")[i-1];
        const msprevImgcontained = document.querySelectorAll(".img-contained")[i-1];
        const msprevtitle = document.querySelectorAll(".title")[i-1];
        const msprevtext = document.querySelectorAll(".text")[i-1];
        if (i == msCurrent) {
            msprevImgcontained.classList.add("hidden");
            msprevtitle.classList.add("hidden");
            msprevtext.classList.add("hidden");
            msprevbrightness.classList.remove("current");
            msImgcontained.classList.remove("hidden");
            mstitle.classList.remove("hidden");
            mstext.classList.remove("hidden");
            msbrightness.classList.add("current");
            i=items.length;
        }
    }
})

/* funzione di decremento ad orologio del contatore  */
downCurrent.addEventListener("click", function(){
    msCurrent--
    for (i=0; i <items.length; i++){
        const msbrightness = document.querySelectorAll(".slider-img")[i];
        const msImgcontained = document.querySelectorAll(".img-contained")[i];
        const mstitle = document.querySelectorAll(".title")[i];
        const mstext = document.querySelectorAll(".text")[i];
        const msprevbrightness = document.querySelectorAll(".slider-img")[i+1];
        const msprevImgcontained = document.querySelectorAll(".img-contained")[i+1];
        const msprevtitle = document.querySelectorAll(".title")[i+1];
        const msprevtext = document.querySelectorAll(".text")[i+1];
        if (i == msCurrent) {
            msprevImgcontained.classList.add("hidden");
            msprevtitle.classList.add("hidden");
            msprevtext.classList.add("hidden");
            msprevbrightness.classList.remove("current");
            msImgcontained.classList.remove("hidden");
            mstitle.classList.remove("hidden");
            mstext.classList.remove("hidden");
            msbrightness.classList.add("current");
            i=items.length;
        }
    }
})
