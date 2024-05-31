$(document).ready(function(){
    //슬라이드
    function slide(){
        $('.slide ul').animate({left:"-100%"},1000,
            function(){
                $('.slide ul').append($('.slide ul li').first());
                $('.slide ul').css({left:"0"});
            });
    }
    setInterval(slide,3000);


    //메뉴
    $('nav>ul>li').mouseenter(function(){
        $(this).find('.sub').stop().fadeIn();
    });
    $('nav>ul>li').mouseleave(function(){
        $('.sub').stop().fadeOut();
    });


    
    //팝업
    $('.pp').click(function(){
        $('.popup').show();
    });
    $('button').click(function(){
        $('.popup').hide();
    });
});