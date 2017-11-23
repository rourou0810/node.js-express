$(document).ready(function(){
    //顶部导航切换
    $(".nav li a").click(function(){
        //$(".nav li a.selected").removeClass("selected")
        $(this).addClass("selected").liblings().removeClass('selected');
    })  

    $('.tablelist tbody tr:odd').addClass('odd');
    $(".click").click(function(){
        $(".tip").fadeIn(200);
    });
          
    $(".tiptop a").click(function(){
        $(".tip").fadeOut(200);
    });

    $(".sure").click(function(){
        $(".tip").fadeOut(100);
    });

    $(".cancel").click(function(){
        $(".tip").fadeOut(100);
    });

});