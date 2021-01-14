$(function() {
    // window.addEventListener('scroll', function(){
    //     let h = document.querySelector('.header__inner')
    //     if(pageYOffset>500){
    //         h.classList.add('header--active')
    //     }
    //     else{
    //         h.classList.remove('header--active')
    //     }
    // });

    $('.menu, a').on('click', function (e) {
		e.preventDefault();
        var id  = $(this).attr('href'),
		top = $(id).offset().top;
        $('body, html').animate({ scrollTop: top }, 1500);
	});

    $('.slider__blog-inner').slick({
        dots: true,
        arrows: false,
        autoplay: true,
    });

    $('.menu__btn, .menu a').on('click', function() {
        $('.menu__list-items').toggleClass('menu__list-items--active');
    });

    var Mixer = mixitup('.gallery__content');
});