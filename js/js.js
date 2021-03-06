var options = {
  offset: 225
}

// Create a new instance of Headhesive.js and pass in some options
var header = new Headhesive('.header', options);

$('.main-slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  dots: true,
  arrows: false,
  infinite: true,
  speed: 600,
  fade: true,
  cssEase: 'linear'
});
$('#clock').countdown('2018/03/05', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<div class="countdown-item"><div class="countdown-title">%d</div> <div class="countdown-name">дня</div></div> '
    + '<div class="countdown-item"><div class="countdown-title">%H</div> <div class="countdown-name">часов</div></div> '
    + '<div class="countdown-item"><div class="countdown-title">%M</div> <div class="countdown-name">минут</div></div> '
    + '<div class="countdown-item"><div class="countdown-title">%S</div> <div class="countdown-name">секунд</div></div>'));
});

$('.hamburger-box').click(function(e) {
  var dropdown = $('.mobile-panel');
  if(dropdown.is(':hidden')){
    $(this).addClass('is-active')
    dropdown.show()
  }
  else{
    $(this).removeClass('is-active')
    dropdown.hide()
  }
});
$('.toggle-button').click(function(e) {
  e.preventDefault()
  var menu = $(this).next()
  if(menu.is(':hidden')){
    menu.show()
  }
  else{
    menu.hide()
  }
});
