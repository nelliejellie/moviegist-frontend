/** function for displaying the hover menu on small devicesb **/
$(function(){
	$('#Hollywood-smallscreen').dblclick(function(){
		$('#ul-smallscreen1').css({'display':'block'});
	});
	$('#Nollywood-smallscreen').dblclick(function(){
		$('#ul-smallscreen2').css({'display':'block'});
	});
	$('#Bollywood-smallscreen').dblclick(function(){
		$('#ul-smallscreen3').css({'display':'block'});
	});
});