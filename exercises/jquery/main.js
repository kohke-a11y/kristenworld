$(".dark-btn").click(
    function(){
        $(".box").toggleClass("dark");
        $(".container").toggleClass("dark");
    }
);


$(".spin-btn").click(
        function(){
            $(".box").toggleClass("spin");
        }
)

$(".reveal-btn").click(
    function(){
//    $(".chair").css("display", "block");
//    $(".chair").toggleClass("reveal");      
      $(".chair").show(); 
      $(".reveal-btn").hide();
    }
)

//$(".chair").draggable();
$(".draggable").draggable();

/* 

$("button").click(
    function(){
    $("p").toggleClass("main");
    }
); 

$ will target every of these p elements

*/
