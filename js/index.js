let changeNavbarBacground = $('#about').offset().top;
let homeheight = $('#home').height();
let navbarHeight = $('nav').height();
$(window).scroll(function () { 
    if($(window).scrollTop() > changeNavbarBacground - navbarHeight){
        $('.navbar').css('backgroundColor', 'rgb(0,0,0,0.8)');
        $('.top').fadeIn(1000)
    }else{
        $('.navbar').css('backgroundColor','transparent');
        $('.top').fadeOut(1000);
    }
})