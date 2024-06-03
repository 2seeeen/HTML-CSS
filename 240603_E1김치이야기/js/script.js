$(document).ready(function(){

    //슬라이드 좌우
    setInterval(function(){
        $('.slide ul').animate({'marginLeft':'-100%'},1000,
        function(){
            $('.slide ul').append($('.slide ul li').first());
            $('.slide ul').css({'marginLeft':'0'});
        });
    },3000);

    //메뉴 개별 부드럽게
    $('nav>ul>li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown('slow');
    });
    $('nav>ul>li').mouseleave(function(){
        $(this).find('.sub').stop().slideUp('slow');
    });

    //팝업
    $('.pp').click(function(){
        $('.popup').show();
    });
    $('button').click(function(){
        $('.popup').hide();
    });



});