
$(".reveal-btn").click(
    function(){
//    $(".chair").css("display", "block");
      $(".dirt").toggleClass("reveal");    
      $(".dirtTwo").toggleClass("reveal");      
  
    }
)

$(".ant-btn").click(
    function(){
//    $(".chair").css("display", "block");
      $(".ant").toggleClass("reveal");      
    }
)

$(".label-btn").click(
    function(){
//    $(".chair").css("display", "block");
      $(".labels").toggleClass("reveal");      
    }
)

$(".food-btn").click(
    function(){
//    $(".chair").css("display", "block");
      $(".food").toggleClass("reveal");      
    }
)


//$(".dirt").draggable();
$(".draggable").draggable();

/* 

$("button").click(
    function(){
    $("p").toggleClass("main");
    }
); 

$ will target every of these p elements

*/


