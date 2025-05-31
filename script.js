const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


function page3Animation() {
    var fixImg = document.querySelector("#fixed-img");
    var elemC = document.querySelector(".elem-container")
    elemC.addEventListener("mouseenter", () => {
        fixImg.style.display = "block";
    })
    elemC.addEventListener("mouseleave", () => {
        fixImg.style.display = "none";
    })
    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", () => {
            var image = e.getAttribute("data-image")
            fixImg.style.backgroundImage = `url(${image})`
        })
    })
}
page3Animation();
// var elem1 = document.querySelector("#elem1");
// elem1.addEventListener("mouseenter", ()=>{
//     var image = elem1.getAttribute("data-image")
//     fixImg.style.backgroundImage = `url(${image})`
// })



function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
swiperAnimation();


//page4 images animation

// var mouseMove1 = document.querySelector("#img1");
// var mouseMove2 = document.querySelector("#img2");
// var mouseMove3 = document.querySelector("#img3");
// var mouseMove
// var imgDiv = document.querySelector(".image-change-div")
// imgDiv.forEach(function(e){
//     e.addEventListener("click", ()=>{
//         mouseMove = e.getAttribute("id");
//     })
// })
// var bgImg = document.querySelector(".right-div");
// var imgSrc 

// mouseMove1.addEventListener("click", (e)=>{
//     imgSrc = e.getAttribute("img-src");
//     e.style.color = "#efebe2"
//     bgImg.innerHTML = `<img src = "${imgSrc}>"`
// })
// mouseMove2.addEventListener("click", (e)=>{
//     imgSrc = e.getAttribute("img-src");
//     e.style.color = "#efebe2"
//     bgImg.innerHTML = `<img src = "${imgSrc}>"`
// })
// mouseMove3.addEventListener("click", (e)=>{
//     imgSrc = e.getAttribute("img-src");
//     e.style.color = "#efebe2"
//     bgImg.innerHTML = `<img src = "${imgSrc}>"`
// })

function loaderAnimation() {
    var loader = document.querySelector(".loader")
    var firstH1 = document.querySelector("#firstH1")
    var secondH1 = document.querySelector("#secondH1")
    var thirdH1 = document.querySelector("#thirdH1")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4000)

    setTimeout(function () {
        firstH1.style.opacity = "1"
    }, 1000)
    setTimeout(function () {
        firstH1.style.opacity = "0"
    }, 2000)
    setTimeout(function () {
        secondH1.style.opacity = "1"
    }, 2000)
    setTimeout(function () {
        secondH1.style.opacity = "0"
        thirdH1.style.opacity = "1"
    }, 3000)
}
loaderAnimation();
