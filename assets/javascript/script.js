
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


//________________________Click listeners for projects_______________________________//

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

//new tab for wordguess
$('#proj-3').click(function() {
    window.open('https://rokhva.github.io/word-guess-game/');
});
//word guess repo
$('#git-3').click(function() {
    window.open('https://github.com/rokhva/word-guess-game');
});

//new tab for train times
$('#proj-4').click(function() {
    window.open('https://rokhva.github.io/train-time/');
});
//train time repo
$('#git-4').click(function() {
    window.open('https://github.com/rokhva/train-time');
});

//train time repo
$('#git-5').click(function() {
    window.open('https://github.com/rokhva/liri');
});

//eat the burger
$('#proj-6').click(function() {
    window.open('');
});

$('#git-6').click(function() {
    window.open('https://github.com/rokhva/eat-the-burger');
});

//news scraper
$('#proj-7').click(function() {
    window.open('https://intense-stream-96798.herokuapp.com/');
});
$('#git-7').click(function() {
    window.open('https://github.com/rokhva/news-scraper');
});

//node sql storefront
$('#git-8').click(function() {
    window.open('https://github.com/rokhva/node-sql-storefront');
});

//clicky game repo
$('#git-9').click(function() {
    window.open('https://github.com/rokhva/clicky-game');
});

//news scraper
$('#proj-10').click(function() {
    window.open('http://localbandit.nihaar.io/home');
});
$('#git-10').click(function() {
    window.open('https://github.com/rokhva/updated-portfolio');
});

