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

class FlyIco {
    constructor(options) {
        this.path = options.path;
        this.timeToDelete = options.timeToDelete;
        this.wrapper = options.wrapper;
    }
    start(){
        this.createImg();
        this.addImg();
        setTimeout(()=>{
            this.deleteImg();
        }, this.timeToDelete)
    }
    createImg(){
        const img = document.createElement('IMG');
        img.src = this.path;
        img.classList.add('ico');
        $(img).css({
            'transition': this.timeToDelete + 'ms linear',
            'left': random(5, 95) + '%'
        });
        this.img = img;
    }
    addImg(){
        $(this.wrapper).append(this.img);
        setTimeout(()=>{
            $(this.img).css({ 'top': '0' });
        },50)
    }
    deleteImg(){
        $(this.img).remove();
    }
}
function random(min, max) {
    return Math.random() * (max - min) + min;
}
function bannerAnimations(){
    new FlyIco({
        path:'./img/ico.png',
        timeToDelete: random(12000, 25000),
        wrapper: '#start',
    }).start()
    setInterval(()=>{
        new FlyIco({
            path:'./img/ico.png',
            timeToDelete: random(12000, 25000),
            wrapper: '#start',
        }).start()
    }, random(2000, 5000))

}

$(document).ready(function(){
    initAboutSlider();
    setHeaderColor();
    createParallax();
    openCallbackForm();
    formValidation();
    bannerAnimations();
});