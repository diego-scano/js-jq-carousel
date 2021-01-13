$('.next i').click(function () {

  var currentImg = $('.images img.active');
  currentImg.removeClass('active');

  if(currentImg.hasClass('last')) {
    $('.images img.first').addClass('active');
  } else {
    currentImg.next().addClass('active');
  }

  var currentCircle = $('.nav i.active');
  currentCircle.removeClass('active');

  if(currentCircle.hasClass('last')) {
    $('.nav i.first').addClass('active');
  } else {
    currentCircle.next().addClass('active');
  }
})


$('.prev i').click(function () {

  var currentImg = $('.images img.active');
  currentImg.removeClass('active');

  if(currentImg.hasClass('first')) {
    $('.images img.last').addClass('active');
  } else {
    currentImg.prev().addClass('active');
  }

  var currentCircle = $('.nav i.active');
  currentCircle.removeClass('active');

  if(currentCircle.hasClass('first')) {
    $('.nav i.last').addClass('active');
  } else {
    currentCircle.prev().addClass('active');
  }
})
