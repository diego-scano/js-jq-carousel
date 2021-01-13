var last = document.getElementsByClassName('last');

$('.next i').click(function () {
  $('.images > .active').removeClass('active').next().addClass('active');
  $('.nav > i.active').removeClass('active').next().addClass('active');
})

$('.prev i').click(function () {
  $('.images > .active').removeClass('active').prev().addClass('active');
  $('.nav > i.active').removeClass('active').prev().addClass('active');
})
