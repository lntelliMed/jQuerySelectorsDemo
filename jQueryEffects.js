$("#fadeOutButton").on("click", function(){
	//$("div").fadeOut();
	$("div").fadeOut(1000, function(){
		//console.log("Fade Completed!");
		$(this).remove();
	});
	// console.log("Fade Completed!");
});


$("#fadeInButton").on("click", function(){
	$("img").fadeIn(1000, function(){

	});
});

$("#fadeToggleButton").on("click", function(){
	$("#fadeTogglePar").fadeToggle(500, function(){
		
	});
});

$("#slideDownButton").on("click", function(){
	$("#slideDownPar").slideDown(); //??
});

// $( "#slideDownButton" ).click(function() {
//   $( "#slideDownPar" ).slideDown( "slow", function() {
//   });
// });

$("#slideUpButton").on("click", function(){
	$("#slideUpPar").slideUp();
});

// $("#slideToggleButton").on("click", function(){
// 	$("#slideTogglePar").slideToggle();
// });

$("#slideToggleButton").on("click", function(){
	$("#slideTogglePar").slideToggle(1000, function(){
		//$(this).remove();
		console.log("Toggle Slide Completed");
	});
});