for (var i = 0; i <= 100; i++) {
	var puts = '';
	if ((i % 3 === 0) && (i % 5 !== 0)) puts += i + ' Fizz';
	if ((i % 5 === 0) && (i % 3 !== 0)) puts += i + ' Buzz';
	if ((i % 3 === 0) && (i % 5 === 0)) puts += i + ' FizzBuzz';
	console.log(puts || i);}
