$(document).ready(function(){
    //슬라이드
    var num = 0;

    setInterval(function(){
    if(num<2){
     num++;
    }else
    num = 0;
 
    $('.slide li').fadeOut('slow');
    $('.slide li').eq(num).fadeIn('slow');
 
    },3000);
   
    // setInterval(function(){
    //     $('.slide li:visible').fadeOut().next().fadeIn().end().appendTo('.slide');
    // },3000);

    // function slide(){
    //     $('.slide ul').animate({top :"-400px"},1000,
    //         function(){
    //             $('.slide ul').append($('.slide ul li'.first());)
    //             $('.slide ul').css({top:"0"};)
    //         });
    // }
    // setInterval(slide,3000);

    
    // function slide(){
    //     $('.slide ul').animate({left:"-100%"},1000,
    //         function(){
    //             $('.slide ul').append($('.slide ul li'.first());)
    //             $('.slide ul').css({left:"0"};)
    //         });
    // }
    // setInterval(slide,3000);


    //메뉴
    $('nav>ul>li').mouseenter(function(){
        $('.sub').stop().fadeIn();
    });
    $('nav>ul>li').mouseleave(function(){
        $('.sub').stop().fadeOut();
    });


    //탭
    $('.notice').show();
    $('.btn1').click(function(){
        $('.text article').hide().first().show();
    });
    $('.btn2').click(function(){
        $('.text article').hide().last().show();
    });


    //팝업
    $('.pp').click(function(){
        $('.popup').show();
    });
    $('button').click(function(){
        $('.popup').hide();
    });
 


});

