$(document).ready(function() {
	$('div.rgaccord1-nest> div, div#rgaccord2-nest> div').hide();
	$('div.rgaccord1-nest> h3, div#rgaccord2-nest> h3').click(function() {
		$(this).next('div').slideToggle('fast');
		if($(this).hasClass("act"))
			$(this).removeClass("act");
		else {
			$(this).addClass("act");
	}
	});
});