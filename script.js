function initAboutSlider() {
    $('.about_carousel').slick({});
}
function setHeaderColor(){
    if(!document.getElementById('about')) return;
    const aboutTop = $('#about').offset().top;
    const $header = $('header');

    window.document.addEventListener('scroll', function (){
        if($header.offset().top + $header.height() > aboutTop){
            $header.addClass('filled');
        } else {
            $header.removeClass('filled');
        }
    }, {passive:true})
}
function createParallax(){
    $('.composition').parallax({imageSrc: '/img/water1.jpg'});
}
function openCallbackForm(){
    $('.product_item .btn, .banner .btn').on( "click", function (){
        $('#popup').css({display:'flex'});
    });
    $('#popup').on( "click", function (event){
        if(event.target.id === 'popup'){
            $('#popup').css({display:'none'});
        }
    });
    $('#popup .close').on( "click", function (){
        $('#popup').css({display:'none'});
    });
}
function formValidation(){
    $.validator.methods.phone = function( value, element ) {
        return !value.includes('_');
    }
    $.validator.messages.phone = 'Введіть коректний номер телефону';
    $.validator.messages.required = "Обов'язкове поле";
    $("#callback_form input[name=phone]").inputmask({
        mask:"+38(099) 999-99-99",
    });
    $("#callback_form").validate({
        errorElement: 'span',
        rules:{
            phone:{
                phone:true,
            },
        },
        submitHandler: function() {
            submitForm();
        }
    });
}
function submitForm(){
    console.log('submit form')
    $.ajax({
        url: '',
        type: 'POST',
        dataType: 'json',
        data: $("#callback_form").serializeArray(),
        beforeSend: () => {

        },
        success: response => {

        },
        error: () => {

        },
        complete: () => {

        },
    });
}
function mobMenuTrigger(){
    $('.menu_btn').click(function (){
        $(this).toggleClass('active');
        $('header nav').toggleClass('active');
    });
    $('header nav a').click(function (){
        $('.menu_btn').removeClass('active')
        $('header nav').removeClass('active')
    })
}
function initMobileBannerBackground(){
    const isMobile = window.innerWidth < 1280
    if(isMobile){
        const img = document.querySelector('img.banner_video');
        img.src = img.dataset.src
    } else {
        const video = document.querySelector('video.banner_video');
        const source = document.createElement('SOURCE');
        source.type = "video/mp4"
        source.src = "./img/water_bg1.mp4"
        video.appendChild(source)
    }
}


$(document).ready(function(){
    initMobileBannerBackground();
    initAboutSlider();
    setHeaderColor();
    createParallax();
    openCallbackForm();
    formValidation();
    mobMenuTrigger();
});