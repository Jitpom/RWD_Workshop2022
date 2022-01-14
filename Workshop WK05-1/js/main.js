$(document).ready(function(){
    $("#heading-hero").html("DUST MITE SPRAY");
    $("#heading-hero").css("color", "red");
    
    //If the bars icon is clicked, 
    //add the "active" class to the element with the id "top-nav"
    $(".fa-bars").click(function(){
        $("#top-nav").addClass("active");
    });
    
    //If the times icon is clicked, 
    //remove the "active" class from the element with the id "top-nav"
    $(".fa-times").click(function(){
        $("#top-nav").removeClass("active");
    });

    //If the window is scrolled, call this function
    $(window).scroll(function(){
        let currentScrollTop = $(this).scrollTop();
        console.log(currentScrollTop);

        if (currentScrollTop > 1){
            $("#top-nav").addClass("scroll-active");
        }
        else{
            $("#top-nav").removeClass("scroll-active");
        }
    });

});