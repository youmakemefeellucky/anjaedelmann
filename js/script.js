$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > img:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);


$(document).ready(function(){
	$('.navbar-burger').click(function(){
		$(this).toggleClass('open');
    $('.toggle-menu').slideToggle();
    $('.navbar-home').toggle();
	});
});
