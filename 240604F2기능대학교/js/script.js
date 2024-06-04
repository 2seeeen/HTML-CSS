$(document).ready(function(){

    //슬라이드 페이드인아웃
    var num = 0;
    setInterval(function(){
        if(num<2){
            num++;
        }else{
            num = 0;
        }

        $('.slide ul li').fadeOut(1000);
        $('.slide ul li').eq(num).fadeIn(1000);


    },3000);


    //메뉴 개별
    $('nav>ul>li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown('.slow');
    });
    $('nav>ul>li').mouseleave(function(){
        $('.sub').stop().slideUp('.slow');
    });


    //팝업
    $('.pp').click(function(){
        $('.popup').show();
    });
    $('button').click(function(){
        $('.popup').hide();
    });




});