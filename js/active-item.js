$(function () {                                      
    $('.top_menu').each(function () {             
        var location = window.location.href; 
        var link = this.href;                
        if(location == link) {               
            $(this).addClass('activ');  
        }
    });
});	
