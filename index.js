//сделай любое число негативным
function makeNegative(num) {
	if (num < 0) return num
	else if (num > 0) {
		return -num
	} else if (num == 0) return num
}
//проверка
//other checking

//переверни строку


function solution(str) {
	return str.split('').reverse().join('')
}
//check

function stringToArray(string) {
	return string.split(' ');
	// code code code

}

function even_or_odd(number) {
	if (number % 2 == 0) {
		return "Even";
	} else {
		return "Odd";
	}
}

function noSpace(x) { return x.split(' ').join('') }\


//new katas

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i*2;
}


//back

function solution(start, finish) 
{
  if(0<start<finish){
    let number=(finish-start)/2
    return number
  }
  //Mew
}