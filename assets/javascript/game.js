function msg(){
	alert("Hello Rahul");
}

var options = ["Rizzo", "Bryant", "Russell", "Lester", "Arrieta", "Hendricks"];

var computerSelection = options[Math.floor(Math.random() * options.length)];


console.log(computerSelection);
var length = computerSelection.length;
console.log(length);

if(computerSelection.length===2){
var div = document.getElementById('current').innerHTML = "- -";
}

else if(computerSelection.length===3){
var div = document.getElementById('current').innerHTML = "- - -";
}

else if(computerSelection.length===4){
var div = document.getElementById('current').innerHTML = "- - - -";
}

else if(computerSelection.length===5){
var div = document.getElementById('current').innerHTML = "- - - - -";
}

else if(computerSelection.length===6){
var div = document.getElementById('current').innerHTML = "- - - - - -";
}

else if(computerSelection.length===7){
var div = document.getElementById('current').innerHTML = "- - - - - - -";
}

else if(computerSelection.length===8){
var div = document.getElementById('current').innerHTML = "- - - - - - - -";
}