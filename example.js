
// basic way to use jquery.nicescroll 
(function(){
	
	$('html').niceScroll();
	
});

/*
  JQuery functions
*/

$(document).ready(function(){

	/*
	* $.ajax();
	*/

	$.ajax({
		url: "http://www.example.com/api/v1/server-document",
		dataType: "jsonp"
		data: {
			format: "json"
		},
		error: function(msg){
			$('.err-msg').html('<h3>Something happened: ' + msg +'.</h3>');
		},
		success: function(data){
			// Do something with the returned data.
		},
		type: "GET"
	});

});