
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var runningTotal = 0;
var targetNumber;
var wins = 0;
var losses = 0;

$(document).ready(function(){
// Assign crystals and Target a random number
var startGame = function(){
	crystal1 = Math.floor(Math.random() * 12);
	crystal2 = Math.floor(Math.random() * 12);
	crystal3 = Math.floor(Math.random() * 12);
	crystal4 = Math.floor(Math.random() * 12);
	targetNumber = Math.floor(Math.random() * 70 + 19)
	$("#targetNumber").html(targetNumber);
	console.log(crystal1);
	console.log(crystal2);
	console.log(crystal3);
	console.log(crystal4);
}
startGame();
// console.log(targetNumber);

$("#crystal1").on("click", function(){
	runningTotal += crystal1;
	$("#counter").html(runningTotal);
});

$("#crystal2").on("click", function(){
	runningTotal += crystal2;
	$("#counter").html(runningTotal);
});

$("#crystal3").on("click", function(){
	runningTotal += crystal3;
	$("#counter").html(runningTotal);
});

$("#crystal4").on("click", function(){
	runningTotal += crystal4;
	$("#counter").html(runningTotal);
});

$("#crystal1, #crystal2, #crystal3, #crystal4").on("click", function(){
	if (runningTotal === targetNumber) {
		wins += 1;
		runningTotal = 0;
		$("#counter").html(runningTotal);
		$("#wins").html(wins);
		startGame();
	}
	else if (runningTotal > targetNumber) {
		losses += 1;
		runningTotal = 0;
		$("#counter").html(runningTotal);
		$("#losses").html(losses);
		startGame();
	}
});



});