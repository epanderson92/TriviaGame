// make counter count down from  130
$("document").ready(function() {
	console.log("ready")
var number = 130;

function run (){
	counter = setInterval(decrement, 1000)
}

function decrement(){
	number--;

	$("#show-number").html("<h2>" + number + "</h2>");

	if (number === 0 ){
		stop();
		alert("time Up!")
		
	}

	
}
	run();

 });


// make true or false selectors 
// start quize button