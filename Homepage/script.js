//var added = true;
$(document).ready(function() {

	$('.data').hide();
	$('.description').show();
	
	$('#nav_home').click(function() {
		$('.data').hide(500);
		$('.description').show(500);
	});
	
	$('#nav_data').click(function() {
		$('.description').hide(500);
		$('.data').show(500);
	});
	
	$('#data1').click(function() {
		$('#content1').fadeToggle(500);
		
	});
	$('#data2').click(function() {
		$('#content2').fadeToggle(500);
		
	});
	$('#data3').click(function() {
		$('#content3').fadeToggle(500);
		
	});
	$('#data4').click(function() {
		$('#content4').fadeToggle(500);
		
	});
});

