const items=["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
const title=["Svezia", "Svizzera", "Gran Bretagna", "Germania", "Paradise"];
const text=["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"];

for (i=0; i <items.length; i++){ /* Carichiamo il contenuto delle array nell'HTML */
    const msContainer = document.querySelector(".left-container")
    const msSlider = document.querySelector(".slider")
    msContainer.innerHTML += /* creiamo tutte le immagini con didascalie */
    `<div class="image-container hidden">`
        + `<img src="` +items[i] +`">`
        + `<div class="title">` + title[i] +`</div>`
        + `<div class="text">` + text[i] +`</div>
    </div>`;
    msSlider.innerHTML += `<img class="slider-img" src="` + items[i] + `">`
}

let msCurrent=0; /* Indice di visualizzazione*/

 /* Visualizziamo la prima immagine su HTML */
const msbrightness = document.querySelectorAll(".slider-img")[0];
const msImgContainer = document.querySelectorAll(".image-container")[0];
msImgContainer.classList.remove("hidden");
msbrightness.classList.add("current");

const upCurrent=document.querySelectorAll(".chevron")[1]; /* Indicatore di aumento dell'indice */ 
const downCurrent=document.querySelector(".chevron"); /* Indicatore di decremento dell'indice */ 

 /* Funzione di aumento ad orologio del contatore  */
upCurrent.addEventListener("click", function(){
    if (msCurrent==items.length-1){
        msCurrent = 0;
        const msbrightness = document.querySelectorAll(".slider-img")[msCurrent];
        const msImgContainer = document.querySelectorAll(".image-container")[msCurrent];
        const msprevbrightness = document.querySelectorAll(".slider-img")[items.length -1];
        const msprevImgContainer = document.querySelectorAll(".image-container")[items.length -1];
        msprevImgContainer.classList.add("hidden");
        msprevbrightness.classList.remove("current");
        msImgContainer.classList.remove("hidden");
        msbrightness.classList.add("current");
    }
    else {
        msCurrent++
        const msbrightness = document.querySelectorAll(".slider-img")[msCurrent];
        const msImgContainer = document.querySelectorAll(".image-container")[msCurrent];
        const msprevbrightness = document.querySelectorAll(".slider-img")[msCurrent-1];
        const msprevImgContainer = document.querySelectorAll(".image-container")[msCurrent -1];
        msprevImgContainer.classList.add("hidden");
        msprevbrightness.classList.remove("current");
        msImgContainer.classList.remove("hidden");
        msbrightness.classList.add("current");
    }

})

/* Funzione di decremento ad orologio del contatore  */
downCurrent.addEventListener("click", function(){
    if (msCurrent==0){
        msCurrent = items.length-1;
        const msbrightness = document.querySelectorAll(".slider-img")[msCurrent];
        const msImgContainer = document.querySelectorAll(".image-container")[msCurrent];
        const msprevbrightness = document.querySelectorAll(".slider-img")[0];
        const msprevImgContainer = document.querySelectorAll(".image-container")[0];
        msprevImgContainer.classList.add("hidden");
        msprevbrightness.classList.remove("current");
        msImgContainer.classList.remove("hidden");
        msbrightness.classList.add("current");
    }
    else{
        msCurrent--
        const msbrightness = document.querySelectorAll(".slider-img")[msCurrent];
        const msImgContainer = document.querySelectorAll(".image-container")[msCurrent];
        const msprevbrightness = document.querySelectorAll(".slider-img")[msCurrent+1];
        const msprevImgContainer = document.querySelectorAll(".image-container")[msCurrent+1];
        msprevImgContainer.classList.add("hidden");
        msprevbrightness.classList.remove("current");
        msImgContainer.classList.remove("hidden");
        msbrightness.classList.add("current");
    }
})
