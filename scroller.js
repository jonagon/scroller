$(document).ready(function(){
	//parameter
	dauer = 20000; // dauer eines scrollvorgangs in ms

	// definiere dynamische Variablen
	var hoehe_d = $(document).height();
	var hoehe_w = $(window).height();
	var d_html = $('body').html();
	// wenn gescrollt werden muss:
	if(hoehe_d > hoehe_w){
		// entleere body und schreibe die drei scroller mit jeweils dem body hinein
		$('body').html('').append('<div id="div_scroller_1" style="position: relative;"></div><div id="div_scroller_2" style="position: relative;"></div>');
		$('#div_scroller_1').html(d_html);
		$('#div_scroller_2').html(d_html);
		scroll();
	}


function scroll(){
	var hoehe_d = $('#div_scroller_1').height();
	var hoehe_w = $(window).height();
	$('body').animate({
		scrollTop: (hoehe_d)
	}, dauer, 'linear');
	$('body').animate({scrollTop:(0)}, 1);
	scroll();
}	
})
