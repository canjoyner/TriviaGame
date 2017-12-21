var question1 = ["How many infinity stones are there in the marval universe? ","3","5","6","8","2"]
var question2 =["What dialect does the little mermaid's sebastian sing in?", "british", "jamacian", "french", "italian","1"]
var question3 = ["what is the bride's code name in kill bill", "Sirius Black", "Halle Berry", "Black Widow", "Black Mamba", "3"]
var question4 =["Which inception actor is not in the dark night? ", "Leonardo DiCaprio", "Tom Hardy", "Michael Caine", "Joseph Gordon Levitt","0"]

var guess="";
var bank = [question1,question2,question3]
var current;

// keep score
var correct = 0;
var incorrect = 0;


// timer variables
var time = 10;
var interval;


$("#start").on ("click", function() {
	$("#start").text("Answer all the questions before time runs out!");
	      	 runTimer();

	$(".1question").text(question1[0]);
	$("#one").text(question1[1]);
	$("#two").text(question1[2]);
	$("#three").text(question1[3]);
	$("#four").text(question1[4]);

	$(".2question").text(question2[0]);
	$("#2one").text(question2[1]);
	$("#2two").text(question2[2]);
	$("#2three").text(question2[3]);
	$("#2four").text(question2[4]);

	$(".3question").text(question3[0]);
	$("#3one").text(question3[1]);
	$("#3two").text(question3[2]);
	$("#3three").text(question3[3]);
	$("#3four").text(question3[4]);

	$(".4question").text(question4[0]);
	$("#4one").text(question4[1]);
	$("#4two").text(question4[2]);
	$("#4three").text(question4[3]);
	$("#4four").text(question4[4]);



$(".choice1").on("click", function() {    
      	var guess = $(this).val();
      	console.log(guess)  	
    		if (question1[5] === guess){
      			correct++;}
      		else {
      		incorrect++;}
        })
  
$(".choice2").on("click", function() {    
      	var guess = $(this).val();
      	console.log(guess)  	
    		if (question2[5] === guess){
      			correct++;}
      		else {
      		incorrect++;}
        })

$(".choice3").on("click", function() {    
      	var guess = $(this).val();
      	console.log(guess)  	
    		if (question3[5] === guess){
      			correct++;}
      		else {
      		incorrect++;}
        })

$(".choice4").on("click", function() {    
      	var guess = $(this).val();
      	console.log(guess)  	
    		if (question4[5] === guess){
      			correct++;}
      		else {
      		incorrect++;}
        })

function runTimer(){
	interval =setInterval(decrement,1000);
		function decrement() {
			time--;
			$("#timer").html("<p>" + time + "</p>");
		if (time === 0){
			stop();
			console.log("stop")
	}	}
}
 

function stop() {
	clearInterval(interval);
	$(".gameArea").text("You have " + correct +" right answers and" + incorrect +" wrong.");
	

}

})
// // funtion between(){}




