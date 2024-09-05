function initAboutSlider() {
    $('.about_carousel').slick({});
}
function setHeaderColor(){
    const aboutTop = $('#about').offset().top;
    const $header = $('header');

    window.document.addEventListener('scroll', function (){
        if($header.offset().top + $header.height() > aboutTop){
            $header.css('background-color', '#fff');
        } else {
            $header.css('background-color', '#ecf0f7');
        }
    }, {passive:true})
}
function createParallax(){
    $('.composition').parallax({imageSrc: '/img/water1.jpg'});
}

$(document).ready(function(){
    initAboutSlider();
    setHeaderColor();
    createParallax();
});