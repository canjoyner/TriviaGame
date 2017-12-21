var question1 = ["what's the first question","answer1","answer2","answer3","answer4","3"]
var question2 =["2nd question", "option1", "option2", "option3", "option4","1"]
var question3 = ["3rd time", "take1", "take2", "take3", "take4", "2"]
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
	$("#start").text("hello");
	for (var i=0;i<bank.length-1; i++){
	current = bank[i];
	round();
	runTimer();
	console.log(current)
	console.log(incorrect)
	}
})



function round(){
	$("#question").text(current[0]);
	$("#one").text(current[1]);
	$("#two").text(current[2]);
	$("#three").text(current[3]);
	$("#four").text(current[4]);


    $(".option").on("click", function() {
      	console.log(current[5])
      	guess = $(this).val();
      	console.log(guess)  	
    		if (current[5] === guess){
      			$("#answer").text(current[5]);
      			correct++;
      			console.log("jiej")}
      		else {$("#answer").text("the correct answer is " + current[5]);
      		incorrect++;
      	}
        })
   }



function runTimer(){
	interval =setInterval(decrement,1000);
		function decrement() {
			time--;
			$("#timer").html("<p>" + time + "</p>");
			console.log("he")
		if (time === 0){
			stop();
			console.log("stop")
	}	}
}
 

function stop() {
	clearInterval(interval);

}

// funtion between(){}




