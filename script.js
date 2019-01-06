//random equation selector

var elems = $("div");
console.log(elems.length);
if (elems.length) {
  var keep = Math.floor(Math.random() * elems.length);
  console.log(keep);
  for (var i = 0; i < elems.length; ++i) {
    if (i !== keep) {
      $(elems[i]).addClass('hide-from-view');
    }
  }
}

//incorrect answer

$('form').on('submit', function(e){

  var answer = $(this).find('input').first().val();
  var correctAnswer = $(this).parent().attr('data-answer');

  if ( answer == correctAnswer ) {

  } else {
    e.preventDefault();
    alert('Aw! Incorrect, try again!');
  }
});

//refresh btn

function refreshPage(){
  window.location.reload();
} 

//background - credit to Chris Boon https://codepen.io/chrisboon27/pen/rEDIC

$(document).ready(function() {
  var movementStrength = 25;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $("#bg-image").mousemove(function(e){
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * -1 - 25;
            var newvalueY = height * pageY * -1 - 50;
            $('#bg-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
  });
  });

  particlesJS("particles-js", {"particles":{"number":{"value":142,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;