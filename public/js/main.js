// Smooth Scroll taken from "http://css-tricks.com/snippets/jquery/smooth-scrolling/"
var socket = io.connect('/')

$(document).ready(function () {

	positionContent()
	console.log($(window).scrollTop()/$())
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
		if ($(window).scrollTop() > $('.navigation_bar_top').offset()['top']) {
			$('.footer').removeClass('hidden')
		} else {
			$('.footer').addClass('hidden')
		}
	})

	$(window).on('resize', function () {
		positionContent()
	})

	// $('.photos').on('mouseover', function (e) {
	// 	var curr_div = $(e.currentTarget),
	// 		desc_div = curr_div
	// })

})

function positionContent () {
	var nav_bar = $('.navigation_bar_top'),
		vph = nav_bar.offset()['top'] + nav_bar.height(),
		req_mtop = window.innerHeight - vph
	$('.navigation_bar_top').css('margin-bottom', req_mtop.toString())
}

