$(document).ready(function(){

    //슬라이드 좌우
    setInterval(function(){
        $('.slide ul').animate({'marginLeft':'-100%'},1000,
            function(){
                $('.slide ul').append($('.slide ul li').first());
                  $('.slide ul').css({'marginLeft':'0'});
           });
    },3000);


    //슬라이드 좌우
    // function slide(){
    //     $('.slide ul').animate({'marginLeft':'-100%'},1000,
    //         function(){
    //             $('.slide ul').append($('.slide ul li').first());
    //             $('.slide ul').css({'marginLeft':'0'});
    //         });
    // }
    // setInterval(slide,3000);

    //메뉴
    $('nav>ul>li').mouseenter(function(){
        $('.sub').stop().slideDown('slow');
        $('.slide').addClass('on');
    });
    $('nav>ul>li').mouseleave(function(){
        $('.sub').stop().slideUp('slow');
        $('.slide').removeClass('on');
    });

    //탭
    $('.btn1').click(function(){
        $('article').hide().first().show();
    });
    $('.btn2').click(function(){
        $('article').hide().last().show();
    });

    //팝업
    $('.pp').click(function(){
        $('.popup').show();
    });
    $('button').click(function(){
        $('.popup').hide();
    });

});