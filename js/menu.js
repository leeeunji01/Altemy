$(function(){
    $(".menu li").mouseenter(function(){
        $(this).children(".sub_bg").stop().slideDown();
    });

    $(".menu li").mouseleave(function(){
        $(this).children(".sub_bg").stop().slideUp();
    });
});