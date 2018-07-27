

$(document).ready(function() {


	$('body').keydown(function(event) {

		
		var a=event.which;

		$('div').text(' Pushed Button : '+a);

		if (a==38) {

			$('div').animate({

				marginTop:'-=10px'
			});
		}
		else if(a==37) {

			$('div').animate({

				marginLeft:'-=10px'
			});
		}
		else if(a==39) {

			$('div').animate({

				marginLeft:'+=10px'
			});

		}
		else if(a==40) {

			$('div').animate({
				marginTop:'+=10px'
			});
		}

	});



});