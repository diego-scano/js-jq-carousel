$('.next i').click(function () {

  var currentImg = $('.images img.active');
  currentImg.removeClass('active');

  if(currentImg.hasClass('last')) {
    var firstImg = $('.images img.first');
    firstImg.addClass('active');
  } else {
    currentImg.removeClass('active').next().addClass('active');
  }

  var currentCircle = $('.nav i.active');
  currentCircle.removeClass('active');

  if(currentCircle.hasClass('last')) {
    var firstCircle = $('.nav i.first');
    firstCircle.addClass('active');
  } else {
    currentCircle.removeClass('active').next().addClass('active');
  }
})


$('.prev i').click(function () {

  var currentImg = $('.images img.active');
  currentImg.removeClass('active');

  if(currentImg.hasClass('first')) {
    var lastImg = $('.images img.last');
    lastImg.addClass('active');
  } else {
    currentImg.removeClass('active').prev().addClass('active');
  }

  var currentCircle = $('.nav i.active');
  currentCircle.removeClass('active');

  if(currentCircle.hasClass('first')) {
    var lastCircle = $('.nav i.last');
    lastCircle.addClass('active');
  } else {
    currentCircle.removeClass('active').prev().addClass('active');
  }
})
