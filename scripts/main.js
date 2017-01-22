$(document).ready(function () {

	$("h1").click(function () {
		console.log("clicked");
	});

	var $imgs = $('.images');
	var counter = 0;

	$imgs.find('img:gt(0)').hide();	// select all images in the div except the first one

	$imgs.click(function() {
		var $curr = $imgs.find('img:visible');	// current image is the only one which is visible
		var $next = $curr.next(); // next might be hidden and underneath the currently displayed image

		if ($next.length == 0) {
			$next = $imgs.find('img:eq(0)');	// if not, loop back to the first img
		}

		$curr.fadeOut('slow');
		$next.fadeIn('fast');
	});

});