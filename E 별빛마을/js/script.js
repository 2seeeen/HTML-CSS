$(document).ready(function(){

    //메뉴
    $('nav>ul>li').mouseenter(function(){
        $(this).find('.sub').stop().fadeIn('slow');
    });
    $('nav>ul>li').mouseleave(function(){
        $(this).find('.sub').stop().fadeOut('slow');
    });


    //슬라이드 좌우
    setInterval(function(){
        $('.slide ul').animate({'marginLeft':'-100%'},1000,
            function(){
                $('.slide ul').append($('.slide ul li').first());
                $('.slide ul').css({'marginLeft':'0'});
            });
    },3000);


    //팝업
    $('.pp').click(function(){
        $('.popup').show();
    });
    $('button').click(function(){
        $('.popup').hide();
    });

    //탭메뉴
    $('.btn1').click(function(){
        $('article').hide().first().show();
    });
    $('.btn2').click(function(){
        $('article').hide().last().show();
    });

})