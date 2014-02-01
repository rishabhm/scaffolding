// Smooth Scroll taken from "http://css-tricks.com/snippets/jquery/smooth-scrolling/"
var socket = io.connect('/')

$(document).ready(function () {

	positionContent()

	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 5
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	$(document).scroll(function() {
		var scroll_ratio = $(window).scrollTop()/$(window).height()
		if (scroll_ratio > 1) {
			$('.footer').removeClass('hidden')
		} else {
			$('.footer').addClass('hidden')
		}
	})

	$(window).on('resize', function () {
		positionContent()
	})

})

function positionContent () {
	var vph = $(window).height(),
		req_mtop = vph+45
	$('.content_item').each(function (ind) {
		$(this).css('top', (req_mtop * (ind+1)).toString())
	})
}

