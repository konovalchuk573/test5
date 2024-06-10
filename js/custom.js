$(function() {
  setDate();
  popupShow();
  scrollToForm();
  setPackCount();
});


/**
 * Set Date
 */
function setDate() {
  var appendNull = function (num) {
    return num < 10 ? 0 + num.toString() : num;
  };
  d = new Date();
  p = new Date(d.getTime() + 0 * 86400000);
  monthb = '01,02,03,04,05,06,07,08,09,10,11,12'.split(',');
  $('.date').text( appendNull(p.getDate()) + '.' + monthb[p.getMonth()] + '.' + p.getFullYear() );
}


/**
 * Popup Show
 */
function popupShow() {
  $(".popupBox").css({
	height: $(document).height() + "px"
  }), $(".close").click(function () {
	$(".popupBox").fadeOut(200)
  });
  $(".knopka").click(function () {
	$(".popupBox").fadeOut(200)
  });
  var c = !0;
  $(window).mouseout(function (e) {
	e.pageY - $(window).scrollTop() < 1 && 1 == c && ($(".popupBox").fadeIn(200), c = !1)
  })
}


/**
 * Scroll To Form
 */
function scrollToForm() {
  $("a[href^='#']").click(function () {
	var _href = $(this).attr("href");
	$("html, body").animate({
	  scrollTop: $(_href).offset().top + "px"
	});
	return false;
  });
}


/**
 * Pack Count
 */
function setPackCount() {
  var timerIdPackCountNumber = 49;
  $('.pack_count').html(timerIdPackCountNumber);

  var timerIdPackCount = setTimeout(function tick() {
	timerIdPackCountNumber--;
	$('.pack_count').html(timerIdPackCountNumber);
	if (timerIdPackCountNumber > 5) {
	  timerIdPackCount = setTimeout(tick, 60000);
	}
  }, 0);
}
