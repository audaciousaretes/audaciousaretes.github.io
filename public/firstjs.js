

var onHand = -9;
if (onHand > 100) {
	console.log (onHand)
} else if (onHand <= 100 && onHand > 0) {
	console.log ("Low on Stock but not out of stock");
} else if (onHand === 0) {
	console.log ("We are out of stock");
} else {
	console.log ("What are you talking about?");
}



  for (var i = 0; i <= 100; i++)
	if (i <= 2){
	console.log (i);
}	else if (0 >= (i%3) + (i%5)){		
	console.log (i + " Fizz Buzz");
}	else if (i === (i + i%5)){
 	console.log (i + " Buzz");
}	else if (i === (i + i%3)){
 	console.log (i + " Fizz");
}	else if (i = i){
 	console.log (i);
}