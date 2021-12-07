$(document).ready(function (){
    $("#message").dialog({
        autoOpen: true,
        show: {
            effect: "fade",
            duration: 500,
        },
        hide: {
            effect: "fade",
            duration: 500,
        },
        modal: true,
        draggable: false,
        resizable: false,
    });
    $("button").click(function(){


        setTimeout(function (){
            document.location.assign("choose.html")
        },1000)
        
    })
})