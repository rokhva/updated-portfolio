
//nav and scroll (suppoesed to scroll, for some reason it refuses)
$(document).ready(function(){
    $('.slide-section').click(function(e){
        let linkHref = $(this).attr('href');

        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 1000);


        e.preventDefault();
    });
});

// opens new tab for trails and tunes project page
$('#proj-1').click(function() {
    window.open('https://danalittleskier.github.io/ProjectOne/');
});
//trails and tunes repo
$('#git-1').click(function() {
    window.open('https://github.com/rokhva/ProjectOne');
});

//new tab for sushi trivia
$('#proj-2').click(function() {
    window.open('https://rokhva.github.io/triviaGame/');
});
//sushi trivia repo
$('#git-2').click(function() {
    window.open('https://github.com/rokhva/triviaGame');
});