

$(document).ready(function(){
    $('.slide-section').click(function(e){
        let linkHref = $(this).attr('href');

        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 1000);


        e.preventDefault();
    });
});