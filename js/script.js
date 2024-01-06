//  fadein navbar on first load
window.onload = function(){
    const btnHumberger = document.querySelector(".btn-hamburger-menu");
    const nav = document.querySelector("nav .container");

    nav.style.opacity = "1";
    nav.style.transitionDelay= "2s";
    btnHumberger.style.opacity = "1";
    btnHumberger.style.transitionDelay= "2s";
}

// navbar background color visible or hidden
var lastScroll = 0;
window.addEventListener("scroll", function() {
    const btnHumberger = document.querySelector(".btn-hamburger-menu");
    const nav = document.querySelector("nav .container");
    const currentScroll = scrollY;
    const maxScroll = 204;

    if(currentScroll <= maxScroll){
        nav.style.transitionDelay= "0s";
        nav.style.opacity = "1";
        btnHumberger.style.transitionDelay= "0s";
        btnHumberger.style.opacity = "1";
        nav.classList.remove("container-bg-black");
    }else if (currentScroll > lastScroll) {
        nav.style.transitionDelay= "0s";
        nav.style.opacity = "0";
        btnHumberger.style.transitionDelay= "0s";
        btnHumberger.style.opacity = "0";
    } else {
        nav.style.transitionDelay= "0s";
        nav.style.opacity = "1";
        btnHumberger.style.transitionDelay= "0s";
        btnHumberger.style.opacity = "1";
        nav.classList.add("container-bg-black"); 
    }
        lastScroll = currentScroll;
});

// open sidebar when burger button click 
const btnHumberger = document.querySelector(".btn-hamburger-menu");
btnHumberger.addEventListener("click", function(){
    const aside = document.querySelector("aside .container");
    const overlay = document.querySelector(".overlay");

    btnHumberger.children[0].classList.toggle("top");
    btnHumberger.children[1].classList.toggle("middle");
    btnHumberger.children[2].classList.toggle("bottom");
    aside.classList.toggle("visible");
    overlay.classList.toggle("show-overlay");

    // auto close sidebar when doing scroll
    window.onscroll = function(){
        btnHumberger.children[0].classList.remove("top");
        btnHumberger.children[1].classList.remove("middle");
        btnHumberger.children[2].classList.remove("bottom");
        aside.classList.remove("visible");
        overlay.classList.remove("show-overlay");
    }
    
});

//scroll-to-bottom-text-hiden | scroll-to-top-text-visible
function slideInOutTextTop(){
    const imgBgText = document.querySelector("#image-bg-text-center .container");

    if(imgBgText){
        window.addEventListener("scroll", function(){
            const currentScroll = scrollY;
            const scrollMaxDown = 102;
            if(currentScroll >= scrollMaxDown){
                imgBgText.classList.add("slide-out-text");
            }else{
                imgBgText.classList.remove("slide-out-text");
            }
        
        });
    };
}
slideInOutTextTop();

// video-auto-play-and-repeat
function videoRepeat(){
    const video = document.querySelector("video");

    if(video){
        video.addEventListener("canplay", function() {
            video.play();
        });
        video.addEventListener("ended", function() {
            video.currentTime = 0;
            video.play();
        });
    }
}
videoRepeat();

// auto-counter-stats-number
function autoCounter(){
    const launches = document.querySelector(".launches h1")
    const landings = document.querySelector(".landings h1")
    const reflights = document.querySelector(".reflights h1")
    const randomValue1 = Math.random() * 200;
    const randomValue2 = Math.random() * 200;
    const randomValue3 = Math.random() * 200;
    const maxValue1= Math.round(randomValue1);
    const maxValue2= Math.round(randomValue2);
    const maxValue3= Math.round(randomValue3);
    let counterId;

    let currentValue1 = 0;
    let currentValue2 = 0;
    let currentValue3 = 0;

    if(launches){

        function updateElement(){
            launches.innerHTML = currentValue1;
            landings.innerHTML = currentValue2;
            reflights.innerHTML = currentValue3;
        }

        function incrementCounter(){
            if(currentValue1 < maxValue1){
                currentValue1++;
                updateElement()
            }
            if(currentValue2 < maxValue2){
                currentValue2++;
                updateElement()
            }
            if(currentValue3 < maxValue3){
                currentValue3++;
                updateElement()
            }
    
        }
        
        window.addEventListener("scroll", function(){
            if(scrollY >= 408){
                counterId = setInterval(incrementCounter, 1);
            }else{
                clearInterval(counterId);
            }
            console.log(this.scrollY);
        })
    }

}
autoCounter();

//image-slider
function slideshow(){
    const slides = document.querySelector(".slides");
    const nextSlide = document.querySelector(".fa-chevron-right");
    const prevSlide = document.querySelector(".fa-chevron-left");
    let currentSlide = 0;

    if(slides){

        nextSlide.addEventListener("click", function(){
            currentSlide += -100;
            slides.style.transform = `translateX(${currentSlide}%)`;
        
            if(currentSlide == -300){
                const reset = 0;
                currentSlide = reset
                slides.style.transform = `translateX(${currentSlide}%)`;
            }  
        });
        
        prevSlide.addEventListener("click", function(){
          
            if(currentSlide == 0){
                currentSlide = -200;
                slides.style.transform = `translateX(${currentSlide}%)`;
            } else if(currentSlide < 0){
                currentSlide += 100;
                slides.style.transform = `translateX(${currentSlide}%)`;
            }
        });

    }

}
slideshow();

    
    
        
    
