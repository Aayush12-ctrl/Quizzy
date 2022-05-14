    $('#fullpage').fullpage({
      anchors: ['section1', 'section2', 'section3'],
      sectionsColor: ['#6495ED', '#FFFFFF', '#FFFFFF'],
    });

fullpage_api.setAllowScrolling(false);

$(document).on('click', '#enter-button', function(){
  var name = document.getElementById("input-Username").value;
    if (name == "") {
        alert("Name must be filled out.");
        return false;
    } else {
        fullpage_api.silentMoveTo('section2');
        document.getElementById("display").innerHTML = name;
        document.getElementById("display1").innerHTML = name;
    }
  
});

$(document).on('click', '#display', function() {
  fullpage_api.silentMoveTo('section1');
});

$(document).on('click', '#btnQuiz', function() {
  fullpage_api.silentMoveTo('section3');
});
$(document).on('click', '#category', function() {
  fullpage_api.silentMoveTo('section2');
});

let animation = anime({
    targets: '.letter',
    opacity: 1,
    translateY: 50, 
    rotate: {
      value: 360,
      duration: 2000,
      easing: 'easeInExpo'
    }, 
    scale: anime.stagger([0.7, 1], {from: 'center'}), 
    delay: anime.stagger(100, {start: 1000}), 
    translateX: [-10, 30]
  });
  tippy('#text', {
    placement: 'bottom',
    animation: 'fade',
    content: "Quizzy is an online quiz app that aims to test children's knowledge on parts and anatomies of vehicles.",
  });

  anime({
    targets: ['#body_1'],
    rotate: 180,
    duration: 1600,
    loop: true,
    elasticity: 600,
    easing: 'easeOutElastic',
});
var design = anime({
  targets: '#cycle #firstRoad, #XMLID_34_',
  translateY: -7,
  easing: 'easeInOutSine',
  duration: 1000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});


var design = anime({
  targets: '#cycle #tyre1,#tyre2',
   rotate: 360, 
  easing: 'linear',
  loop: true,
  direction: 'reverse',
});

var design = anime({
  targets: '#cycle #padel',
   rotate: 360, 
  easing: 'linear',
  loop: true,
  duration: 3000,
  direction: 'reverse',
});