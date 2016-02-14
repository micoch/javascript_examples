
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
	* type: GET method
	*/
	$('#some-button').click(function(){ //select the target button
		$.ajax({
			url: "http://www.example.com/api/v1/server-document",
			dataType: "jsonp"
			data: {
				format: "json"
			},
			error: function(msg){
				// Handle errors here.
			},
			success: function(data){
				// Do something with the returned data.
			},
			type: "GET"
		});
	});
	

});