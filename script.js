// let slideIndex = 1;
// let slides;
// let dots;
// // Carousel code ////////////////////////////////////////////////////
// showSlide(slideIndex);

// // navigation by arrows
// function moveSlide(n){
//     showSlide(slideIndex += n);
// }

// // navigation by dots
// function nowSlide(n){
//     showSlide(slideIndex = n);
// }

// function showSlide(n){
    
//     slides = document.getElementsByClassName("slide");
    
//     dots = document.getElementsByClassName("dot");

//     if(n > slides.length){
//         n = 1;
//     }

//     if(n < 1){
//         n = slides.length;
//     }

//     for(let i = 0; i < slides.length; i++){
//         slides[i].style.display = "none";
//         dots[i].className = dots[i].className.replace(" actDot", "");
//     }

//     slides[n].style.display = "block";

//     dots[n].className += "actDot";

//     console.log(" hmmmmmm");
// }